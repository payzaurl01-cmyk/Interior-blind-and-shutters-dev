import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Furnishings",
  description: "Explore our complete made-to-measure blinds, curtains, shutters and flyscreens collection.",
};

const PRODUCT_GROUPS = [
  {
    number: "01",
    title: "Blinds",
    products: [
      { name: "Roller Blinds — Blockout", href: "/product/blockout-blinds" },
      { name: "Zebra Blinds", href: "/product/zebra-blinds" },
      { name: "Vertical Blinds", href: "/product/vertical-blinds" },
      { name: "Sliding Door Roller Blinds", href: "/product/sliding-door-blinds" },
      { name: "Cassette Blinds", href: "/product/cassette-blinds" },
      { name: "Light Filtering Roller Blinds", href: "/product/light-filtering" },
    ],
  },
  {
    number: "02",
    title: "Curtains",
    products: [
      { name: "Sheer Curtains", href: "/product/sheer-curtains" },
      { name: "Blockout Curtains", href: "/product/blockout-curtains" },
    ],
  },
  {
    number: "03",
    title: "Plantation Shutters",
    products: [
      { name: "PVC Plantation Shutters", href: "/product/pvc-plantation-shutters" },
    ],
  },
  {
    number: "04",
    title: "Curvers",
    products: [{ name: "Curvers", href: "/product/curvers" }],
  },
  {
    number: "05",
    title: "Flyscreens",
    products: [{ name: "Flyscreens", href: "/product/flyscreens" }],
  },
] as const;

export default function ProductsPage() {
  return (
    <main className="products-page">
      <section className="section inner-hero products-hero">
        <div className="container">
          <div className="inner-title-wrap inner-hero">
            <div className="inner-title-box reveal">
              <h1 className="hero-white-title">
                Every window deserves
                <span className="italic none">the right finish.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="visual-wrap">
          <img
            alt="Custom window furnishings in a bright interior"
            className="visual products-hero-image"
            loading="eager"
            src="/assets/roller%20blinds/WhatsApp%20Image%202026-07-27%20at%2013.51.49.jpeg"
          />
          <div className="visual-overlay" />
        </div>
      </section>

      <section className="section products-catalog-section">
        <div className="container">
          <div className="products-catalog-intro reveal">
            <span className="products-eyebrow">Our complete collection</span>
            <h2 className="products-catalog-title">
              Made to measure.
              <span className="italic none">Made to belong.</span>
            </h2>
            <p className="secondary-text-regular">
              Explore every style, then choose a product to see its details and arrange your free in-home measure and quote.
            </p>
          </div>

          <div className="products-groups">
            {PRODUCT_GROUPS.map((group) => (
              <article className="products-group reveal" key={group.number}>
                <header className="products-group-header">
                  <span className="products-group-number">{group.number}</span>
                  <h3>{group.title}</h3>
                  <span className="products-group-count">
                    {String(group.products.length).padStart(2, "0")} products
                  </span>
                </header>

                <div className="products-list">
                  {group.products.map((product, index) => (
                    <a className="products-list-item" href={product.href} key={product.href}>
                      <span className="products-list-index">
                        {group.number}.{String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="products-list-name">{product.name}</span>
                      <span className="products-list-arrow" aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
