import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, getProducts } from "@/lib/content";

export function generateStaticParams() {
  return getProducts().map((p) => ({ slug: p.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

// Product detail content comes from src/content/products.json while the hero
// keeps the site's existing image and reveal-animation design.
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <section className="section inner-hero">
        <div className="container">
          <div className="inner-title-wrap inner-hero">
            <div className="inner-title-box is-pricing reveal">
              <h1 className="hero-white-title">
                Made for your space
                <span className="italic none">{product.name}</span>
              </h1>
            </div>
            <div className="inner-button-box reveal">
              <a className="primary-button inline-block" href="/contact">
                <div className="primary-button-text-wrap">
                  <div className="primary-button-text">GET A FREE QUOTE</div>
                  <div className="primary-button-hover-text">GET A FREE QUOTE</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="visual-wrap">
          <img
            alt={`${product.name} installed in a home`}
            className="visual"
            loading="eager"
            src={product.heroImage || "/assets/images/Pricing-Banner-Image.webp"}
            style={{ height: "100%", objectFit: "cover", width: "100%" }}
          />
          <div className="visual-overlay" />
        </div>
      </section>

      <section className="section full-padding-bottom">
        <div className="container">
          <div className="project-single-wrap">
            <h2 className="discover-title reveal">{product.description}</h2>
            <div className="about-property-flex reveal">
              <h3 className="about-property">Product highlights</h3>
              <div className="area-address-wrap">
                {product.features.map((feature) => (
                  <div className="area-address-card" key={feature}>
                    <div className="primary-text-regular">{feature}</div>
                    <span aria-hidden="true">↗</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
