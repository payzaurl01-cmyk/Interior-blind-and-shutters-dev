import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Furnishings",
  description: "Explore our complete made-to-measure blinds, curtains, shutters and flyscreens collection.",
};

const PRODUCT_GROUPS = [
  {
    number: "01",
    title: "Blinds",
    image: "/assets/productstoWEBP/roller%20blinds%20blockout_1.webp",
    imageAlt: "Made-to-measure roller blinds in a modern interior",
    products: [
      { name: "Roller Blinds", href: "/product/roller-blinds" },
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
    image: "/assets/productstoWEBP/sheer%20curtains%202.webp",
    imageAlt: "Full-height sheer curtains softly filtering daylight",
    products: [
      { name: "Sheer Curtains", href: "/product/sheer-curtains" },
      { name: "Blockout Curtains", href: "/product/blockout-curtains" },
    ],
  },
  {
    number: "03",
    title: "Shutters",
    image: "/assets/productstoWEBP/pvc%20plantataion%20shutters%202.webp",
    imageAlt: "White PVC plantation shutters in a living room",
    products: [
      { name: "Shutters", href: "/product/pvc-plantation-shutters" },
    ],
  },
  {
    number: "04",
    title: "Curvers",
    image: "/assets/productstoWEBP/curvers%202.webp",
    imageAlt: "Curved full-height window furnishing in a contemporary home",
    products: [{ name: "Curvers", href: "/product/curvers" }],
  },
  {
    number: "05",
    title: "Flyscreens",
    image: "/assets/productstoWEBP/flyscreen.webp",
    imageAlt: "Retractable flyscreen fitted across a wide doorway",
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
            src="/assets/pic1-optimized.webp"
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
                  <img
                    alt={group.imageAlt}
                    className="products-group-image"
                    loading="lazy"
                    src={group.image}
                  />
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
