const MODULES = [
  {
    code: "MKT",
    title: "Marketing Digital & Leads",
    desc: "Campañas en Google, Meta y LinkedIn con más de una década generando leads reales para B2B y B2C.",
  },
  {
    code: "DEV",
    title: "Desarrollo de Software con IA",
    desc: "Sistemas y plataformas a la velocidad y calidad que antes solo lograban equipos de Silicon Valley.",
  },
  {
    code: "SOC",
    title: "Social Media & Comunidades",
    desc: "Construcción y gestión de comunidades masivas — sabemos qué se necesita para llegar a millones.",
  },
  {
    code: "BRD",
    title: "Branding",
    desc: "Identidad de marca pensada para convertir, no solo para verse bien.",
  },
];

const INDUSTRIES = [
  "Autos",
  "Real Estate",
  "Retail",
  "Telefonía",
  "Salud",
  "Seguros",
  "B2B",
  "B2C",
];

export default function Modules() {
  return (
    <section className="section" id="que-hacemos">
      <div className="wrap">
        <div className="eyebrow">QUÉ HACEMOS</div>
        <h2 className="section-title">Cuatro módulos, un mismo equipo.</h2>
        <p className="section-desc">
          No subcontratamos por pedazos. El mismo equipo que diseña tu
          campaña puede construir el sistema que la sostiene.
        </p>

        <div className="modules">
          {MODULES.map((m) => (
            <div className="module" key={m.code}>
              <div className="module-code">
                <span className="d" />
                {m.code}
              </div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="industries">
          {INDUSTRIES.map((i) => (
            <span className="chip" key={i}>
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
