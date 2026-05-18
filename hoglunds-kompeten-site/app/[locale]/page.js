export default function Home({ params }) {
  const locale = params?.locale || "en";
  const base = `/${locale}`;

  const nav = {
    color: "#111",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 15,
  };

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#fff",
        color: "#111",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "24px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {/* LOGO */}
        <a
          href={base}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            textDecoration: "none",
            color: "#111",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2482/2482841.png"
            alt="logo"
            style={{
              width: 56,
              height: 56,
              objectFit: "contain",
            }}
          />

          <div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              Höglunds Kompetens
            </div>

            <div
              style={{
                fontSize: 13,
                color: "#666",
              }}
            >
              Hoglunds Competence
            </div>
          </div>
        </a>

        {/* NAVIGATION */}
        <nav
          style={{
            display: "flex",
            gap: 28,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a href={base} style={nav}>
            Home
          </a>

          <a href={`${base}/services`} style={nav}>
            Services
          </a>

          <a href={`${base}/ems-platform`} style={nav}>
            EMS Platform
          </a>

          <a href={`${base}/projects`} style={nav}>
            Projects
          </a>

          <a href={`${base}/about`} style={nav}>
            About Us
          </a>

          <a href={`${base}/insights`} style={nav}>
            Insights
          </a>

          <a
            href={`${base}/contact`}
            style={{
              background: "#111",
              color: "#fff",
              padding: "14px 24px",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Contact Us →
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 20px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 50,
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <div>
          <div
            style={{
              color: "#c58a00",
              fontWeight: 700,
              marginBottom: 20,
              letterSpacing: 1,
            }}
          >
            POWERING A SUSTAINABLE FUTURE
          </div>

          <h1
            style={{
              fontSize: "clamp(48px, 8vw, 86px)",
              lineHeight: 1,
              marginBottom: 30,
              fontWeight: 800,
            }}
          >
            Battery Energy
            <br />
            Storage & EMS
            <br />
            Solutions
          </h1>

          <p
            style={{
              fontSize: 22,
              color: "#555",
              lineHeight: 1.7,
              maxWidth: 620,
              marginBottom: 40,
            }}
          >
            Engineering, technical consulting and EMS optimization for
            sustainable energy projects across the Nordic and Europe.
          </p>

          <div
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <a
              href={`${base}/services`}
              style={{
                background: "#f5b800",
                color: "#111",
                padding: "18px 34px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 17,
              }}
            >
              Our Services →
            </a>

            <a
              href={`${base}/ems-platform`}
              style={{
                border: "2px solid #111",
                color: "#111",
                padding: "18px 34px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 17,
              }}
            >
              Explore EMS Platform →
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop"
            alt="hero"
            style={{
              width: "100%",
              borderRadius: 28,
              objectFit: "cover",
              minHeight: 500,
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            }}
          />
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px 100px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 24,
        }}
      >
        {[
          {
            title: "From kW to MW Scale",
            text: "Solutions for commercial, industrial & utility projects.",
          },
          {
            title: "End-to-End Expertise",
            text: "Design, engineering, technical requirements & implementation.",
          },
          {
            title: "Smart EMS Optimization",
            text: "Advanced battery optimization and monitoring systems.",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              padding: 34,
              border: "1px solid #eee",
              borderRadius: 24,
              background: "#fafafa",
            }}
          >
            <h3
              style={{
                fontSize: 26,
                marginBottom: 18,
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#666",
                lineHeight: 1.8,
                fontSize: 17,
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
