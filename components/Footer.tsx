import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        padding: "80px 0 40px",
        backgroundColor: "#080808",
        borderTop: "1px solid var(--glass-border)",
      }}
    >
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Link
              href="/"
              className="text-3xl font-bold font-serif tracking-wider"
            >
              <span className="text-[var(--primary)]">Loyal</span>
              <span className="text-white"> Platter</span>
            </Link>
            <p
              style={{
                marginTop: "20px",
                color: "var(--text-muted)",
                lineHeight: "1.8",
              }}
            >
              Experience the pinnacle of fine dining where culinary artistry
              meets refined ambiance. We craft unforgettable moments through
              flavor and elegance.
            </p>
          </div>

          <div className="text-center">
            <h4
              className="font-serif uppercase tracking-widest"
              style={{ marginBottom: "25px", color: "var(--primary)" }}
            >
              Contact Information
            </h4>
            <p style={{ color: "var(--text-muted)", marginBottom: "10px" }}>
              123 Gastronomy Lane, Culinary City
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "10px" }}>
              +1 (555) 789-1234
            </p>
            <p style={{ color: "var(--text-muted)" }}>reservations@loyal.com</p>
          </div>

          <div style={{ textAlign: "right" }}>
            <h4
              className="font-serif uppercase tracking-widest"
              style={{ marginBottom: "25px", color: "var(--primary)" }}
            >
              Opening Hours
            </h4>
            <p style={{ color: "var(--text-muted)", marginBottom: "10px" }}>
              Mon - Thu: 5 PM - 10 PM
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "10px" }}>
              Fri - Sat: 5 PM - 11 PM
            </p>
            <p style={{ color: "var(--text-muted)" }}>Sunday: 11 AM - 9 PM</p>
          </div>
        </div>

        <div
          style={{
            marginTop: "60px",
            paddingTop: "30px",
            borderTop: "1px solid var(--glass-border)",
            textAlign: "center",
            color: "var(--text-muted)",
            fontSize: "14px",
          }}
        >
          <p>
            © {new Date().getFullYear()} Loyal Platter. Created with passion for
            exquisite taste.
          </p>
        </div>
      </div>
    </footer>
  );
}
