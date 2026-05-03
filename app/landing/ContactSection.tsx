import Image from "next/image";
import { photos } from "./photos";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="scroll-mt-[52px] border-t border-[var(--apple-border-light)] bg-[var(--apple-surface)] px-5 py-14 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-[980px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[var(--apple-border-light)] shadow-sm ring-1 ring-black/[0.04] lg:sticky lg:top-24 lg:max-w-[380px] lg:shrink-0">
            <Image
              src={photos.contacto}
              alt={photos.contactoAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1 lg:pt-1">
            <h2 className="text-[24px] font-semibold tracking-tight text-[var(--apple-text)] sm:text-[28px]">
              Escríbanos cuando les acomode
            </h2>
            <p className="mt-3 text-[17px] leading-relaxed text-[var(--apple-secondary)]">
              Puede ser una primera conversación de unos 30 minutos, o pedir un dossier en PDF con alcance. Leyemos el
              correo con calma y respondemos en un día hábil, en horario Chile.
            </p>
            <p className="mt-8 text-[17px]">
              <a
                href="mailto:jvicuna@vitalsafe.cl?subject=Consulta%20SST%20Chile"
                className="apple-link"
              >
                jvicuna@vitalsafe.cl
              </a>
            </p>
            <p className="mt-3 text-[14px] text-[var(--apple-tertiary)]">
              Si prefieren, indiquen rubro y comuna en el asunto: nos ayuda a preparar la respuesta.
            </p>

            <footer className="mt-14 border-t border-[var(--apple-border-light)] pt-8 text-[12px] leading-relaxed text-[var(--apple-tertiary)]">
              <p>© {new Date().getFullYear()} VitalSafe. Información comercial.</p>
              <p className="mt-3">
                <a href="#" className="apple-link">
                  Privacidad
                </a>
                <span className="mx-2 text-[var(--apple-border)]">·</span>
                <a href="#" className="apple-link">
                  Términos
                </a>
                <span className="mx-2 text-[var(--apple-border)]">·</span>
                <a href="#" className="apple-link">
                  LinkedIn
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
