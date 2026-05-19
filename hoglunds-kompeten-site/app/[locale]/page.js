export default function Home({ params }) {
  const locale = params?.locale || "en";
  const base = `/${locale}`;

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#111", background: "#fff" }}>
      <header style={{ maxWidth: 1180, margin: "0 auto", height: 90, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
        <a href={base} style={{ display: "flex", gap: 12, alignItems: "center", color: "#111", textDecoration: "none" }}>
          <img
            src="https://i.postimg.cc/2SK2S4pX/logo.png"
            alt="Hoglunds Competence Logo"
            style={{ width: 52, height: 52, objectFit: "contain", display: "block" }}
          />
          <div>
            <b style={{ fontSize: 19 }}>Höglunds Kompetens</b>
            <div style={{ fontSize: 13 }}>Hoglunds Competens</div>
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
              alt="Hoglunds Competence Logo"
              style={{ width: 390, height: 390, objectFit: "contain", display: "block" }}
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

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14, marginTop: 25 }}>
          {["Battery Energy Storage Systems", "Power Electronics Engineering", "Technical Requirements & Documentation", "EMS & Energy Trading", "Aggregator Solutions"].map((t, i) => (
            <div key={i} style={{ border: "1px solid #eee", borderRadius: 8, padding: 24, minHeight: 125 }}>
              <div style={{ background: i === 2 ? "#6b3fc9" : i === 1 || i === 4 ? "#f27600" : "#f5c400", color: "#fff", width: 40, height: 40, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>▣</div>
              <b>{t}</b>
              <div style={{ marginTop: 22 }}>→</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px 45px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.6fr", gap: 35, alignItems: "center" }}>
          <div>
            <div style={label}>EMS PLATFORM</div>
            <h2 style={{ fontSize: 38, lineHeight: 1.1 }}>Intelligent. Predictive.<br />Profitable.</h2>
            <p style={{ lineHeight: 1.7 }}>
              Our EMS platform optimizes battery operations and market participation, ensuring the right market at the right time.
            </p>
            {["Price forecasting & market analysis", "AI-driven optimization & dispatch", "Multiple market participation", "Real-time monitoring & control", "Scalable aggregator platform"].map(x => (
              <p key={x} style={{ margin: "10px 0" }}>🟡 {x}</p>
            ))}
            <a href={`${base}/ems-platform`} style={{ ...yellowBtn, display: "inline-block", marginTop: 18 }}>Explore EMS Platform →</a>
          </div>

          <div style={dashboard}>
            <h3>Dashboard</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
              {["€ 1,248,721", "24", "125.6 MW", "63%"].map((n, i) => (
                <div key={i} style={dashCard}><small>{["Total Revenue (EUR)", "Total Assets", "Total Capacity", "Avg. SOC"][i]}</small><b>{n}</b><span>{i === 0 ? "+18.6% vs last month" : i === 3 ? "In operation" : "Online"}</span></div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 18, marginTop: 25 }}>
              <div style={chartBox}>
                <b>Revenue Overview</b>
                <div style={{ height: 210, display: "flex", alignItems: "end", gap: 18, paddingTop: 25 }}>
                  {[120, 150, 140, 180, 125, 135, 110].map((h, i) => <div key={i} style={{ height: h, width: 28, background: "#f5c400", borderRadius: 12 }} />)}
                </div>
              </div>
              <div>
                <div style={chartBox}><b>Market Price</b><div style={{ height: 90, paddingTop: 25 }}>⌁⌁⌁⌁⌁</div></div>
                <div style={{ ...chartBox, marginTop: 16 }}><b>Battery Fleet</b><div style={{ fontSize: 42, marginTop: 10 }}>◔</div><p>Charging 30%<br />Discharging 30%<br />Standby 40%</p></div>
              </div>
            </div>
          </div>
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

const dashboard = {
  border: "1px solid #eee",
  borderRadius: 10,
  padding: 28,
  boxShadow: "0 20px 45px rgba(0,0,0,.08)",
  animation: "fadeUp .8s ease"
};

const dashCard = {
  background: "#fff",
  padding: 18,
  border: "1px solid #eee",
  borderRadius: 8,
  display: "flex",
  flexDirection: "column",
  gap: 8
};

const chartBox = {
  border: "1px solid #eee",
  borderRadius: 8,
  padding: 20,
  background: "#fff"
};

function Footer() {
  return (
    <footer style={{ background: "#070707", color: "#fff", padding: "40px 24px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 30 }}>
        <div><b>Höglunds Kompetens</b><p style={{ color: "#bbb" }}>Engineering and consulting services for battery energy storage systems and power electronic solutions across the Nordic and Europe.</p></div>
        <div><b>Company</b><p>About Us<br />Projects<br />Insights<br />Careers</p></div>
        <div><b>Services</b><p>BESS<br />Power Electronics<br />EMS & Trading<br />Aggregator Solutions</p></div>
        <div><b>Resources</b><p>Blog<br />Case Studies<br />Downloads</p></div>
        <div><b>Contact</b><p>info@hoglundskompetens.se<br />+46 73 700 11 69</p></div>
      </div>
    </footer>
  );
}
