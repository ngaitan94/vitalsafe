import Image from "next/image";

const LOGO = "/images/vitalsafe-logo.jpg";
const ALT = "VitalSafe — La seguridad es base, cultura y prioridad";

type Props = {
  variant?: "header" | "hero";
  /** Priorizar descarga (usar en una sola instancia above-the-fold). */
  priority?: boolean;
};

export function BrandLogo({ variant = "header", priority = false }: Props) {
  const isHero = variant === "hero";
  return (
    <Image
      src={LOGO}
      alt={ALT}
      width={150}
      height={150}
      priority={priority}
      sizes={isHero ? "72px" : "36px"}
      className={
        isHero
          ? "h-[72px] w-[72px] rounded-2xl object-cover shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/35"
          : "h-9 w-9 rounded-[10px] object-cover shadow-sm ring-1 ring-black/[0.08]"
      }
    />
  );
}
