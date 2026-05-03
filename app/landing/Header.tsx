import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#comercial", label: "Modalidades" },
  { href: "#alcance", label: "Alcance" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-[var(--apple-border-light)] bg-[rgba(255,255,255,0.82)] backdrop-blur-md">
      <div className="mx-auto flex h-[52px] max-w-[980px] items-center justify-between gap-3 px-5 sm:px-6">
        <Link href="#" className="flex min-w-0 items-center gap-2.5 shrink-0" aria-label="VitalSafe — inicio">
          <BrandLogo variant="header" priority />
          <span className="truncate text-[16px] font-semibold tracking-tight text-[var(--apple-text)] sm:text-[17px]" style={{ letterSpacing: "-0.02em" }}>
            VitalSafe
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-[12px] sm:flex" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[var(--apple-text)] hover:opacity-70">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contacto" className="apple-link shrink-0 text-[12px] font-normal sm:text-[12px]">
          Escríbenos
        </a>
      </div>
    </header>
  );
}
