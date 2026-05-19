export default function ContactPage({ params }) {
  const locale = params?.locale || "en";
  const base = `/${locale}`;

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#111", background: "#fff" }}>
      <Header base={base} />

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "55px 24px 35px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 40, alignItems: "center" }}>
          <div>
            <div style={label}>CONTACT US</div>
            <h1 style={{ fontSize: 52, lineHeight: 1.05, margin: "16px 0", fontWeight: 900 }}>
              Let’s build the future<br />of energy together.
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 540 }}>
              Whether you have a project in mind, need expert advice, or want to explore how we can support your energy storage or EMS needs — we’re here to help.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 34 }}>
              {[
                ["⚡", "Fast Response", "We aim to respond within 24 hours"],
                ["♢", "Trusted Partner", "Independent, reliable and dedicated"],
                ["⌘", "Expert Support", "From concept to commissioning"],
              ].map((x) => (
                <div key={x[1]}>
                  <div style={{ color: "#f5c400", fontSize: 34, marginBottom: 12 }}>{x[0]}</div>
                  <b>{x[1]}</b>
                  <p style={{ fontSize: 13, lineHeight: 1.55 }}>{x[2]}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            height: 430,
            borderRadius: 6,
            background: "linear-gradient(90deg,#fff 0%,rgba(255,255,255,.55) 20%,rgba(255,255,255,0) 45%), #f4f4f4",
            border: "1px solid #eee",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{
              position: "absolute", right: 0, bottom: 0,
              width: 120, height: 230, background: "#f5c400",
              clipPath: "polygon(45% 0,100% 0,100% 100%,0 100%)"
            }} />
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "20px 24px 45px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.25fr .9fr", gap: 28 }}>
          <div style={panel}>
            <h2 style={{ fontSize: 28, margin: "0 0 10px" }}>Send us a message</h2>
            <p style={{ marginTop: 0 }}>Fill out the form below and we will get back to you as soon as possible.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <input style={input} placeholder="Full Name *" />
              <input style={input} placeholder="Company" />
              <input style={input} placeholder="Email Address *" />
              <input style={input} placeholder="Phone Number" />
            </div>

            <input style={{ ...input, marginTop: 18 }} placeholder="Subject *" />
            <textarea style={{ ...input, marginTop: 18, height: 145, resize: "vertical" }} placeholder="Your Message *" />

            <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, marginTop: 16 }}>
              <input type="checkbox" defaultChecked />
              I agree to the processing of my personal data in accordance with the Privacy Policy.
            </label>

            <button style={{ ...yellowBtn, border: 0, marginTop: 22 }}>Send Message →</button>
          </div>

          <div style={panel}>
            <h2 style={{ fontSize: 28, margin: "0 0 10px" }}>Contact Information</h2>
            <p>Feel free to reach out to us directly using the details below.</p>

            {[
              ["⌖", "Head Office", "Höglunds Kompetens AB\Hagastaden, 113 66 Stockholm, Sweden"],
              ["☎", "Phone", "+46 73 700 11 69"],
              ["✉", "Email", "info@hoglundskompetens.se"],
              ["◎", "Service Area", "Sweden | Nordic Countries | Europe"],
              ["◷", "Business Hours", "Monday – Friday: 08:00 – 17:00 CET"],
            ].map((x) => (
              <div key={x[1]} style={{ display: "grid", gridTemplateColumns: "42px 1fr", gap: 16, padding: "18px 0", borderBottom: "1px solid #eee" }}>
                <div style={{ color: "#f5c400", fontSize: 26 }}>{x[0]}</div>
                <div>
                  <b>{x[1]}</b>
                  <p style={{ whiteSpace: "pre-line", margin: "6px 0 0", lineHeight: 1.55 }}>{x[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px 45px" }}>
        <div style={{ background: "#f7f7f7", borderRadius: 10, padding: 28, display: "grid", gridTemplateColumns: "80px 1fr 220px 280px", gap: 20, alignItems: "center" }}>
          <div style={{ width: 64, height: 64, background: "#6b3fc9", color: "#fff", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30 }}>☏</div>
          <div>
            <h3 style={{ margin: 0, fontSize: 22 }}>Need immediate assistance?</h3>
            <p style={{ margin: "6px 0 0" }}>Call us directly or send an email — we’re here to support your project.</p>
          </div>
          <a href="tel:+46737001169" style={yellowBtn}>☎ +46 73 700 11 69</a>
          <a href="mailto:info@hoglundskompetens.se" style={outlineBtn}>✉ info@hoglundskompetens.se</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header({ base }) {
  return (
    <header style={{ maxWidth: 1180, margin: "0 auto", height: 92, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", borderBottom: "1px solid #eee" }}>
      <a href={base} style={{ display: "flex", gap: 12, alignItems: "center", color: "#111", textDecoration: "none" }}>
        <div style={{ width: 52, height: 52, border: "4px solid #111", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>⚡</div>
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
        <a href={`${base}/contact`} style={{ ...nav, borderBottom: "3px solid #f5c400", paddingBottom: 9 }}>Contact</a>
        <a href={`${base}/contact`} style={yellowBtn}>Get in Touch →</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#070707", color: "#fff", padding: "42px 24px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 30 }}>
        <div>
          <b style={{ fontSize: 18 }}>Höglunds Kompetens</b>
          <p style={{ color: "#bbb", lineHeight: 1.6 }}>
            Engineering and consulting services for battery energy storage systems and power electronic solutions across the Nordic and Europe.
          </p>
        </div>
        <div><b>Company</b><p>About Us<br />Projects<br />Insights<br />Careers</p></div>
        <div><b>Services</b><p>BESS<br />Power Electronics<br />EMS & Trading<br />Aggregator Solutions</p></div>
        <div><b>Resources</b><p>Blog<br />Case Studies<br />Downloads</p></div>
        <div><b>Contact</b><p>info@hoglundskompetence.se<br />+46 73 700 11 69<br />Sweden</p></div>
      </div>
    </footer>
  );
}

const nav = { color: "#111", textDecoration: "none" };
const label = { color: "#d69800", fontWeight: 900, fontSize: 13 };
const yellowBtn = { background: "#f5c400", padding: "15px 24px", borderRadius: 5, color: "#111", textDecoration: "none", fontWeight: 800, display: "inline-block" };
const outlineBtn = { border: "2px solid #111", padding: "13px 22px", borderRadius: 5, color: "#111", textDecoration: "none", fontWeight: 800, display: "inline-block" };
const panel = { border: "1px solid #eee", borderRadius: 10, padding: 28, boxShadow: "0 12px 30px rgba(0,0,0,.04)", background: "#fff" };
const input = { width: "100%", padding: "16px 14px", border: "1px solid #ddd", borderRadius: 5, fontSize: 14 };
