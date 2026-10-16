import { NextResponse } from "next/server";
import { MercadoPagoConfig, PreApprovalPlan } from "mercadopago";

type SubscriptionBody = {
  amount: number;
};

/**
 * Crea un plan de suscripción mensual por el monto elegido y devuelve su link.
 * El donante entra a MercadoPago con su propia cuenta y autoriza el débito,
 * así no hace falta pedirle el email en el sitio.
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
      { status: 503 },
    );
  }

  let body: SubscriptionBody;
  try {
    body = (await request.json()) as SubscriptionBody;
  } catch {
    return NextResponse.json(
      { error: "Datos inválidos." },
      { status: 400 },
    );
  }

  if (!body?.amount || typeof body.amount !== "number" || body.amount <= 0) {
    return NextResponse.json(
      { error: "El monto debe ser un número mayor a cero." },
      { status: 400 },
    );
  }

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
  const backUrl = `${siteUrl}/donar/gracias`;

  const client = new MercadoPagoConfig({ accessToken });
  const plan = new PreApprovalPlan(client);

  try {
    const result = await plan.create({
      body: {
        reason: "Donación mensual a APADMSI",
        auto_recurring: {
          frequency: 1,
          frequency_type: "months",
          transaction_amount: body.amount,
          currency_id: "ARS",
        },
        back_url: backUrl,
      },
    });

    return NextResponse.json({
      init_point: result.init_point,
    });
  } catch (err) {
    console.error("MercadoPago subscription error:", err);
    return NextResponse.json(
      {
        error:
          "No pudimos crear la suscripción. Probá de nuevo en un rato.",
      },
      { status: 502 },
    );
  }
}
