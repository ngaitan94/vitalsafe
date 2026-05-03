import Image from "next/image";
import { photos } from "./photos";

const blocks = [
  {
    title: "Norma aplicada al negocio",
    body:
      "No les dejamos solo plantillas. Priorizamos lo que les corresponde según tamaño, rubro y si tienen más de una faena: matriz de riesgos, RIOHS, planes y registros que un inspector pueda leer sin perder el hilo.",
    src: photos.norma,
    alt: "Persona trabajando con planos y laptop en un escritorio",
  },
  {
    title: "Obras y contratistas",
    body:
      "Cuando hay mandante y varias empresas en la cadena, alineamos roles y entregables para que la exigencia del 66 bis quede respaldada con hechos, no solo con firmas duplicadas.",
    src: photos.obras,
    alt: "Faena de construcción en desarrollo, contexto de obra y coordinación en terreno",
  },
  {
    title: "Antes de una fiscalización",
    body:
      "Ordenamos la carpeta, los plazos y las medidas correctivas. Si ya pasó la visita o llegó un requerimiento, armamos un plan de respuesta claro para gerencia y para quienes ejecutan.",
    src: photos.fiscalizacion,
    alt: "Documentos y notas sobre un escritorio de trabajo",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-[52px] px-5 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-[980px]">
        <h2 className="text-[24px] font-semibold tracking-tight text-[var(--apple-text)] sm:text-[28px]">
          Cómo los acompañamos
        </h2>
        <p className="mt-2 max-w-[720px] text-[17px] leading-relaxed text-[var(--apple-secondary)]">
          Tres formas habituales de trabajar. Si su caso mezcla varias, lo conversamos sin compromiso en el primer
          contacto.
        </p>
        <ul className="mt-10 space-y-12">
          {blocks.map((b) => (
            <li
              key={b.title}
              className="border-t border-[var(--apple-border-light)] pt-10 first:border-0 first:pt-0 sm:pt-12 first:sm:pt-0"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
                <div className="relative aspect-[5/4] w-full shrink-0 overflow-hidden rounded-xl bg-[var(--apple-border-light)] sm:aspect-square sm:w-[200px] lg:w-[240px]">
                  <Image src={b.src} alt={b.alt} fill sizes="240px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[21px] font-semibold leading-snug text-[var(--apple-text)]">{b.title}</h3>
                  <p className="mt-3 text-[17px] leading-[1.55] text-[var(--apple-secondary)]">{b.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
