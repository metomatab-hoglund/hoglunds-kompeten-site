export default function ServicesPage() {
  return (
    <main style={{ background: "#fff", color: "#111", fontFamily: "Arial, sans-serif" }}>
      <Header />

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "55px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 40, alignItems: "center" }}>
          <div>
            <div style={{ color: "#e7b800", fontWeight: 800, fontSize: 13, marginBottom: 18 }}>SERVICES</div>
            <h1 style={{ fontSize: 52, lineHeight: 1.05, margin: 0, fontWeight: 900 }}>
              Engineering. Optimization.<br />Energy Value.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.7, marginTop: 26, maxWidth: 520 }}>
              We provide end-to-end consulting and engineering services for battery energy storage systems and power electronic solutions across the Nordic and European markets.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22, marginTop: 48 }}>
              {[
                ["◎", "Nordic & European", "Market Expertise"],
                ["⚡", "Technical Excellence", "in Power Electronics"],
                ["▥", "Commercial & Market", "Optimization"],
                ["♢", "Sustainable &", "Future Ready"],
              ].map((x, i) => (
                <div key={i} style={{ borderRight: i < 3 ? "1px solid #eee" : "none", paddingRight: 14 }}>
                  <div style={{ color: "#f0c400", fontSize: 34, marginBottom: 14 }}>{x[0]}</div>
                  <b style={{ fontSize: 14 }}>{x[1]}</b>
                  <p style={{ margin: "5px 0 0", fontSize: 13 }}>{x[2]}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative", height: 430, overflow: "hidden" }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(90deg,#fff 0%,rgba(255,255,255,.55) 20%,rgba(255,255,255,0) 45%), url('/hero-energy-containers.jpg') center/cover no-repeat",
              filter: "grayscale(100%)"
            }} />
            <div style={{
              position: "absolute", right: 0, bottom: 0,
              width: 110, height: 220, background: "#f5c400",
              clipPath: "polygon(45% 0,100% 0,100% 100%,0 100%)"
            }} />
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "25px 24px 45px", textAlign: "center" }}>
        <h2 style={{ fontSize: 38, margin: 0 }}>Our Services</h2>
        <p style={{ lineHeight: 1.6, marginTop: 12 }}>
          From concept to commissioning – we support our clients through every stage<br />of their energy storage projects.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 35, textAlign: "left" }}>
          {[
            ["▣", "Battery Energy\nStorage Systems (BESS)", ["System architecture & sizing", "Technology evaluations", "Grid integration studies", "Performance & safety analysis", "Commissioning support"]],
            ["⚡", "Power Electronics\nEngineering", ["PCS / inverter design & integration", "Electrical system design", "Protection & control systems", "Single line diagrams & drawings", "Compliance & standards"]],
            ["♧", "Sustainable Energy\nProjects", ["Renewable + BESS hybrid solutions", "Peak shaving & load management", "Frequency regulation & grid services", "Decarbonization strategies", "ESG & sustainability consulting"]],
            ["▤", "Technical Documentation\n& Requirements", ["Technical specification", "Tender & PIPER documentation", "Vendor evaluation support", "Compliance & certification", "Review & quality assurance"]],
            ["▧", "Energy Management\nSystem (EMS)", ["Real-time optimization", "Forecasting & scheduling", "Market participation", "Asset management", "Custom EMS development"]],
            ["⌘", "Energy Trading &\nAggregation", ["Aggregator platform", "Day-ahead & intraday trading", "Ancillary services optimization", "Portfolio optimization", "Revenue maximization"]],
          ].map((card, i) => (
            <div key={i} style={{ border: "1px solid #eee", borderRadius: 8, padding: 28, minHeight: 250 }}>
              <div style={{
                width: 44, height: 44, background: "#f5c400", borderRadius: 6,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 25, marginBottom: 18
              }}>{card[0]}</div>
              <h3 style={{ whiteSpace: "pre-line", fontSize: 22, lineHeight: 1.15, margin: "0 0 14px" }}>{card[1]}</h3>
              <ul style={{ paddingLeft: 18, lineHeight: 1.75, fontSize: 14 }}>
                {card[2].map((li, j) => <li key={j}>{li}</li>)}
              </ul>
              <div style={{ color: "#e0b500", fontWeight: 700, marginTop: 15 }}>Learn more →</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px 45px" }}>
        <div style={{ background: "#fafafa", borderRadius: 8, padding: "38px 70px", display: "grid", gridTemplateColumns: "1fr 220px 260px", gap: 30, alignItems: "center" }}>
          <div>
            <div style={{ color: "#e7b800", fontWeight: 800, fontSize: 13 }}>LET'S WORK TOGETHER</div>
            <h2 style={{ margin: "10px 0", fontSize: 32, lineHeight: 1.1 }}>Ready to bring your<br />energy project to life?</h2>
            <p>Contact us today to discuss how we can add value<br />to your next energy storage project.</p>
          </div>
          <a href="/contact" style={{ background: "#f5c400", padding: "18px 35px", borderRadius: 4, color: "#111", textDecoration: "none", fontWeight: 800, textAlign: "center" }}>Get In Touch →</a>
          <button style={{ background: "#fff", padding: "18px 25px", borderRadius: 4, border: "2px solid #111", fontWeight: 800 }}>Download Services Overview ⇩</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header() {
  const nav = [
    ["Home", "/"],
    ["Services", "/services"],
    ["EMS Platform", "/ems-platform"],
    ["Projects", "/projects"],
    ["About Us", "/about"],
    ["Contact", "/contact"],
  ];

  return (
    <header style={{ height: 92, display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1180, margin: "0 auto", padding: "0 24px", borderBottom: "1px solid #eee" }}>
      <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#111" }}>
        <div style={{ width: 48, height: 48, border: "4px solid #111", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 25 }}>⚡</div>
        <div>
          <b style={{ fontSize: 19 }}>Höglunds Kompetens</b>
          <div style={{ fontSize: 13 }}>Hoglunds Competence</div>
        </div>
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: 34, fontWeight: 700, fontSize: 14 }}>
        {nav.map(([label, href]) => (
          <a key={label} href={href} style={{ color: "#111", textDecoration: "none", borderBottom: label === "Services" ? "3px solid #f5c400" : "none", paddingBottom: 9 }}>{label}</a>
        ))}
        <a href="/contact" style={{ background: "#f5c400", padding: "15px 24px", borderRadius: 4, color: "#111", textDecoration: "none" }}>Get In Touch →</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#070707", color: "#fff", padding: "28px 24px 35px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 30, padding: "20px 0", borderBottom: "1px solid #222" }}>
          {["Independent & Neutral", "Proven Experience", "Quality & Reliability", "Focus on Value"].map((x, i) => (
            <div key={i}><b>{x}</b><p style={{ color: "#bbb", fontSize: 13 }}>We optimize both technical performance and financial returns.</p></div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 30, paddingTop: 32, fontSize: 14 }}>
          <div>
            <b style={{ fontSize: 18 }}>Höglunds Kompetens</b>
            <p style={{ color: "#bbb", lineHeight: 1.6 }}>Engineering and consulting services for battery energy storage systems and power electronic solutions across the Nordic and Europe.</p>
            <small>© 2024 Höglunds Kompetens. All rights reserved.</small>
          </div>
          <div><b>Company</b><p>About Us<br />Projects<br />Insights<br />Careers</p></div>
          <div><b>Services</b><p>BESS<br />Power Electronics<br />EMS & Trading<br />Aggregator Solutions</p></div>
          <div><b>Resources</b><p>Blog<br />Case Studies<br />Downloads</p></div>
          <div><b>Contact</b><p>info@hoglundskompetence.com<br />+46 10 123 45 67<br />Sweden – Serving Nordics & Europe</p></div>
        </div>
      </div>
    </footer>
  );
}
