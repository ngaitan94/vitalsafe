import Image from "next/image";
import { photos } from "./photos";

/** Franja breve con foto: refuerza cercanía sin romper el estilo sobrio. */
export function CloseStrip() {
  return (
    <section className="border-t border-[var(--apple-border-light)] bg-[var(--apple-bg)] px-5 py-12 sm:px-6 sm:py-14">
      <div className="mx-auto flex max-w-[980px] flex-col gap-8 md:flex-row md:items-center md:gap-12">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[var(--apple-border-light)] shadow-sm ring-1 ring-black/[0.04] md:aspect-[4/3] md:max-w-[420px]">
          <Image
            src={photos.cercania}
            alt={photos.cercaniaAlt}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 md:flex-1">
          <p className="text-[14px] font-medium text-[var(--apple-secondary)]">Trato directo</p>
          <h2 className="mt-1 text-[22px] font-semibold leading-snug tracking-tight text-[var(--apple-text)] sm:text-[26px]">
            Les respondemos con nombre, plazo y siguiente paso.
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-[var(--apple-secondary)]">
            No vendemos “paquetes mágicos”. Si algo no aplica a su empresa, se lo decimos. Si hace falta un especialista
            fuera de nuestro alcance, también se lo decimos. Preferimos una relación larga a un discurso inflado.
          </p>
        </div>
      </div>
    </section>
  );
}
