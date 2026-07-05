export default function Products() {
  return (
    <section className="section" id="software">
      <div className="wrap">
        <div className="eyebrow">HOY CONSTRUIMOS</div>
        <h2 className="section-title">Software en producción, no mockups.</h2>
        <p className="section-desc">
          Dos sistemas reales, mobile-first, corriendo hoy — ejemplo de lo
          que construimos para nuestros clientes.
        </p>

        <div className="products">
          <div className="product-card">
            <div className="product-top">
              <h3 style={{ margin: 0 }}>GeoClubs</h3>
              <span className="product-status">EN PRODUCCIÓN</span>
            </div>
            <p>
              Red social organizada por clubes de interés, con filtrado
              geográfico en tiempo real — encuentra a tu gente, cerca de ti.
            </p>
            <div className="stack">
              <span>Next.js 14</span>
              <span>Supabase</span>
              <span>Mobile-first</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-top">
              <h3 style={{ margin: 0 }}>Consultorio24</h3>
              <span className="product-status">EN PRODUCCIÓN</span>
            </div>
            <p>
              Plataforma de telemedicina para especialistas en México —
              agenda, videoconsulta y cobro, todo en un mismo sistema.
            </p>
            <div className="stack">
              <span>Next.js 14</span>
              <span>Stripe Connect</span>
              <span>Daily.co</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
