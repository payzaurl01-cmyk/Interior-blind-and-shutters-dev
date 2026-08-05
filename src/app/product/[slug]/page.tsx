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
  return { title: `${product.name} Plan`, description: product.description };
}

// Nuvora template — plan / product detail. Layout mirrors the original design;
// data comes from src/content/products.json and feeds the localStorage cart.
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const features = product.features.length ? product.features : new Array(6).fill("");

  return (
    <>
      <section className="section pricing-single">
        <div className="container">
          <div className="pricing-single-flex">
            <div className="pricing-single-card-wrap reveal">
              <div className="pricing-single-card">
                <div className="pricing-card-left-box">
                  <div className="plan-name-box">
                    <h4 className="plan-name">{product.name}</h4>
                    <div className="secondary-text-regular" />
                  </div>
                  <div className="plan-price-box">
                    <h4 className="plan-price">{product.price}</h4>
                    <div className="secondary-text-regular">{product.period}</div>
                  </div>
                  <div className="add-to-cart">
                    <button
                      className="plan-button add-to-cart-button"
                      data-add-to-cart="1"
                      data-cart-id={product.handle}
                      data-cart-name={product.name}
                      data-cart-price={product.price}
                      type="button"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="pricing-card-right-box">
                  <div className="features">Features</div>
                  <ul className="single-feature-list list-unstyled" role="list">
                    {features.map((feat, i) => (
                      <li className="feature-list-item" key={i}>
                        <div className="feature-icon-box">
                          <img
                            alt=""
                            className="feature-icon"
                            loading="lazy"
                            src="/assets/images/693ea9c07304940fc24e8a22_tick-circle.svg"
                          />
                        </div>
                        <div className="description">{feat}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="plan-single-right-box">
              <div className="plan-single-title-box reveal">
                <h2 className="single-plan-name">{product.name}</h2>
                <p className="secondary-text-regular">{product.description}</p>
              </div>
              <div className="about-plan-box reveal">
                <h3 className="abouut-plan-name">About Plan</h3>
                <p className="secondary-text-regular">{product.description}</p>
              </div>
              <div className="plan-image-box reveal" />
              <div className="plan-choose-box reveal">
                <h4 className="choose-plan-name">Why Choose Us</h4>
                <p />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
