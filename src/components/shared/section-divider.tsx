import { Container } from "@/components/shared/container";
import { Heart } from "@/components/shared/heart";
import { Reveal } from "@/components/shared/reveal";

type Variant = "light" | "warm" | "paper";

const VARIANT_STYLES: Record<Variant, { bg: string; lineColor: string }> = {
  light: { bg: "var(--color-cream)", lineColor: "var(--color-border)" },
  warm: { bg: "var(--color-cream-warm)", lineColor: "var(--color-border)" },
  paper: { bg: "var(--color-paper)", lineColor: "var(--color-border)" },
};

type Props = {
  variant?: Variant;
  withHeart?: boolean;
};

/**
 * Divisor decorativo entre secciones. Una línea fina centrada con un corazón
 * pequeño en burgundy al medio (identitario, mismo símbolo del logo).
 *
 * El `variant` debe coincidir con el fondo de la sección que lo precede para
 * que la transición sea continua (no se ve "flotando" sobre otro color).
 */
export function SectionDivider({
  variant = "light",
  withHeart = true,
}: Props) {
  const style = VARIANT_STYLES[variant];

  return (
    <div
      aria-hidden="true"
      className="py-10 sm:py-12"
      style={{ background: style.bg }}
    >
      <Container>
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <span
            className="h-px flex-1 max-w-[180px]"
            style={{ background: style.lineColor }}
          />
          {withHeart ? (
            <Reveal as="fade" tag="span" className="block shrink-0">
              <span className="heartbeat-on-view grid h-9 w-9 place-items-center rounded-full"
                style={{
                  background: "var(--color-cream)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <Heart size={14} className="text-burgundy" />
              </span>
            </Reveal>
          ) : (
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: "var(--color-burgundy)" }}
            />
          )}
          <span
            className="h-px flex-1 max-w-[180px]"
            style={{ background: style.lineColor }}
          />
        </div>
      </Container>
    </div>
  );
}
