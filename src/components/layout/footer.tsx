// Nuvora template — shared site footer.
// Markup mirrors the original design; styling comes from /assets/css/styles.css.
export function Footer() {
  return (
      <section className="section footer">
              <div className="plan-divider footer">
              </div>
              <div className="container">
                <div className="footer-wrap">
                  <div className="footer-top-flex">
                    <div className="footer-about-box">
                      <div className="footer-logo-wrap">
                        <a aria-current="page" className="footer-logo inline-block" href="/">
                          <span className="site-brand footer-site-brand">
                            <img alt="" className="site-brand-image" decoding="async" height="42" loading="lazy" src="/assets/logo.jpeg" width="42" />
                            <span className="site-brand-text">Interior Blinds &amp; Shutters</span>
                          </span>
                        </a>
                        <div className="footer-about-box">
                          <div className="text-small">
                            Every property we design or represent is a one-of-a-kind expression of our client’s vision.
                          </div>
                        </div>
                      </div>
                      <div className="footer-contact-wrap">
                        <div className="small-text">
                          CONTACT
                        </div>
                        <a className="footer-contact-link" href="tel:+44789587369">
                          +44 789 587 369
                        </a>
                      </div>
                      <div className="plan-divider">
                      </div>
                      <div className="footer-social-wrap">
                        <div className="small-text">
                          SOCIAL
                        </div>
                        <div className="footer-social-box">
                          <a className="footer-social-link inline-block" href="https://www.instagram.com/">
                            <img alt="" className="social-link-icon" loading="lazy" src="/assets/images/instagram.svg" />
                          </a>
                          <a className="footer-social-link inline-block" href="https://dribbble.com/">
                            <img alt="" className="social-link-icon" loading="lazy" src="/assets/images/dribbble.svg" />
                          </a>
                          <a className="footer-social-link inline-block" href="https://www.linkedin.com/">
                            <img alt="" className="social-link-icon" loading="lazy" src="/assets/images/linkedin.svg" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="footer-top-righ-box">
                      <div className="footer-wedget-wrap">
                        <div className="footer-single-widget">
                          <div className="footer-wized-title">
                            MAIN PAGES
                          </div>
                          <a aria-current="page" className="footer-menu" href="/">
                            Home
                          </a>
                          <a className="footer-menu" href="/about">
                            About
                          </a>
                          <a className="footer-menu" href="/project">
                            Projects
                          </a>
                          <a className="footer-menu" href="/pricing">
                            Pricing
                          </a>
                          <a className="footer-menu" href="/blog">
                            Blogs
                          </a>
                        </div>
                        <div className="footer-single-widget">
                          <div className="footer-wized-title">
                            INNER PAGES
                          </div>
                          <a className="footer-menu" href="/project/metronest-reality">
                            Project Single
                          </a>
                          <a className="footer-menu" href="/service/home-staging-marketing">
                            Service Single
                          </a>
                          <a className="footer-menu" href="/product/basic">
                            Pricing Single
                          </a>
                          <a className="footer-menu" href="/blog/how-design-trends-shape-buyer-decisions">
                            Blog Single
                          </a>
                          <a className="footer-menu" href="/contact">
                            CONTACT
                          </a>
                          <a className="footer-menu" href="/404">
                            ERROR
                          </a>
                        </div>
                        <div className="footer-single-widget">
                          <div className="footer-wized-title">
                            UTILITY PAGES
                          </div>
                          <a className="footer-menu" href="/style-guide">
                            Styleguide
                          </a>
                          <a className="footer-menu" href="/401">
                            Pass Protected
                          </a>
                          <a className="footer-menu" href="/changelog">
                            Change log
                          </a>
                          <a className="footer-menu" href="/license">
                            License
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-medium-box">
                  <div className="footer-medium-flex">
                    <h2 className="footer-title">
                      Let's build your
                    </h2>
                    <div className="footer-title-flex">
                      <h2 className="footer-title">
                        DR
                      </h2>
                      <a className="get-box inline-block" href="/contact">
                        <div className="sami-description">
                          GET CONSULTATION
                        </div>
                      </a>
                      <h2 className="footer-title">
                        JSE
                      </h2>
                    </div>
                    <h2 className="italic">
                      with<br /> Interior Blinds & Shutters
                    </h2>
                  </div>
                  <div className="footer-image-box">
                    <img alt="" className="footer-image" loading="lazy" sizes="(max-width: 1050px) 100vw, 1050px, 100vw" src="/assets/images/footer-image.webp" srcSet="/assets/images/footer-image-p-500.webp 500w, /assets/images/footer-image-p-800.webp 800w, /assets/images/footer-image.webp 1050w" />
                    <a className="footer-lightbox-link inline-block" data-lightbox="video" data-video-id="setu9Ir1miY">
                      <div className="footer-video-button">
                        <img alt="" className="footer-video-icon" loading="lazy" src="/assets/images/video-logo.svg" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-bottom-box">
                <div className="footer-bottom-content">
                  © Made By &nbsp;
                  <a className="copyright-link" href="https://wrapmarket.com/" rel="noopener" target="_blank">
                    GO2X
                  </a>

                  .

                  <a className="copyright-link" href="/license">
                    Agency&nbsp;
                  </a>
                  | Powered By
                </div>
              </div>
            </section>
  );
}
