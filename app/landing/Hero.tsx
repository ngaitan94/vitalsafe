import { BrandLogo } from "./BrandLogo";
import { HeroBackdropVideo } from "./HeroBackdropVideo";
import { photos } from "./photos";

const topics = [
  "Ley 16.744",
  "DS 44",
  "CPHS",
  "Art. 66 bis",
  "Fiscalización DT / SEREMI",
];

/** Video: `public/videos/hero.mp4` (Pexels, uso permitido por licencia). */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[min(88svh,820px)] items-center justify-center overflow-hidden border-b border-black/10 sm:min-h-[min(90svh,880px)]">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${photos.hero})` }}
        aria-hidden
      />
      <HeroBackdropVideo
        poster={photos.hero}
        videoSrc="/videos/hero.mp4"
        videoAriaLabel="Video de fondo: obra de construcción, profesional con casco revisa planos en terreno — contexto de supervisión y prevención"
      />
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-b from-black/55 via-black/[0.38] to-black/72"
        aria-hidden
      />

      <div className="hero-copy">
        <header className="hero-brand">
          <div className="hero-brand-frame">
            <BrandLogo variant="hero" priority />
          </div>
          <p className="hero-eyebrow">Consultoría SST · Chile</p>
          <p className="hero-greeting">Hola — somos VitalSafe.</p>
        </header>

        <h1 className="hero-title">
          Consultoría en prevención de <span className="hero-title-line2">riesgos laborales.</span>
        </h1>

        <hr className="hero-rule" />

        <p className="hero-lead">
          Trabajamos con quienes están en terreno y con quienes firman: ordenamos la norma para que sea útil cada
          semana, no solo un folder que “cumple” en auditoría.
        </p>

        <ul className="hero-topics" aria-label="Temas que abordamos">
          {topics.map((t) => (
            <li key={t}>
              <span className="hero-topic">{t}</span>
            </li>
          ))}
        </ul>

        <div className="hero-actions">
          <a href="#contacto" className="hero-btn hero-btn--primary">
            Conversar por correo
          </a>
          <a href="#comercial" className="hero-btn hero-btn--ghost">
            Modalidades y plazos
          </a>
        </div>

        <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
          <a href="#servicios" className="hero-link">
            Ver cómo acompañamos
          </a>
        </div>

        <p className="hero-footnote">La seguridad es base, cultura y prioridad.</p>
      </div>
    </section>
  );
}
