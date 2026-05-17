export default function Home({ params }) {
  const locale = params?.locale || "en";
  const base = `/${locale}`;

  return (
    <main style={main}>
      <header style={header}>
        <a href={base} style={brand}>
          <div style={logo}>⚡</div>
          <div>
            <b style={{ fontSize: 19 }}>Höglunds Kompetens</b>
            <div style={{ fontSize: 13 }}>Hoglunds Competence</div>
          </div>
        </a>

        <nav style={navWrap}>
          <a href={base} style={nav}>Home</a>
          <a href={`${base}/services`} style={nav}>Services</a>
          <a href={`${base}/ems-platform`} style={nav}>EMS Platform</a>
          <a href={`${base}/projects`} style={nav}>Projects</a>
          <a href={`${base}/about`} style={nav}>About Us</a>
          <a href={`${base}/insights`} style={nav}>Insights</a>
          <a href={`${base}/contact`} style={contactBtn}>Contact Us →</a>
        </nav>
      </header>

      <section style={heroSection}>
        <div style={heroGrid}>
          <div>
            <div style={label}>POWERING A SUSTAINABLE FUTURE</div>
            <h1 style={heroTitle}>
              Battery Energy<br />Storage & EMS<br />Solutions
            </h1>
            <p style={heroText}>
              Engineering, technical consulting and EMS optimization for sustainable energy projects across the Nordic and Europe.
            </p>
            <div style={{ display: "flex", gap: 16, marginTop: 30 }}>
              <a href={`${base}/services`} style={yellowBtn}>Our Services →</a>
              <a href={`${base}/ems-platform`} style={outlineBtn}>Explore EMS Platform →</a>
            </div>
          </div>

          <div style={heroVisual}>
            <div style={heroPlaceholder}>
              <span>Hero image area</span>
            </div>
          </div>
        </div>
      </section>

      <section style={featureSection}>
        <div style={featureGrid}>
          {[
            ["⚡", "From kW to MW Scale", "Solutions for commercial, industrial & utility projects."],
            ["⚙", "End-to-End Expertise", "Design, engineering, technical requirements & implementation"],
            ["▥", "Maximize Revenue", "AI-driven EMS for energy trading & asset optimization"],
            ["♧", "Sustainable Impact", "We help build a cleaner energy future"],
          ].map((x, i) => (
            <div key={i} style={featureCard}>
              <div style={featureIcon}>{x[0]}</div>
              <div>
                <b>{x[1]}</b>
                <p style={smallText}>{x[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={section}>
        <div style={twoCol}>
          <div>
            <div style={label}>WHAT WE DO</div>
            <h2 style={sectionTitle}>Expertise that powers<br />the energy transition</h2>
          </div>
          <p style={bodyText}>
            Höglunds Kompetens delivers high-value engineering and consulting services for battery energy storage systems and power electronic solutions.
          </p>
        </div>

        <div style={serviceGrid}>
          {["Battery Energy Storage Systems", "Power Electronics Engineering", "Technical Requirements & Documentation", "EMS & Energy Trading", "Aggregator Solutions"].map((t, i) => (
            <div key={i} style={serviceCard}>
              <div style={{
                ...serviceIcon,
                background: i === 2 ? "#6b3fc9" : i === 1 || i === 4 ? "#f27600" : "#f5c400"
              }}>▣</div>
              <b>{t}</b>
              <div style={{ marginTop: 24 }}>→</div>
            </div>
          ))}
        </div>
      </section>

      <section style={section}>
        <div style={emsGrid}>
          <div>
            <div style={label}>EMS PLATFORM</div>
            <h2 style={sectionTitle}>Intelligent. Predictive.<br />Profitable.</h2>
            <p style={bodyText}>
              Our EMS platform optimizes battery operations and market participation, ensuring the right market at the right time.
            </p>
            {[
              "Price forecasting & market analysis",
              "AI-driven optimization & dispatch",
              "Multiple market participation",
              "Real-time monitoring & control",
              "Scalable aggregator platform"
            ].map(x => (
              <p key={x} style={{ margin: "10px 0" }}>🟡 {x}</p>
            ))}
            <a href={`${base}/ems-platform`} style={{ ...yellowBtn, display: "inline-block", marginTop: 18 }}>
              Explore EMS Platform →
            </a>
          </div>

          <Dashboard />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Dashboard() {
  return (
    <div style={dashboard}>
      <h3 style={{ marginTop: 0 }}>Dashboard</h3>

      <div style={dashStats}>
        {["€ 1,248,721", "24", "125.6 MW", "63%"].map((n, i) => (
          <div key={i} style={dashCard}>
            <small>{["Total Revenue (EUR)", "Total Assets", "Total Capacity", "Avg. SOC"][i]}</small>
            <b style={{ fontSize: 26 }}>{n}</b>
            <span style={{ color: i === 0 ? "#16a34a" : i === 3 ? "#f27600" : "#777", fontSize: 12 }}>
              {i === 0 ? "+18.6% vs last month" : i === 3 ? "In operation" : "Online"}
            </span>
          </div>
        ))}
      </div>

      <div style={chartGrid}>
        <div style={chartBox}>
          <b>Revenue Overview</b>
          <div style={bars}>
            {[120, 150, 140, 180, 125, 135, 110].map((h, i) => (
              <div key={i} style={{ height: h, width: 28, background: "#f5c400", borderRadius: 12 }} />
            ))}
          </div>
        </div>

        <div>
          <div style={chartBox}>
            <b>Market Price</b>
            <div style={{ height: 90, paddingTop: 25, fontSize: 28, color: "#6b3fc9" }}>⌁⌁⌁⌁⌁</div>
          </div>
          <div style={{ ...chartBox, marginTop: 16 }}>
            <b>Battery Fleet</b>
            <div style={{ fontSize: 42, marginTop: 10, color: "#f5c400" }}>◔</div>
            <p>Charging 30%<br />Discharging 30%<br />Standby 40%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={footer}>
      <div style={footerGrid}>
        <div>
          <b style={{ fontSize: 18 }}>Höglunds Kompetens</b>
          <p style={{ color: "#bbb", lineHeight: 1.6 }}>
            Engineering and consulting services for battery energy storage systems and power electronic solutions across the Nordic and Europe.
          </p>
        </div>
        <div><b>Company</b><p>About Us<br />Projects<br />Insights<br />Careers</p></div>
        <div><b>Services</b><p>BESS<br />Power Electronics<br />EMS & Trading<br />Aggregator Solutions</p></div>
        <div><b>Resources</b><p>Blog<br />Case Studies<br />Downloads</p></div>
        <div><b>Contact</b><p>info@hoglundskompetence.com<br />+46 10 123 45 67</p></div>
      </div>
    </footer>
  );
}

const main = { fontFamily: "Arial, sans-serif", color: "#111", background: "#fff" };
const header = { maxWidth: 1180, margin: "0 auto", height: 96, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" };
const brand = { display: "flex", gap: 12, alignItems: "center", color: "#111", textDecoration: "none" };
const logo = { width: 52, height: 52, border: "4px solid #f5b800", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#f5b800", fontSize: 28 };
const navWrap = { display: "flex", gap: 30, alignItems: "center", fontWeight: 700, fontSize: 14 };
const nav = { color: "#111", textDecoration: "none" };
const contactBtn = { ...nav, background: "#111", color: "#fff", padding: "15px 24px", borderRadius: 5 };
const label = { color: "#d69800", fontWeight: 900, fontSize: 13, letterSpacing: ".02em" };
const yellowBtn = { background: "#f5c400", padding: "16px 28px", borderRadius: 5, color: "#111", textDecoration: "none", fontWeight: 800 };
const outlineBtn = { border: "2px solid #111", padding: "14px 26px", borderRadius: 5, color: "#111", textDecoration: "none", fontWeight: 800 };
const heroSection = { maxWidth: 1180, margin: "0 auto", padding: "55px 24px 35px" };
const heroGrid = { display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 45, alignItems: "center" };
const heroTitle = { fontSize: 64, lineHeight: 1.02, margin: "16px 0", fontWeight: 900, letterSpacing: "-.04em" };
const heroText = { fontSize: 17, lineHeight: 1.7, maxWidth: 520 };
const heroVisual = { height: 430, borderRadius: 18, overflow: "hidden", background: "linear-gradient(135deg,#f7f7f7,#ffffff)", border: "1px solid #eee", position: "relative" };
const heroPlaceholder = { height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#aaa", fontWeight: 700 };
const featureSection = { maxWidth: 1180, margin: "0 auto", padding: "0 24px 45px" };
const featureGrid = { border: "1px solid #eee", borderRadius: 12, display: "grid", gridTemplateColumns: "repeat(4,1fr)", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,.04)" };
const featureCard = { padding: 24, display: "flex", gap: 16, borderRight: "1px solid #eee" };
const featureIcon = { fontSize: 28, color: "#f5c400" };
const smallText = { margin: "6px 0 0", fontSize: 13, lineHeight: 1.5 };
const section = { maxWidth: 1180, margin: "0 auto", padding: "25px 24px 55px" };
const twoCol = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "start" };
const sectionTitle = { fontSize: 38, lineHeight: 1.12, margin: "12px 0", fontWeight: 900 };
const bodyText = { lineHeight: 1.7, fontSize: 16 };
const serviceGrid = { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16, marginTop: 28 };
const serviceCard = { border: "1px solid #eee", borderRadius: 12, padding: 24, minHeight: 145, boxShadow: "0 10px 24px rgba(0,0,0,.035)" };
const serviceIcon = { color: "#fff", width: 42, height: 42, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 };
const emsGrid = { display: "grid", gridTemplateColumns: "0.9fr 1.6fr", gap: 42, alignItems: "center" };
const dashboard = { border: "1px solid #eee", borderRadius: 16, padding: 28, boxShadow: "0 22px 55px rgba(0,0,0,.1)", animation: "fadeUp .8s ease", background: "#fff" };
const dashStats = { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 };
const dashCard = { background: "#fff", padding: 18, border: "1px solid #eee", borderRadius: 10, display: "flex", flexDirection: "column", gap: 8 };
const chartGrid = { display: "grid", gridTemplateColumns: "2fr 1fr", gap: 18, marginTop: 25 };
const chartBox = { border: "1px solid #eee", borderRadius: 10, padding: 20, background: "#fff" };
const bars = { height: 210, display: "flex", alignItems: "end", gap: 18, paddingTop: 25 };
const footer = { background: "#070707", color: "#fff", padding: "42px 24px" };
const footerGrid = { maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 30 };
