export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="boot-line">
          <span className="ok">[OK]</span> 15+ años en operación · Ciudad de
          México
        </div>
        <h1 className="hero-title">
          Construimos marcas digitales.{" "}
          <span>Hoy construimos el software</span> que las mueve.
        </h1>
        <p className="hero-sub">
          Agencia digital con más de 15 años de trayectoria, hoy convertida en
          software house potenciada por IA — construimos sistemas con
          estándar de Silicon Valley, mobile-first, para negocios reales.
        </p>
        <div className="status-panel">
          <div className="status-header">
            <span>SISTEMA · MERCA_PUNTUAL.STATUS</span>
            <span className="live">
              <span className="dot" />
              ONLINE
            </span>
          </div>
          <div className="status-grid">
            <div className="status-cell">
              <div className="num">15+</div>
              <div className="lbl">Años en operación</div>
            </div>
            <div className="status-cell">
              <div className="num">1.5M</div>
              <div className="lbl">Comunidad Yoga (ES)</div>
            </div>
            <div className="status-cell">
              <div className="num">$50M+</div>
              <div className="lbl">MXN generados en campañas</div>
            </div>
            <div className="status-cell">
              <div className="num">2</div>
              <div className="lbl">Sistemas en producción hoy</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
