const rows = [
  {
    name: "Implementación DS 44",
    detail: "Desde diagnóstico hasta RIOHS y CPHS operativo.",
    plazo: "8 a 12 semanas",
    valor: "Cotización por etapa",
    nota: "CLP o UF, según contrato.",
  },
  {
    name: "Asesoría continua",
    detail: "Prevencionista a la carta, comités y seguimiento documental.",
    plazo: "Mensual o anual",
    valor: "Desde UF / mes",
    nota: "Según dotación y rubro.",
  },
  {
    name: "Apoyo en urgencia",
    detail: "Post-visita DT, requerimiento SEREMI o incidente grave.",
    plazo: "Ventana acotada",
    valor: "A convenir",
    nota: "Prioridad según disponibilidad.",
  },
];

export function CommercialSection() {
  return (
    <section
      id="comercial"
      className="scroll-mt-[52px] border-t border-[var(--apple-border-light)] bg-[var(--apple-surface)] px-5 py-14 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-[980px]">
        <h2 className="text-[24px] font-semibold tracking-tight text-[var(--apple-text)] sm:text-[28px]">
          Modalidades comerciales
        </h2>
        <p className="mt-2 max-w-[720px] text-[17px] leading-relaxed text-[var(--apple-secondary)]">
          Cifras orientativas: el valor final lo afinamos con usted según dotación, faenas y riesgo. Si les hace
          sentido, los números los vemos en una reunión corta, sin letra chica en el correo.
        </p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-[var(--apple-border)]">
                <th className="py-3 pr-4 font-medium text-[var(--apple-text)]">Modalidad</th>
                <th className="py-3 pr-4 font-medium text-[var(--apple-text)]">Plazo típico</th>
                <th className="py-3 pr-4 font-medium text-[var(--apple-text)]">Valor</th>
                <th className="py-3 font-medium text-[var(--apple-text)]">Nota</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name} className="border-b border-[var(--apple-border-light)]">
                  <td className="align-top py-4 pr-4">
                    <div className="font-semibold text-[var(--apple-text)]">{r.name}</div>
                    <div className="mt-1 max-w-[280px] text-[var(--apple-secondary)]">{r.detail}</div>
                  </td>
                  <td className="align-top py-4 pr-4 text-[var(--apple-secondary)]">{r.plazo}</td>
                  <td className="align-top py-4 pr-4 text-[var(--apple-text)]">{r.valor}</td>
                  <td className="align-top py-4 text-[var(--apple-secondary)]">{r.nota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
