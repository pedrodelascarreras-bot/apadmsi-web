import { Container } from "@/components/shared/container";

export default function Loading() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container className="max-w-[640px] text-center">
        <p className="font-script text-2xl text-burgundy">cargando…</p>
        <div
          className="mx-auto mt-4 h-1 w-32 overflow-hidden rounded-full"
          style={{ background: "var(--color-cream-deep)" }}
          aria-hidden="true"
        >
          <div
            className="h-full w-1/2"
            style={{
              background: "var(--color-burgundy)",
              animation: "loading-bar 1.2s ease-in-out infinite",
            }}
          />
        </div>
      </Container>
    </section>
  );
}
