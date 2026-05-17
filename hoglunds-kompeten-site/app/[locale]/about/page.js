export default function AboutPage() {
  return (
    <main style={{ background: "#fff", color: "#111", fontFamily: "Arial, sans-serif" }}>
      <Header />

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 24px 35px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 38, alignItems: "center" }}>
          <div>
            <div style={{ color: "#e7b800", fontWeight: 800, fontSize: 13, marginBottom: 18 }}>ABOUT US</div>
            <h1 style={{ fontSize: 48, lineHeight: 1.08, margin: 0, fontWeight: 900 }}>
              Engineering expertise.<br />Energy for the future.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.75, marginTop: 24, maxWidth: 520 }}>
              Höglunds Kompetens is an engineering and consulting company specialized in battery energy storage systems and power electronic solutions. We help our clients design, optimize and operate smarter energy systems that create value – today and for generations to come.
            </p>
            <a href="#who" style={{ display: "inline-block", marginTop: 28, background: "#f5c400", padding: "15px 28px", borderRadius: 4, color: "#111", textDecoration: "none", fontWeight: 800 }}>
              Get to Know Us →
            </a>
          </div>

          <div style={{ position: "relative", height: 430, overflow: "hidden" }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(90deg,#fff 0%,rgba(255,255,255,.55) 18%,rgba(255,255,255,0) 42%), url('/hero-energy-containers.jpg') center/cover no-repeat",
              filter: "grayscale(100%)"
            }} />
            <div style={{
              position: "absolute", right: 0, bottom: 0,
              width: 110, height: 210, background: "#f5c400",
              clipPath: "polygon(45% 0,100% 0,100% 100%,0 100%)"
            }} />
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px 48px" }}>
        <div style={{ border: "1px solid #eee", borderRadius: 8, display: "grid", gridTemplateColumns: "repeat(4,1fr)", overflow: "hidden" }}>
          {[
            ["▣", "2010", "Founded"],
            ["☷", "25+", "Experts"],
            ["⌖", "Sweden", "Headquartered in Västerås"],
            ["◎", "Nordics", "Projects across the region"],
          ].map((x, i) => (
            <div key={i} style={{ padding: "26px 34px", borderRight: i < 3 ? "1px solid #eee" : "none", display: "flex", gap: 18, alignItems: "center" }}>
              <div style={{ color: "#f5c400", fontSize: 34 }}>{x[0]}</div>
              <div>
                <b style={{ fontSize: 30 }}>{x[1]}</b>
                <p style={{ margin: "4px 0 0", fontSize: 13 }}>{x[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="who" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px 45px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.6fr", gap: 48 }}>
          <div>
            <div style={{ color: "#e7b800", fontWeight: 800, fontSize: 13, marginBottom: 18 }}>WHO WE ARE</div>
            <h2 style={{ fontSize: 36, lineHeight: 1.1, margin: 0 }}>A partner you can<br />rely on</h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, marginTop: 22 }}>
              We combine deep technical expertise with a strong understanding of energy markets and operational realities. Our mission is to deliver reliable, efficient and future-proof solutions that empower the energy transition.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
            {[
              ["♢", "Independent & Trustworthy", "Objective advice and solutions – always aligned with your goals."],
              ["♙", "Technical Excellence", "High competence across engineering, systems and energy markets."],
              ["♧", "Sustainable by Design", "We build solutions that create long-term value for our clients and the planet."],
              ["♡", "Committed to Results", "We take ownership and deliver measurable impact."],
            ].map((x, i) => (
              <div key={i} style={{ border: "1px solid #eee", padding: 28, minHeight: 125, display: "flex", gap: 20 }}>
                <div style={{ color: "#f5c400", fontSize: 34 }}>{x[0]}</div>
                <div>
                  <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{x[1]}</h3>
                  <p style={{ margin: 0, lineHeight: 1.6, fontSize: 14 }}>{x[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px 42px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.75fr 1.65fr", gap: 38, alignItems: "center" }}>
          <div>
            <div style={{ color: "#e7b800", fontWeight: 800, fontSize: 13, marginBottom: 18 }}>OUR TEAM</div>
            <h2 style={{ fontSize: 36, lineHeight: 1.1, margin: 0 }}>Experience that<br />makes a difference</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, marginTop: 20 }}>
              Our multidisciplinary team brings together engineers, consultants and energy experts with a shared drive to solve complex challenges and deliver real value.
            </p>
            <button style={{ marginTop: 22, background: "#fff", border: "2px solid #111", padding: "13px 26px", borderRadius: 4, fontWeight: 800 }}>
              Meet the Team →
            </button>
          </div>
          <div style={{
            height: 280,
            borderRadius: 4,
            background: "linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.1)), url('/about-us-page.jpg') center/cover no-repeat",
            filter: "grayscale(100%)"
          }} />
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px 45px" }}>
        <div style={{ border: "1px solid #eee", borderRadius: 8, padding: "28px 45px", display: "grid", gridTemplateColumns: "1.4fr repeat(4,1fr)", gap: 30, alignItems: "center" }}>
          <div>
            <h3 style={{ fontSize: 24, margin: "0 0 12px" }}>Quality & Partnerships</h3>
            <p style={{ margin: 0, lineHeight: 1.65, fontSize: 15 }}>
              We follow international standards and collaborate with leading technology partners to ensure high quality in everything we deliver.
            </p>
          </div>
          <div style={{ textAlign: "center", color: "#1775b8", fontWeight: 900, fontSize: 34 }}>ISO<br /><span style={{ fontSize: 17 }}>9001:2015</span></div>
          <div style={{ textAlign: "center", color: "#1775b8", fontWeight: 900, fontSize: 34 }}>ISO<br /><span style={{ fontSize: 17 }}>14001:2015</span></div>
          <div style={{ textAlign: "center", color: "#1775b8", fontWeight: 900, fontSize: 34 }}>IEC<br /><span style={{ fontSize: 17 }}>62443</span></div>
          <div style={{ fontWeight: 800, fontSize: 19 }}>Strategic<br />Technology<br />Partners</div>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px 45px" }}>
        <div style={{ background: "#080808", color: "#fff", borderRadius: 8, padding: "35px 48px", display: "grid", gridTemplateColumns: "90px 1fr 210px", gap: 28, alignItems: "center" }}>
          <div style={{ width: 70, height: 70, border: "1px solid #333", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#f5c400", fontSize: 32 }}>☏</div>
          <div>
            <h2 style={{ margin: "0 0 8px", fontSize: 30 }}>Let’s build the future of energy together</h2>
            <p style={{ margin: 0, color: "#ccc" }}>We’re ready to understand your challenges and help you design the right solution.</p>
          </div>
          <a href="/contact" style={{ background: "#f5c400", padding: "17px 28px", borderRadius: 4, color: "#111", textDecoration: "none", fontWeight: 800, textAlign: "center" }}>
            Get in Touch →
          </a>
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
    ["Insights", "/insights"],
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
          <a key={label} href={href} style={{ color: "#111", textDecoration: "none", borderBottom: label === "About Us" ? "3px solid #f5c400" : "none", paddingBottom: 9 }}>{label}</a>
        ))}
        <a href="/contact" style={{ background: "#f5c400", padding: "15px 24px", borderRadius: 4, color: "#111", textDecoration: "none" }}>Get in Touch →</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#070707", color: "#fff", padding: "38px 24px 35px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 30, fontSize: 14 }}>
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
    </footer>
  );
}
