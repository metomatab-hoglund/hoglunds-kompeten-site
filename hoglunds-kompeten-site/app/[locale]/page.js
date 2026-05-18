export default function Home({ params }) {
  const locale = params?.locale || "en";
  const base = `/${locale}`;

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#111", background: "#fff" }}>
      <header style={{ maxWidth: 1180, margin: "0 auto", height: 90, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
        <a href={base} style={{ display: "flex", gap: 12, alignItems: "center", color: "#111", textDecoration: "none" }}>
          
          <img
            src="https://i.postimg.cc/2SK2S4pX/logo.png"
            alt="Hoglunds Kompetens Logo"
            style={{
              width: 52,
              height: 52,
              objectFit: "contain",
              display: "block"
            }}
          />

          <div>
            <b style={{ fontSize: 19 }}>Höglunds Kompetens</b>
            <div style={{ fontSize: 13 }}>Hoglunds Competence</div>
          </div>
        </a>

        <nav style={{ display: "flex", gap: 30, alignItems: "center", fontWeight: 700, fontSize: 14 }}>
          <a href={base} style={nav}>Home</a>
          <a href={`${base}/services`} style={nav}>Services</a>
          <a href={`${base}/ems-platform`} style={nav}>EMS Platform</a>
          <a href={`${base}/projects`} style={nav}>Projects</a>
          <a href={`${base}/about`} style={nav}>About Us</a>
          <a href={`${base}/insights`} style={nav}>Insights</a>
          <a href={`${base}/contact`} style={{ ...nav, background: "#111", color: "#fff", padding: "15px 24px", borderRadius: 5 }}>Contact Us →</a>
        </nav>
      </header>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "40px 24px 25px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 35, alignItems: "center" }}>
          <div>
            <div style={label}>POWERING A SUSTAINABLE FUTURE</div>
            <h1 style={{ fontSize: 56, lineHeight: 1.05, margin: "12px 0", fontWeight: 900 }}>
              Battery Energy<br />Storage & EMS<br />Solutions
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 500 }}>
              Engineering, technical consulting and EMS optimization for sustainable energy projects across the Nordic and Europe.
            </p>
            <div style={{ display: "flex", gap: 16, marginTop: 28 }}>
              <a href={`${base}/services`} style={yellowBtn}>Our Services →</a>
              <a href={`${base}/ems-platform`} style={outlineBtn}>Explore EMS Platform →</a>
            </div>
          </div>

          <div style={{
            height: 430,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff",
            borderRadius: 4
          }}>
            <img
              src="https://i.postimg.cc/2SK2S4pX/logo.png"
              alt="Hoglunds Kompetens Logo"
              style={{
                width: 390,
                height: 390,
                objectFit: "contain",
                display: "block"
              }}
            />
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px 35px" }}>
        <div style={{ border: "1px solid #eee", borderRadius: 8, display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {[
            ["⚡️", "From kW to MW Scale", "Solutions for commercial, industrial & utility projects."],
            ["⚙️", "End-to-End Expertise", "Design, engineering, technical requirements & implementation"],
            ["▥", "Maximize Revenue", "AI-driven EMS for energy trading & asset optimization"],
            ["♧", "Sustainable Impact", "We help build a cleaner energy future"],
          ].map((x, i) => (
            <div key={i} style={{ padding: 24, display: "flex", gap: 16, borderRight: i < 3 ? "1px solid #eee" : "none" }}>
              <div style={{ fontSize: 28 }}>{x[0]}</div>
              <div><b>{x[1]}</b><p style={{ margin: "6px 0 0", fontSize: 13, lineHeight: 1.5 }}>{x[2]}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "20px 24px 45px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50 }}>
          <div>
            <div style={label}>WHAT WE DO</div>
            <h2 style={{ fontSize: 34, lineHeight: 1.15 }}>Expertise that powers<br />the energy transition</h2>
          </div>
          <p style={{ lineHeight: 1.7 }}>
            Höglunds Kompetens delivers high-value engineering and consulting services for battery energy storage systems and power electronic solutions.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const nav = { color: "#111", textDecoration: "none" };
const label = { color: "#e6aa00", fontWeight: 900, fontSize: 13 };
const yellowBtn = { background: "#f5c400", padding: "16px 28px", borderRadius: 5, color: "#111", textDecoration: "none", fontWeight: 800 };
const outlineBtn = { border: "2px solid #111", padding: "14px 26px", borderRadius: 5, color: "#111", textDecoration: "none", fontWeight: 800 };

function Footer() {
  return (
    <footer style={{ background: "#070707", color: "#fff", padding: "40px 24px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 30 }}>
        <div><b>Höglunds Kompetens</b><p style={{ color: "#bbb" }}>Engineering and consulting services for battery energy storage systems and power electronic solutions across the Nordic and Europe.</p></div>
      </div>
    </footer>
  );
}
