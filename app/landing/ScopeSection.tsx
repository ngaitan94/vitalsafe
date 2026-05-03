const items = [
  "Ley 16.744 y mutualidad: coordinación de lo que corresponde según su estructura.",
  "DS 44: identificación de peligros, evaluación de riesgos, medidas de control y registro.",
  "Comité Paritario de Higiene y Seguridad: convocatoria, actas y seguimiento de acuerdos.",
  "Art. 66 bis: exigencias entre mandante y contratistas, con foco en evidencia compartida.",
  "Ley Karin: protocolos y registro cuando la empresa está alcanzada.",
  "Apoyo en preparación de carpeta y respuesta frente a fiscalización DT o SEREMI de Salud.",
];

export function ScopeSection() {
  return (
    <section id="alcance" className="scroll-mt-[52px] border-t border-[var(--apple-border-light)] px-5 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-[720px]">
        <h2 className="text-[24px] font-semibold tracking-tight text-[var(--apple-text)] sm:text-[28px]">
          Alcance normativo
        </h2>
        <p className="mt-2 text-[17px] leading-relaxed text-[var(--apple-secondary)]">
          Lista de referencia para que sepan qué temas solemos tocar. En la práctica priorizamos lo que aplica a su
          empresa y dejamos por escrito lo que no, para que no inviertan en trámites que no les corresponden.
        </p>
        <ul className="mt-8 list-disc space-y-3 pl-5 text-[17px] leading-[1.5] text-[var(--apple-secondary)] marker:text-[var(--apple-tertiary)]">
          {items.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
