import { NextResponse } from "next/server";

type ContactBody = {
  name: string;
  email: string;
  phone?: string;
  reason: string;
  message: string;
  website?: string; // honeypot — debe venir vacío
};

const REASON_LABELS: Record<string, string> = {
  visita: "Coordinar una visita",
  voluntariado: "Voluntariado",
  donacion: "Donación / Colaboración",
  derivacion: "Derivación de un concurrente",
  prensa: "Prensa o medios",
  otro: "Otro motivo",
};

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br>");
}

/**
 * Endpoint del formulario de contacto. Envía un mail vía Resend al destinatario
 * configurado en CONTACT_EMAIL (o al mail institucional por defecto).
 *
 * Requiere las variables de entorno:
 *  - RESEND_API_KEY (se obtiene en https://resend.com)
 *  - CONTACT_EMAIL (destinatario, default: apadmsi@fibertel.com.ar)
 *  - RESEND_FROM (remitente, debe ser de un dominio verificado en Resend)
 */
export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { error: "Datos del formulario inválidos." },
      { status: 400 }
    );
  }

  // Honeypot: si está completo es un bot — devolvemos 200 silencioso para no
  // dar pistas pero sin enviar el mail.
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (
    !body?.name?.trim() ||
    !body?.email ||
    !/\S+@\S+\.\S+/.test(body.email) ||
    !body?.message?.trim()
  ) {
    return NextResponse.json(
      { error: "Falta completar algún dato del formulario." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "El envío de mensajes todavía no está habilitado. Mientras tanto, escribinos directamente al mail o llamanos al teléfono.",
      },
      { status: 501 }
    );
  }

  const to = process.env.CONTACT_EMAIL ?? "apadmsi@fibertel.com.ar";
  // Por defecto se usa el sandbox de Resend; para producción reemplazar por
  // un remitente del dominio verificado (ej. web@apadmsi.com.ar).
  const from = process.env.RESEND_FROM ?? "APADMSI Web <onboarding@resend.dev>";

  const reasonLabel = REASON_LABELS[body.reason] ?? "Otro motivo";

  const html = `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, system-ui, sans-serif; color: #2A1F18; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 24px;">
  <h2 style="color: #B91C2C; border-bottom: 1px solid #E5D9C5; padding-bottom: 12px;">
    Nuevo mensaje desde el sitio
  </h2>
  <p><strong>De:</strong> ${escape(body.name)} &lt;${escape(body.email)}&gt;</p>
  ${body.phone ? `<p><strong>Teléfono:</strong> ${escape(body.phone)}</p>` : ""}
  <p><strong>Motivo:</strong> ${escape(reasonLabel)}</p>
  <hr style="border: none; border-top: 1px solid #E5D9C5; margin: 24px 0;">
  <p><strong>Mensaje:</strong></p>
  <p style="background: #FBF6EE; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${escape(body.message)}</p>
  <p style="margin-top: 24px; font-size: 12px; color: #8B7868;">
    Para responder, usá el botón de "Responder" — el campo Reply-to ya está configurado con el email del remitente.
  </p>
</body>
</html>`.trim();

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: body.email,
        subject: `[APADMSI] ${reasonLabel} — ${body.name}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = (await res.text().catch(() => "")) || res.statusText;
      console.error("Resend error:", detail);
      return NextResponse.json(
        {
          error:
            "No pudimos enviar tu mensaje. Probá llamando al teléfono o escribiéndonos directamente al mail.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      {
        error:
          "Hubo un problema al conectar con el servidor. Probá de nuevo en un rato.",
      },
      { status: 500 }
    );
  }
}
