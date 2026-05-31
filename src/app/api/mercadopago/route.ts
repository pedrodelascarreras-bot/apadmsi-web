import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

type DonationBody = {
  amount: number;
  description?: string;
};

/**
 * Crea una preferencia de pago en MercadoPago para donaciones.
 *
 * Requiere la variable de entorno:
 *  - MERCADOPAGO_ACCESS_TOKEN (se obtiene en https://www.mercadopago.com.ar/developers)
 *  - NEXT_PUBLIC_SITE_URL (URL base del sitio, ej. https://apadmsi.org.ar)
 */
export async function POST(request: Request) {
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

  if (!accessToken) {
    return NextResponse.json(
      {
        error:
          "MercadoPago todavía no está configurado. Estamos trabajando para habilitarlo pronto.",
        code: "MP_NOT_CONFIGURED",
      },
      { status: 503 }
    );
  }

  let body: DonationBody;
  try {
    body = (await request.json()) as DonationBody;
  } catch {
    return NextResponse.json(
      { error: "Datos de la donación inválidos." },
      { status: 400 }
    );
  }

  if (!body?.amount || typeof body.amount !== "number" || body.amount <= 0) {
    return NextResponse.json(
      { error: "El monto de la donación debe ser un número mayor a cero." },
      { status: 400 }
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const backUrl = `${siteUrl}/donar`;

  const client = new MercadoPagoConfig({ accessToken });
  const preference = new Preference(client);

  try {
    const result = await preference.create({
      body: {
        items: [
          {
            id: "donacion-apadmsi",
            title: body.description ?? "Donación a APADMSI",
            quantity: 1,
            unit_price: body.amount,
            currency_id: "ARS",
          },
        ],
        back_urls: {
          success: backUrl,
          failure: backUrl,
          pending: backUrl,
        },
        auto_return: "approved",
        statement_descriptor: "APADMSI Donación",
      },
    });

    return NextResponse.json({
      init_point: result.init_point,
    });
  } catch (err) {
    console.error("MercadoPago error:", err);
    return NextResponse.json(
      {
        error:
          "No pudimos conectar con MercadoPago. Probá de nuevo en un rato.",
      },
      { status: 502 }
    );
  }
}
