// Nuvora template — shared site header (navbar, cart drawer, full-screen menu).
// Markup mirrors the original design; styling comes from /assets/css/styles.css.
"use client";

import { usePathname } from "next/navigation";


export function Header() {
  // The adaptive logo: the dark home hero keeps the white logo (.v1); every other
  // (light-background) page adds `nav-on-light` so the black logo (.v2) shows.
  const pathname = usePathname();
  const navbarClass = pathname === "/" ? "navbar" : "navbar nav-on-light";
  const quoteHref = pathname === "/" ? "#home-quote-section" : "/#home-quote-section";
  return (
    <div className="header">
      <div className={navbarClass}>
        <div className="wf-layout-blockcontainer container">
          <div className="navbar-wrapper">
            <div className="nav-content-wrap">
              <a aria-current="page" className="nav-logo-wrap inline-block" href="/">
                <span className="site-brand header-site-brand">
                  <img alt="" className="site-brand-image" decoding="async" height="36" src="/assets/logo.jpeg" width="36" />
                  <span className="site-brand-text">Interior Blinds &amp; Shutters</span>
                </span>
              </a>
              <div className="nav-item-wrap">
                <div className="nav-main-menu-wrap">
                  <a aria-current="page" className="menu-link" href="/">
                    Home
                  </a>
                  <a className="menu-link" href={quoteHref}>
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-flex">
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
              <span className="site-brand menu-site-brand">
                <img alt="" className="site-brand-image" decoding="async" height="42" src="/assets/logo.jpeg" width="42" />
                <span className="site-brand-text">Interior Blinds &amp; Shutters</span>
              </span>
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
                <a className="nav-link-wrap inline-block" href={quoteHref}>
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
                  Interior Blinds &amp; Shutters.
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
