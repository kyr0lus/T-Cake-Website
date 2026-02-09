"use client";

import { useEffect, useState, type MouseEvent } from "react";

function BasketIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 6h2l2.2 10.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L22 6H6.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 10l3-4 3 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

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

  // NOTE: "Order" no longer points to #order since the Orders section was removed.
  const navItems = [
    { key: "cakes", label: "Cakes", href: "#cakes" },
    { key: "brownies", label: "Brownies", href: "#" },
    { key: "cupcakes", label: "Cupcakes", href: "#" },
    { key: "traybakes", label: "Tray bakes", href: "#" },
    { key: "makeyourown", label: "Make your own", href: "#" },
    { key: "inquire", label: "Inquire", href: "#contact" },
    { key: "order", label: "Order", href: "#contact" },
    { key: "contact", label: "Contact us", href: "#contact" },
    { key: "basket", label: "Basket", href: "#" },
    { key: "about", label: "About us", href: "#" },
  ] as const;

  const [activeKey, setActiveKey] = useState<(typeof navItems)[number]["key"]>("cakes");

  // For looks: basket badge can just stay 0 for now
  const basketCount = 0;

  // Keep active tab in sync with hash, but don't overwrite "Inquire" when it goes to #contact.
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash || "";

      if (hash === "#cakes") setActiveKey("cakes");
      else if (hash === "#contact") {
        setActiveKey((prev) => (prev === "inquire" ? "inquire" : prev === "order" ? "order" : "contact"));
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const gbp = (n: number) =>
    new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(n);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, item: (typeof navItems)[number]) => {
    if (item.href === "#") {
      e.preventDefault();
      setActiveKey(item.key);
      return;
    }
    setActiveKey(item.key);
  };

  return (
    <main style={{ background: "var(--background)", minHeight: "100vh", color: "var(--foreground)" }}>
      {/* Top banner */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "var(--primary)",
          borderBottom: "1px solid var(--primary-strong)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 24px 14px" }}>
          {/* Title centred */}
          <div
            style={{
              textAlign: "center",
              fontWeight: 900,
              letterSpacing: 2,
              fontSize: 22,
              paddingTop: 6,
              paddingBottom: 10,
            }}
          >
            T&apos;S CAKES
          </div>

          {/* Nav below title */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <nav style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              {navItems.map((item) => {
                const isActive = activeKey === item.key;
                const isBasket = item.key === "basket";

                return (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={["topbar-link", isActive ? "is-active" : ""].filter(Boolean).join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isBasket ? <BasketIcon /> : null}
                    <span>{item.label}</span>
                    {isBasket ? <span className="topbar-badge">{basketCount}</span> : null}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Page content */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
        {/* Hero */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 20,
            alignItems: "center",
            padding: 24,
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
          }}
        >
          <div>
            <h1 style={{ margin: "0 0 8px", fontSize: 40 }}>Custom cakes baked to order</h1>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>
              Fresh bakes for birthdays, anniversaries, and events. Choose a cake from the menu or request a custom design.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
              <a
                href="#cakes"
                style={{
                  border: "1px solid var(--primary-strong)",
                  background: "var(--primary)",
                  color: "var(--foreground)",
                  padding: "10px 14px",
                  borderRadius: 10,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                View cakes
              </a>

              <a
                href="#contact"
                style={{
                  border: "1px solid var(--primary-strong)",
                  background: "transparent",
                  color: "var(--foreground)",
                  padding: "10px 14px",
                  borderRadius: 10,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Request a custom order
              </a>
            </div>

            <p style={{ marginTop: 14, color: "var(--muted)" }}>
              Typical lead time: <b>3–7 days</b> (adjust this).
            </p>
          </div>

          <div style={{ border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden", background: "var(--card)" }}>
            <img
              src={products[0].image}
              alt="Featured cake"
              style={{ width: "100%", height: 260, objectFit: "cover", background: "#f3f3f3" }}
            />
            <div style={{ padding: 14, color: "var(--muted)" }}>Collection / delivery available (edit details below).</div>
          </div>
        </section>

        {/* Products */}
        <h2 id="cakes" style={{ marginTop: 34, marginBottom: 10, fontSize: 20 }}>
          Menu
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16 }}>
          {products.map((p) => (
            <div key={p.id} style={{ border: "1px solid var(--border)", background: "var(--card)", borderRadius: 16, overflow: "hidden" }}>
              <img src={p.image} alt={p.name} style={{ width: "100%", height: 210, objectFit: "cover", background: "#f3f3f3" }} />

              <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        display: "inline-block",
                        background: "var(--primary)",
                        color: "var(--foreground)",
                        padding: "4px 10px",
                        borderRadius: 999,
                        fontSize: 12,
                        border: "1px solid var(--primary-strong)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ fontSize: 18, fontWeight: 800 }}>{p.name}</div>
                <div style={{ color: "var(--muted)" }}>{p.description}</div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <div style={{ fontWeight: 800 }}>{gbp(p.price)}</div>
                  <a
                    href="#contact"
                    style={{
                      border: "1px solid var(--primary-strong)",
                      background: "var(--primary)",
                      color: "var(--foreground)",
                      padding: "10px 14px",
                      borderRadius: 10,
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    Enquire / Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <h2 id="contact" style={{ marginTop: 34, marginBottom: 10, fontSize: 20 }}>
          Contact
        </h2>

        <div style={{ border: "1px solid var(--border)", background: "var(--card)", borderRadius: 16, padding: 14 }}>
          <div style={{ display: "grid", gap: 8, color: "var(--foreground)" }}>
            <div>
              <b>Email:</b> you@yourbakery.co.uk
            </div>
            <div>
              <b>Phone:</b> +44 07xxx xxxxxx
            </div>
            <div>
              <b>Location:</b> Your town/city
            </div>
          </div>

          <p style={{ color: "var(--muted)" }}>
            For custom cakes, include: servings, theme, date needed, allergies, and budget.
          </p>
        </div>

        <footer style={{ marginTop: 40, padding: "18px 0 40px", color: "var(--muted)", fontSize: 14, borderTop: "1px solid var(--border)" }}>
          © {new Date().getFullYear()} Your Bakery Name. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
