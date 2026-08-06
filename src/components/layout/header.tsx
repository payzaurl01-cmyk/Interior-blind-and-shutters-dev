// Nuvora template — shared site header (navbar, cart drawer, full-screen menu).
// Markup mirrors the original design; styling comes from /assets/css/styles.css.
"use client";

import { usePathname } from "next/navigation";


export function Header() {
  // The adaptive logo: the dark home hero keeps the white logo (.v1); every other
  // (light-background) page adds `nav-on-light` so the black logo (.v2) shows.
  const pathname = usePathname();
  const navbarClass = pathname === "/" ? "navbar" : "navbar nav-on-light";
  return (
    <div className="header">
      <div className={navbarClass}>
        <div className="wf-layout-blockcontainer container">
          <div className="navbar-wrapper">
            <div className="nav-content-wrap">
              <a aria-current="page" className="nav-logo-wrap inline-block" href="/">

                <p className="nav-logo-text text-white">Interior blind and shutters</p>
                <img alt="Nav Logo" className="nav-logo v2" loading="lazy" src="/assets/images/Nuvora-Black.svg" />
              </a>
              <div className="nav-item-wrap">
                <div className="nav-main-menu-wrap">
                  <a aria-current="page" className="menu-link" href="/">
                    Home
                  </a>
                  <a className="menu-link" href="/about">
                    About
                  </a>
                  <a className="menu-link" href="/blog">
                    Blog
                  </a>
                  {/* <a className="menu-link" href="/pricing">
                    PRICING
                  </a> */}
                  <a className="menu-link" href="/products">
                    Products
                  </a>
                  <a className="menu-link" href="/contact">
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-flex">
              <div className="cart nav-cart">
                <a aria-haspopup="dialog" aria-label="Open cart" className="cart-button inline-block" data-cart-open="" role="button">
                  <img alt="" className="cart-icon" loading="lazy" src="/assets/images/Cart.svg" />
                  <div className="cart-quantity" data-cart-count="">
                    0
                  </div>
                </a>
                <div aria-hidden="true" className="cart-modal" data-cart-modal="">
                  <div aria-label="Your cart" className="cart-container" role="dialog">
                    <div className="cart-header">
                      <h5 className="cart-heading">
                        Your Cart
                      </h5>
                      <a aria-label="Close cart" className="close-button inline-block" data-cart-close="" role="button">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
                          <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6">
                          </path>
                        </svg>
                      </a>
                    </div>
                    <ul className="cart-list" data-cart-list="">
                    </ul>
                    <div className="cart-empty" data-cart-empty="">
                      No items found.
                    </div>
                    <div className="cart-footer" data-cart-footer="" hidden>
                      <div className="cart-subtotal-row">
                        <div>
                          Subtotal
                        </div>
                        <div data-cart-subtotal="">
                          $0.00
                        </div>
                      </div>
                      <a className="checkout-button" href="/checkout">
                        Continue to Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hamburger-menu open">
                <div className="hamburger-text">
                  Menu
                </div>
                <img alt="Hamburger Icon" className="hamburger-icon v1" loading="lazy" src="/assets/images/black-menu.svg" />
                <img alt="Hamburger Icon" className="hamburger-icon v2" loading="lazy" src="/assets/images/Hamburger.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="open-menu">
        <div className="nav-menu-wrapper">
          <div className="close-menu-wrap">
            <div className="nav-menu-logo-box">
              <img alt="" className="nav-menu-logo" loading="lazy" src="/assets/images/Nuvora-Black.svg" />
            </div>
            <div className="hamburger-menu close">
              <div className="hamburger-text-two">
                &#123;CLOSE&#125;
              </div>
            </div>
          </div>
          <div className="nav-menu-all-wrap">
            <div className="nav-menu-wrap">
              <div className="single-nav-menu">
                <a aria-current="page" className="nav-link-wrap inline-block" href="/">
                  <div className="nav-link-texts">
                    <div className="nav-link-text">
                      HOME
                    </div>
                    <div className="nav-link-text">
                      HOME
                    </div>
                  </div>
                </a>
                <div className="nav-border">
                  <div className="blog-card-divider">
                  </div>
                  <div className="blog-card-divider-hover">
                  </div>
                </div>
              </div>
              <div className="single-nav-menu">
                <a className="nav-link-wrap inline-block" href="/about">
                  <div className="nav-link-texts">
                    <div className="nav-link-text">
                      ABOUT
                    </div>
                    <div className="nav-link-text">
                      ABOUT
                    </div>
                  </div>
                </a>
                <div className="nav-border">
                  <div className="blog-card-divider">
                  </div>
                  <div className="blog-card-divider-hover">
                  </div>
                </div>
              </div>
              <div className="single-nav-menu">
                <a className="nav-link-wrap inline-block" href="/project">
                  <div className="nav-link-texts">
                    <div className="nav-link-text">
                      PROJECTS
                    </div>
                    <div className="nav-link-text">
                      PROJECTS
                    </div>
                  </div>
                </a>
                <div className="nav-border">
                  <div className="blog-card-divider">
                  </div>
                  <div className="blog-card-divider-hover">
                  </div>
                </div>
              </div>
              <div className="single-nav-menu">
                <a className="nav-link-wrap inline-block" href="/blog">
                  <div className="nav-link-texts">
                    <div className="nav-link-text">
                      BLOG
                    </div>
                    <div className="nav-link-text">
                      BLOG
                    </div>
                  </div>
                </a>
                <div className="nav-border">
                  <div className="blog-card-divider">
                  </div>
                  <div className="blog-card-divider-hover">
                  </div>
                </div>
              </div>
              <div className="single-nav-menu">
                <a className="nav-link-wrap inline-block" href="/contact">
                  <div className="nav-link-texts">
                    <div className="nav-link-text">
                      CONTACT
                    </div>
                    <div className="nav-link-text">
                      CONTACT
                    </div>
                  </div>
                </a>
                <div className="nav-border">
                  <div className="blog-card-divider">
                  </div>
                  <div className="blog-card-divider-hover">
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-image-wrap">
              <div className="nav-social-wrap">
                <div className="small-text">
                  RealEstate Company.
                </div>
                <div className="nav-social-icon-wrap">
                  <a className="nav-social-icon-box inline-block" href="https://www.instagram.com/">
                    <img alt="" className="nav-social-icon" loading="lazy" src="/assets/images/iconoir_instagram.svg" />
                  </a>
                  <a className="nav-social-icon-box inline-block" href="https://dribbble.com/">
                    <img alt="" className="nav-social-icon" loading="lazy" src="/assets/images/iconoir_dribbble.svg" />
                  </a>
                </div>
              </div>
              <div className="nav-image-box">
                <img alt="Modern two-story house with large glass windows, flat roofs, and a spacious green lawn with stepping stones." className="nav-image" loading="lazy" sizes="(max-width: 1140px) 100vw, 1140px, 100vw" src="/assets/images/nav-img.webp" srcSet="/assets/images/nav-img-p-500.webp 500w, /assets/images/nav-img-p-800.webp 800w, /assets/images/nav-img-p-1080.webp 1080w, /assets/images/nav-img.webp 1140w" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
