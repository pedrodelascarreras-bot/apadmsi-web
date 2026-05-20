import { NextResponse } from "next/server";

type Body = {
  email: string;
  website?: string; // honeypot
};

/**
 * Endpoint de suscripción al boletín. Recibe un email y lo notifica al
 * destinatario configurado vía Resend para que el cliente lo registre en
 * la lista de envío del boletín mensual.
 */
export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json(
      { error: "Datos inválidos." },
      { status: 400 }
    );
  }

  // Honeypot anti-spam
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!body?.email || !/\S+@\S+\.\S+/.test(body.email)) {
    return NextResponse.json(
      { error: "Email inválido." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "El boletín todavía no está habilitado. Volvé a probar en unos días.",
      },
      { status: 501 }
    );
  }

  const to = process.env.CONTACT_EMAIL ?? "apadmsi@fibertel.com.ar";
  const from = process.env.RESEND_FROM ?? "APADMSI Web <onboarding@resend.dev>";

  const html = `
<!DOCTYPE html>
<html><body style="font-family: -apple-system, system-ui, sans-serif; color: #2A1F18;">
  <h2 style="color: #B91C2C;">Nueva suscripción al boletín</h2>
  <p><strong>Email:</strong> ${body.email
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")}</p>
  <p style="font-size: 12px; color: #8B7868;">
    Recordá agregar este contacto a tu lista de envíos del boletín mensual.
  </p>
</body></html>`.trim();

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
        subject: `[APADMSI] Suscripción al boletín — ${body.email}`,
        html,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          error:
            "No pudimos registrar tu email. Probá de nuevo en un rato.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Error de conexión." },
      { status: 500 }
    );
  }
}
