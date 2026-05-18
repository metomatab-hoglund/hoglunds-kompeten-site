export default function EMSPlatformPage({ params }) {
  const locale = params?.locale || "en";
  const base = `/${locale}`;

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#111", background: "#fff" }}>
      <header style={{ maxWidth: 1180, margin: "0 auto", height: 90, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
        <a href={base} style={{ display: "flex", gap: 12, alignItems: "center", color: "#111", textDecoration: "none" }}>
          <Logo size={52} dark />
          <div>
            <b style={{ fontSize: 19 }}>Höglunds Kompetens</b>
            <div style={{ fontSize: 13 }}>Hoglunds Competence</div>
          </div>
        </a>

        <nav style={{ display: "flex", gap: 30, alignItems: "center", fontWeight: 700, fontSize: 14 }}>
          <a href={base} style={nav}>Home</a>
          <a href={`${base}/services`} style={nav}>Services</a>
          <a href={`${base}/ems-platform`} style={{ ...nav, color: "#f5b800", borderBottom: "3px solid #f5b800", paddingBottom: 10 }}>EMS Platform</a>
          <a href={`${base}/projects`} style={nav}>Projects</a>
          <a href={`${base}/about`} style={nav}>About Us</a>
          <a href={`${base}/contact`} style={nav}>Contact</a>
          <a href={`${base}/contact`} style={yellowBtn}>Book a Demo →</a>
        </nav>
      </header>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "38px 24px 55px", position: "relative", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.35fr", gap: 42, alignItems: "center" }}>
          <div>
            <div style={label}>EMS PLATFORM</div>
            <h1 style={{ fontSize: 52, lineHeight: 1.04, margin: "14px 0 22px", fontWeight: 900 }}>
              Intelligent. Predictive.<br />Profitable.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.8, maxWidth: 430 }}>
              Our Energy Management System (EMS) optimizes battery operations and automatically trades energy in the right markets at the right time — maximizing revenue while ensuring asset safety.
            </p>

            <div style={{ display: "flex", gap: 18, marginTop: 30 }}>
              <a href={`${base}/contact`} style={yellowBtn}>Request a Demo →</a>
              <a href="#features" style={outlineBtn}>Explore Features →</a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginTop: 52 }}>
              {[
                ["chart", "Maximize Revenue", "AI-driven optimization for higher returns"],
                ["shield", "Reduce Risk", "Advanced controls & asset protection"],
                ["globe", "Multi-Market", "Participation in multiple energy markets"],
                ["network", "Aggregate & Scale", "Manage one asset or hundreds"],
              ].map((x) => (
                <div key={x[1]}>
                  <Icon type={x[0]} />
                  <b style={{ display: "block", fontSize: 13, marginTop: 14 }}>{x[1]}</b>
                  <p style={{ fontSize: 11, lineHeight: 1.6, margin: "7px 0 0" }}>{x[2]}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <DashboardDark />
          </div>
        </div>

        <div style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: 610,
          height: 92,
          background: "#f5c400",
          clipPath: "polygon(18% 100%,100% 0,100% 100%)",
          zIndex: 0
        }} />
      </section>

      <section id="features" style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 24px 45px", borderTop: "1px solid #eee" }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.82fr 1.18fr", gap: 70, alignItems: "start" }}>
          <div>
            <div style={label}>A PLATFORM BUILT FOR PERFORMANCE</div>
            <h2 style={{ fontSize: 34, lineHeight: 1.12, margin: "12px 0 18px", fontWeight: 900 }}>
              Built for energy markets.<br />Designed for results.
            </h2>
            <p style={{ lineHeight: 1.7, fontSize: 14 }}>
              Our EMS platform combines advanced forecasting, real-time optimization and automated trading to unlock the full value of your energy assets.
            </p>
            {[
              "AI-powered price forecasting & scenario analysis",
              "Day-ahead, intraday & real-time optimization",
              "Automatic execution in energy markets",
              "Support for multiple assets & technologies",
              "Scalable from kW systems to multi-MW portfolios",
            ].map((x) => (
              <p key={x} style={{ margin: "13px 0", fontSize: 14 }}>✓ {x}</p>
            ))}
          </div>

          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12, textAlign: "center", fontSize: 13, fontWeight: 700, marginBottom: 22 }}>
              {["Forecast", "Optimize", "Trade", "Monitor", "Report"].map((x, i) => (
                <div key={x} style={{ paddingBottom: 12, borderBottom: i === 0 ? "3px solid #f5c400" : "1px solid transparent" }}>
                  {["⌁", "⚙", "⇄", "▣", "▤"][i]} &nbsp; {x}
                </div>
              ))}
            </div>

            <div style={{ border: "1px solid #eee", borderRadius: 8, display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
              <div style={{ padding: 26 }}>
                <h3 style={{ marginTop: 0, fontSize: 19 }}>Price forecasting & scenario analysis</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75 }}>
                  Advanced machine learning models predict market prices with high accuracy so your assets can be scheduled for maximum profitability.
                </p>
                {[
                  "Day-ahead & intraday price forecasts",
                  "Weather, demand and market drivers",
                  "Scenario & uncertainty analysis",
                ].map((x) => (
                  <p key={x} style={{ fontSize: 14 }}>✓ {x}</p>
                ))}
              </div>

              <div style={{ padding: 26 }}>
                <ForecastChart />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "20px 24px 35px" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, marginBottom: 30 }}>Platform capabilities</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 14 }}>
          {[
            ["battery", "Asset Management", "Monitor and control battery assets in real time with full visibility."],
            ["sliders", "Energy Optimization", "Optimize charge/discharge schedules for multiple objectives."],
            ["growth", "Market Participation", "Access energy, reserve and ancillary service markets seamlessly."],
            ["network", "Aggregator Platform", "Aggregate distributed assets and act as a Virtual Power Plant (VPP)."],
            ["shield", "Risk Management", "Protect your assets with advanced limits, alarms and safety controls."],
            ["report", "Reporting & Analytics", "Detailed analytics, KPIs and custom reports for all stakeholders."],
          ].map((x) => (
            <div key={x[1]} style={{ border: "1px solid #eee", borderRadius: 8, padding: 22, textAlign: "center", minHeight: 160 }}>
              <Icon type={x[0]} />
              <b style={{ display: "block", marginTop: 15, fontSize: 14 }}>{x[1]}</b>
              <p style={{ fontSize: 12, lineHeight: 1.55 }}>{x[2]}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px 42px" }}>
        <h2 style={{ textAlign: "center", fontSize: 27, marginBottom: 25 }}>Proven value for our clients</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 10, textAlign: "center" }}>
          {[
            ["10–30%", "Increase in revenue"],
            ["24/7", "AI-driven optimization"],
            ["< 1 sec", "Real-time decision making"],
            ["100%", "Market transparency"],
            ["Secure", "Bank-grade security"],
          ].map((x) => (
            <div key={x[0]} style={{ borderRight: "1px solid #eee", padding: 14 }}>
              <div style={{ color: "#f5b800", fontSize: 30, fontWeight: 900 }}>{x[0]}</div>
              <p style={{ margin: "7px 0 0", fontSize: 13 }}>{x[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px 25px" }}>
        <div style={{ background: "#090909", color: "#fff", borderRadius: 8, padding: "30px 38px", display: "grid", gridTemplateColumns: "90px 1fr 220px 190px", gap: 24, alignItems: "center" }}>
          <div style={{ width: 70, height: 70, border: "1px solid #333", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#f5c400", fontSize: 34 }}>▣</div>
          <div>
            <h2 style={{ margin: 0, fontSize: 28 }}>See the platform in action</h2>
            <p style={{ margin: "8px 0 0", color: "#ddd", lineHeight: 1.6 }}>Book a personalized demo and discover how our EMS platform can maximize the value of your energy assets.</p>
          </div>
          <a href={`${base}/contact`} style={yellowBtn}>Book a Demo →</a>
          <a href={`${base}/contact`} style={{ ...outlineBtn, color: "#fff", borderColor: "#fff" }}>Contact Us →</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Logo({ size = 52, dark = false }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size}>
      <path d="M60 10 L103 34 L103 86 L60 110 L17 86 L17 34 Z" fill="none" stroke={dark ? "#111" : "#fff"} strokeWidth="9" strokeLinejoin="round" />
      <path d="M64 24 L40 62 H57 L51 96 L82 51 H64 Z" fill={dark ? "#111" : "#fff"} />
    </svg>
  );
}

function Icon({ type }) {
  const s = { color: "#f5c400", fontSize: 34, height: 36, display: "flex", alignItems: "center", justifyContent: "center" };
  const map = {
    chart: "⌁",
    shield: "⬡",
    globe: "◎",
    network: "⌘",
    battery: "▣",
    sliders: "☷",
    growth: "▥",
    report: "▤",
  };
  return <div style={s}>{map[type] || "▣"}</div>;
}

function DashboardDark() {
  return (
    <div style={{ background: "#111", color: "#fff", borderRadius: 12, padding: 20, boxShadow: "0 22px 45px rgba(0,0,0,.25)", position: "relative", zIndex: 2 }}>
      <div style={{ display: "grid", gridTemplateColumns: "42px 1fr", gap: 18 }}>
        <div style={{ borderRight: "1px solid #242424", paddingRight: 12, display: "flex", flexDirection: "column", gap: 22, alignItems: "center", color: "#aaa" }}>
          {["⬡", "⌂", "▧", "◉", "▣", "▤", "⌂"].map((x, i) => <div key={i}>{x}</div>)}
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 18 }}>
            <div><b style={{ fontSize: 12 }}>HÖGLUNDS KOMPETENS</b><br /><b>Dashboard</b></div>
            <div style={{ fontSize: 12, color: "#19c46b" }}>● Live &nbsp; <span style={{ color: "#fff", background: "#222", padding: "8px 10px", borderRadius: 5 }}>All Assets⌄</span></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
            {[
              ["Total Revenue (EUR)", "€ 1,248,721", "+18.6% vs last month"],
              ["Total Assets", "24", "Online"],
              ["Total Capacity", "125.6 MW", "Online"],
              ["Avg. SOC", "63%", "In operation"],
            ].map((x, i) => (
              <div key={x[0]} style={{ background: "#1b1b1b", padding: 15, borderRadius: 6 }}>
                <small style={{ color: "#aaa" }}>{x[0]}</small>
                <div style={{ fontSize: 22, fontWeight: 900, margin: "12px 0" }}>{x[1]}</div>
                <small style={{ color: i === 0 ? "#20c46b" : i === 3 ? "#f5b800" : "#aaa" }}>{x[2]}</small>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 14, marginTop: 15 }}>
            <div style={{ background: "#1b1b1b", borderRadius: 6, padding: 18 }}>
              <b>Revenue Overview <small>(EUR)</small></b>
              <div style={{ fontSize: 12, marginTop: 14 }}><span style={{ color: "#f5c400" }}>■</span> Revenue &nbsp; <span style={{ color: "#6b3fc9" }}>■</span> Forecast</div>
              <div style={{ height: 210, display: "flex", alignItems: "end", gap: 16, paddingTop: 15 }}>
                {[92, 120, 135, 160, 92, 104, 118].map((h, i) => (
                  <div key={i} style={{ width: 23, height: h, background: "#f5c400", borderRadius: 10 }} />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-around", color: "#aaa", fontSize: 11 }}>
                {["12 May", "13 May", "14 May", "15 May", "16 May", "17 May", "18 May"].map(x => <span key={x}>{x}</span>)}
              </div>
            </div>

            <div>
              <div style={{ background: "#1b1b1b", borderRadius: 6, padding: 16 }}>
                <b>Market Price (Nord Pool)</b>
                <div style={{ color: "#aaa", fontSize: 11 }}>EUR/MWh</div>
                <MiniLine />
              </div>
              <div style={{ background: "#1b1b1b", borderRadius: 6, padding: 16, marginTop: 14 }}>
                <b>Battery Fleet</b>
                <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 10, alignItems: "center", marginTop: 12 }}>
                  <div style={{ width: 70, height: 70, borderRadius: "50%", background: "conic-gradient(#f5c400 0 30%,#f27600 30% 60%,#6b3fc9 60% 100%)" }} />
                  <div style={{ fontSize: 12, lineHeight: 2 }}>
                    ■ Charging <b style={{ float: "right" }}>30%</b><br />
                    ■ Discharging <b style={{ float: "right" }}>30%</b><br />
                    ■ Standby <b style={{ float: "right" }}>40%</b>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function MiniLine() {
  return (
    <svg viewBox="0 0 220 110" width="100%" height="105">
      <polyline points="0,80 25,58 50,75 80,45 110,68 140,34 170,74 220,42" fill="none" stroke="#6b3fc9" strokeWidth="4" />
      <circle cx="140" cy="34" r="6" fill="#6b3fc9" />
      <text x="128" y="23" fill="#fff" fontSize="12">67.3</text>
      <text x="0" y="105" fill="#aaa" fontSize="10">00:00</text>
      <text x="60" y="105" fill="#aaa" fontSize="10">06:00</text>
      <text x="125" y="105" fill="#aaa" fontSize="10">12:00</text>
      <text x="180" y="105" fill="#aaa" fontSize="10">24:00</text>
    </svg>
  );
}

function ForecastChart() {
  return (
    <svg viewBox="0 0 320 180" width="100%" height="180">
      <text x="0" y="15" fontSize="12" fill="#111">€/MWh</text>
      {[0, 1, 2, 3].map(i => <line key={i} x1="30" x2="310" y1={40+i*35} y2={40+i*35} stroke="#eee" />)}
      <polyline points="30,130 58,82 86,120 115,72 145,110 175,60 205,100 235,52 265,40 300,86" fill="none" stroke="#6b3fc9" strokeWidth="4" />
      <polyline points="30,132 58,86 86,118 115,78 145,108 175,66 205,96 235,56 265,45 300,88" fill="none" stroke="#f27600" strokeWidth="3" strokeDasharray="6 6" />
      <circle cx="175" cy="60" r="5" fill="#6b3fc9" />
      <text x="163" y="50" fontSize="12" fill="#fff">67.3</text>
      <text x="30" y="170" fontSize="11">00:00</text>
      <text x="105" y="170" fontSize="11">06:00</text>
      <text x="180" y="170" fontSize="11">12:00</text>
      <text x="260" y="170" fontSize="11">24:00</text>
    </svg>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#090909", color: "#fff", padding: "42px 24px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1.4fr", gap: 30 }}>
        <div><Logo size={64} /><b>Höglunds Kompetens</b><p style={{ color: "#bbb", lineHeight: 1.6 }}>Engineering and consulting services for battery energy storage systems and power electronic solutions across the Nordic and Europe.</p><small>© 2024 Höglunds Kompetens. All rights reserved.</small></div>
        <div><b>Company</b><p style={footP}>About Us<br />Projects<br />Insights<br />Careers</p></div>
        <div><b>Services</b><p style={footP}>BESS<br />Power Electronics<br />EMS & Trading<br />Aggregator Solutions</p></div>
        <div><b>Resources</b><p style={footP}>Blog<br />Case Studies<br />Downloads</p></div>
        <div><b>Contact</b><p style={footP}>info@hoglundskompetence.com<br />+46 10 123 45 67<br />Sweden — Serving Nordics & Europe</p></div>
      </div>
    </footer>
  );
}

const nav = { color: "#111", textDecoration: "none" };
const label = { color: "#f5b800", fontWeight: 900, fontSize: 13 };
const yellowBtn = { background: "#f5c400", padding: "15px 25px", borderRadius: 5, color: "#111", textDecoration: "none", fontWeight: 800, display: "inline-block" };
const outlineBtn = { border: "2px solid #111", padding: "13px 24px", borderRadius: 5, color: "#111", textDecoration: "none", fontWeight: 800, display: "inline-block" };
const footP = { color: "#bbb", lineHeight: 1.8 };
