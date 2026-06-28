# APADMSI · Sitio Web · Contexto del Proyecto

## Quién es el cliente

APADMSI (Asociación de Padres y Amigos de los Discapacitados Mentales del Partido de San Isidro) es un Centro de Día sin fines de lucro fundado en 1982. Atiende a 34 jóvenes y adultos con discapacidad mental severa y profunda, en Billinghurst 1260, San Isidro, Buenos Aires.

CUIT: 30-64736769-7.

## Para qué sirve este sitio

El objetivo principal del sitio es que el tesorero de la fundación pueda **conseguir donantes individuales** (personas físicas) para sostener los sueldos del equipo.

Hoy la fundación depende 100% de subsidios del Estado (PAMI, Incluir Salud, PNC). Esos subsidios no alcanzan a cubrir los sueldos. La fundación perdió la exención de ganancias hace 5 años, así que las donaciones de empresas no son viables — el target real es donantes individuales del círculo del tesorero (~30 personas para empezar) y de su red ampliada.

Objetivo secundario: atraer 5-6 concurrentes más vía prepagas (OSDE, OMINT, Swiss Medical) para llegar al break-even con la capacidad aprobada de 40.

Objetivo terciario: mostrar la historia de la fundación, sus actividades, equipo.

## Audiencia

- **Primaria**: adultos de clase media-alta en Buenos Aires, donantes potenciales del círculo del tesorero. Profesionales, ya tienen otras causas, necesitan confiar antes de aportar.
- **Secundaria**: profesionales de prepagas que evalúan derivación de pacientes.
- **Terciaria**: familias buscando información, prensa, voluntarios.

## Tono

Cálido pero sobrio. Editorial. Honesto. Trasluce que hay 40 años de trabajo serio. NO emocional barato, NO corporativo frío, NO tech.

Tres reglas:
1. Las personas con discapacidad se mencionan con dignidad, sin victimización.
2. La situación financiera se cuenta con honestidad, sin dramatizar.
3. La donación es un acto de acompañar a una institución, no de "rescatar" a personas.

## Stack técnico

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 4
- shadcn/ui para componentes base
- Fraunces (Google Font) para display, Manrope para body
- Mercado Pago (SDK oficial) para pagos
- Resend para emails transaccionales
- Vercel para deploy

## Sistema de diseño

Está completamente definido en `design-system.md`. Antes de generar cualquier UI, **leé ese archivo**. Resumen:

- **Colores**: burgundy (#B91C2C), cream (#FAF6F0), ink (#1F1611), gold acento (#C9A961). Todo en CSS variables.
- **Tipografía**: Fraunces (display, variable font con ejes opsz y SOFT) + Manrope (body).
- **Espaciado**: sistema de 8px, gutter responsive con clamp.
- **Border radius**: bajo (2-4px), pill solo para botones.
- **Anti-patrones**: nada de purple gradients, glassmorphism, Inter, iconos de Material, border-radius grandes generalizados.

## Páginas del sitio

- `/` — Home (single page con todas las secciones principales)
- `/donar` — Página dedicada de donación
- `/donar/gracias` — Post-donación
- `/contacto` — Contacto extendido
- (Eventualmente) `/historia`, `/equipo` si la home queda muy larga

## Convenciones de código

- Componentes en TypeScript con React Server Components por default. `'use client'` solo cuando sea necesario (interactividad, hooks de browser).
- Tailwind para todo el styling, salvo CSS variables globales en `globals.css`.
- Imports absolutos con alias `@/`.
- Textos del sitio centralizados en `src/lib/content.ts` para que sean fáciles de editar después.
- Imágenes usan `next/image` con `priority` solo en el hero.
- Fonts cargadas vía `next/font/google` en el layout raíz, NO via `<link>`.

## Lo que NO hay que hacer

- NO inventar datos, números o testimonios. Si falta información, dejá un placeholder con un comentario `// TODO: confirmar con el cliente`.
- NO agregar dependencias sin antes preguntar.
- NO inventar features que no estén en el plan (chat bots, newsletter signup elaborado, etc.).
- NO hacer commits automáticos. El usuario controla los commits.
- NO modificar este `CLAUDE.md` salvo que el usuario lo pida.

## Estado actual del proyecto

Ver `README.md` para el estado actualizado. Este archivo (CLAUDE.md) describe el proyecto en general, no el estado.
