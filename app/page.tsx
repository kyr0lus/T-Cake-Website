export default function Home() {
  const products = [
    {
      id: "victoria",
      name: "Classic Victoria Sponge",
      description: "Light sponge with strawberry jam and vanilla buttercream. Serves 8–10.",
      price: 28,
      image: "/products/victoria.jpg",
      tags: ["Popular", "Vegetarian"],
    },
    {
      id: "chocolate",
      name: "Triple Chocolate Cake",
      description: "Rich cocoa sponge with chocolate ganache. Serves 10–12.",
      price: 34,
      image: "/products/chocolate.jpg",
      tags: ["Best for birthdays"],
    },
    {
      id: "cupcakes",
      name: "Box of 15 Cupcakes",
      description: "Choose 2 flavours. Includes personalised toppers (optional).",
      price: 22,
      image: "/products/cupcakes.jpg",
      tags: ["Great gift"],
    },
  ];

  const gbp = (n: number) =>
    new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(n);

  return (
    <main style={{ background: "#fffaf5", minHeight: "100vh", color: "#1f2328" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
        {/* Nav */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0" }}>
          <div style={{ fontWeight: 800, letterSpacing: 0.2 }}>T's Cakes</div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#cakes">Cakes</a>
            <a href="#order">Order</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        {/* Hero */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 20,
            alignItems: "center",
            padding: 24,
            background: "white",
            border: "1px solid #ece6e0",
            borderRadius: 16,
          }}
        >
          <div>
            <h1 style={{ margin: "0 0 8px", fontSize: 40 }}>Custom cakes baked to order</h1>
            <p style={{ margin: 0, color: "#667085", lineHeight: 1.6 }}>
              Fresh bakes for birthdays, anniversaries, and events. Choose a cake from the menu or request a custom design.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
              <a
                href="#cakes"
                style={{
                  border: "1px solid #b85c7a",
                  background: "#b85c7a",
                  color: "white",
                  padding: "10px 14px",
                  borderRadius: 10,
                  fontWeight: 600,
                }}
              >
                View cakes
              </a>
              <a
                href="#contact"
                style={{
                  border: "1px solid #b85c7a",
                  background: "transparent",
                  color: "#b85c7a",
                  padding: "10px 14px",
                  borderRadius: 10,
                  fontWeight: 600,
                }}
              >
                Request a custom order
              </a>
            </div>
            <p style={{ marginTop: 14, color: "#667085" }}>
              Typical lead time: <b>3–7 days</b> (adjust this).
            </p>
          </div>

          <div style={{ border: "1px solid #ece6e0", borderRadius: 16, overflow: "hidden", background: "white" }}>
            <img
              src={products[0].image}
              alt="Featured cake"
              style={{ width: "100%", height: 260, objectFit: "cover", background: "#f3f3f3" }}
            />
            <div style={{ padding: 14, color: "#667085" }}>
              Collection / delivery available (edit details below).
            </div>
          </div>
        </section>

        {/* Products */}
        <h2 id="cakes" style={{ marginTop: 34, marginBottom: 10, fontSize: 20 }}>
          Menu
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {products.map((p) => (
            <div key={p.id} style={{ border: "1px solid #ece6e0", background: "white", borderRadius: 16, overflow: "hidden" }}>
              <img src={p.image} alt={p.name} style={{ width: "100%", height: 210, objectFit: "cover", background: "#f3f3f3" }} />
              <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        display: "inline-block",
                        background: "#f7e7ee",
                        color: "#b85c7a",
                        padding: "4px 10px",
                        borderRadius: 999,
                        fontSize: 12,
                        border: "1px solid #f1d1dc",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ fontSize: 18, fontWeight: 800 }}>{p.name}</div>
                <div style={{ color: "#667085" }}>{p.description}</div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <div style={{ fontWeight: 800 }}>{gbp(p.price)}</div>
                  <a
                    href="#contact"
                    style={{
                      border: "1px solid #b85c7a",
                      background: "#b85c7a",
                      color: "white",
                      padding: "10px 14px",
                      borderRadius: 10,
                      fontWeight: 600,
                    }}
                  >
                    Enquire / Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order */}
        <h2 id="order" style={{ marginTop: 34, marginBottom: 10, fontSize: 20 }}>
          Orders & payments
        </h2>
        <div style={{ border: "1px solid #ece6e0", background: "white", borderRadius: 16, padding: 14, color: "#667085" }}>
          <p style={{ marginTop: 0 }}>
            This section is where card payments will go (Stripe). For now, your website is “display + contact”.
          </p>
          <p style={{ marginBottom: 0 }}>
            Next step: we’ll add a simple order form → then connect Stripe checkout.
          </p>
        </div>

        {/* Contact */}
        <h2 id="contact" style={{ marginTop: 34, marginBottom: 10, fontSize: 20 }}>
          Contact
        </h2>

        <div style={{ border: "1px solid #ece6e0", background: "white", borderRadius: 16, padding: 14 }}>
          <div style={{ display: "grid", gap: 8, color: "#1f2328" }}>
            <div><b>Email:</b> you@yourbakery.co.uk</div>
            <div><b>Phone:</b> +44 07xxx xxxxxx</div>
            <div><b>Location:</b> Your town/city</div>
          </div>

          <p style={{ color: "#667085" }}>
            For custom cakes, include: servings, theme, date needed, allergies, and budget.
          </p>
        </div>

        <footer style={{ marginTop: 40, padding: "18px 0 40px", color: "#667085", fontSize: 14, borderTop: "1px solid #ece6e0" }}>
          © {new Date().getFullYear()} Your Bakery Name. All rights reserved.
        </footer>
      </div>


    </main>
  );
}
