import { HeroQuoteCard } from "@/components/ui/hero-quote-card";

export default function HomePage() {
  return (
    <>
      <section className="section hero-background">
              <div className="container">
                <div className="hero-wrap">
                  <div className="inner-title-box hero reveal">
                    <h1 className="hero-white-title">
                      Nature inspired living spaces for a
                      <span className="italic none">
                        balanced
                      </span>
                      <span className="italic none">
                        beautiful  Life.
                      </span>
                    </h1>
                  </div>
                  <div className="hero-flex-box">
                    <div className="hero-left-box reveal">
                      <a className="primary-button inline-block" href="/contact">
                        <div className="primary-button-text-wrap">
                          <div className="primary-button-text">
                            GET IN TOUCH
                          </div>
                          <div className="primary-button-hover-text">
                            GET IN TOUCH
                          </div>
                        </div>
                      </a>
                      <div className="scroll-wrap">
                        <div className="description white">
                          01/2025
                        </div>
                        <a className="description white" href="#about">
                          SCROLL DOWN
                        </a>
                      </div>
                    </div>
                    <div className="hero-right-box reveal">
                      <div className="hero-single-card">
                        <div className="hero-card-top-one-box">
                          <div className="hero-feature-box">
                            <div className="hero-feature-icon-box">
                              <img alt="" className="hero-icon" loading="lazy" src="/assets/images/hero-right.svg" />
                            </div>
                            <div className="small-text-regular all-caps">
                              Feature
                            </div>
                          </div>
                          <img alt="" className="hero-card-dot" loading="lazy" src="/assets/images/Dot.svg" />
                        </div>
                        <div className="hero-card-image-box">
                          <img alt="" className="hero-video-thumbnail" loading="eager" sizes="(max-width: 676px) 100vw, 676px" src="/assets/images/Hero-Video-Thumbnail.webp" srcSet="/assets/images/Hero-Video-Thumbnail-p-500.webp 500w, /assets/images/Hero-Video-Thumbnail.webp 676w" />
                          <div className="hero-card-video-wrap">
                            <a className="inline-block" data-lightbox="video" data-video-id="setu9Ir1miY">
                              <div className="hero-video-button">
                                <img alt="" className="hero-button-icon" loading="lazy" src="/assets/images/solar_play-bold.svg" />
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="hero-review-box">
                          <a className="leave-a-review" href="/project">
                            VIEW OUR WORK
                          </a>
                        </div>
                      </div>
                      <div className="hero-card-two">
                        <HeroQuoteCard />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="visual-wrap">
                <img alt="" className="visual" loading="lazy" sizes="(max-width: 5760px) 100vw, 5760px" src="/assets/images/Hero-Background-Image.webp" srcSet="/assets/images/Hero-Background-Image-p-500.webp 500w, /assets/images/Hero-Background-Image-p-800.webp 800w, /assets/images/Hero-Background-Image-p-1080.webp 1080w, /assets/images/Hero-Background-Image-p-1600.webp 1600w, /assets/images/Hero-Background-Image-p-2000.webp 2000w, /assets/images/Hero-Background-Image-p-2600.webp 2600w, /assets/images/Hero-Background-Image-p-3200.webp 3200w, /assets/images/Hero-Background-Image.webp 5760w" />
                <div className="visual-overlay">
                </div>
              </div>
            </section>
            <section className="section hero-about" id="about">
              <div className="container">
                <div className="hero-about-wrap">
                  <div className="hero-about-left-box">
                    <div className="hero-about-icon-box reveal">
                      <img alt="" className="hero-about-icon" loading="lazy" src="/assets/images/about-right.svg" />
                    </div>
                    <div className="divider-about one">
                    </div>
                    <div className="hero-about-left">
                      <h2 className="hero-about-text reveal">
                        WE BEGAN OUR JOURNEY BY DESIGNING BESPOKE STABLES COUNTRYSIDE RETREATS FOR PRIVATE CLIENTS WHO SHARED OUR LOVE FOR DESIGN.
                      </h2>
                      <div className="hero-about-button reveal">
                        <a className="primary-button inline-block" href="/about">
                          <div className="primary-button-text-wrap">
                            <div className="primary-button-text">
                              ABOUT US
                            </div>
                            <div className="primary-button-hover-text">
                              ABOUT US
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="divider-about two">
                    </div>
                  </div>
                  <div className="hero-about-right">
                    <div className="hero-about-right-text">
                      <p className="secondary-text-regular is-top reveal">
                        <span className="secondary-text">
                          At Nuvora
                        </span>
                        , we go beyond traditional real estate practices. Our process is rooted in collaboration and co-creation—ensuring that each project is thoughtfully tailored to reflect the emotional and practical needs of our clients and their lifestyle, including those shared with their equine companions.
                      </p>
                      <p className="secondary-text-regular reveal">
                        Every property we design or represent is a one-of-a-kind expression of our client’s vision. From serene countryside estates to purpose-built equestrian retreats, we are committed to crafting distinctive.
                      </p>
                    </div>
                    <div className="hero-about-image-box">
                      <img alt="" loading="lazy" sizes="(max-width: 3220px) 100vw, 3220px" src="/assets/images/About-Image.webp" srcSet="/assets/images/About-Image-p-500.webp 500w, /assets/images/About-Image-p-800.webp 800w, /assets/images/About-Image-p-1080.webp 1080w, /assets/images/About-Image-p-1600.webp 1600w, /assets/images/About-Image-p-2000.webp 2000w, /assets/images/About-Image-p-2600.webp 2600w, /assets/images/About-Image-p-3200.webp 3200w, /assets/images/About-Image.webp 3220w" />
                      <div className="dashbord-image-overlay">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <div className="inner-wrap">
                  <div className="inner-title-wrap flex">
                    <div className="inner-title-box inner-project reveal">
                      <h2 className="inner-title">
                        These aren’t just
                        <span className="italic">
                          projects
                        </span>
                      </h2>
                    </div>
                    <div className="inner-button-box reveal">
                      <a className="second-button inline-block" href="/project">
                        <div className="project-button-content">
                          <div className="primary-button-text-wrap">
                            <div className="primary-button-text">
                              VIEW ALL
                            </div>
                            <div className="primary-button-hover-text">
                              VIEW ALL
                            </div>
                          </div>
                          <div className="primary-button-icon-box">
                            <div className="primary-button-icon-wrap">
                              <img alt="" className="primary-button-icon" loading="lazy" src="/assets/images/result.svg" />
                              <img alt="" className="primary-button-hover-icon" loading="lazy" src="/assets/images/result.svg" />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="inner-project-wrap is-desktop">
                    <div>
                      <div className="project-collection-list" role="list">
                        <div role="listitem">
                          <div className="project-single-card reveal">
                            <div className="project-image-box">
                              <img alt="Project Image" className="project-image" loading="lazy" src="/assets/images/693946e15934a20a63cf89bb_Project-Image--2-.webp" />
                              <a className="view-project inline-block" href="/project/bay-heights">
                                <img alt="" className="view-project-image" loading="lazy" src="/assets/images/arrow-black-right.svg" />
                              </a>
                            </div>
                            <div className="project-card-content-wrap">
                              <div className="project-card-number-box">
                                <p className="project-card-number text-secondary">
                                  0/
                                </p>
                                <div className="text-dark">
                                  <p className="project-card-number">
                                    1
                                  </p>
                                </div>
                              </div>
                              <div className="project-card-content-box">
                                <a aria-label="Project Link" className="project-card-title-box inline-block" href="/project/bay-heights">
                                  <h3 className="project-card-title">
                                    BAY HEIGHTS
                                  </h3>
                                </a>
                                <p className="secondary-text-regular">
                                  6111 BurnHarvest Ave 19
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div role="listitem">
                          <div className="project-single-card reveal">
                            <div className="project-image-box">
                              <img alt="Project Image" className="project-image" loading="lazy" src="/assets/images/693946d6d4ea504d366dfc6b_Project-Image--1-.webp" />
                              <a className="view-project inline-block" href="/project/grove-housin">
                                <img alt="" className="view-project-image" loading="lazy" src="/assets/images/arrow-black-right.svg" />
                              </a>
                            </div>
                            <div className="project-card-content-wrap">
                              <div className="project-card-number-box">
                                <p className="project-card-number text-secondary">
                                  0/
                                </p>
                                <div className="text-dark">
                                  <p className="project-card-number">
                                    2
                                  </p>
                                </div>
                              </div>
                              <div className="project-card-content-box">
                                <a aria-label="Project Link" className="project-card-title-box inline-block" href="/project/grove-housin">
                                  <h3 className="project-card-title">
                                    GROVE HOUSING
                                  </h3>
                                </a>
                                <p className="secondary-text-regular">
                                  6111 BurnHarvest Ave 19
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div role="listitem">
                          <div className="project-single-card reveal">
                            <div className="project-image-box">
                              <img alt="Project Image" className="project-image" loading="lazy" src="/assets/images/693946c7167259b175db2866_Project-Image.webp" />
                              <a className="view-project inline-block" href="/project/skyline-vista">
                                <img alt="" className="view-project-image" loading="lazy" src="/assets/images/arrow-black-right.svg" />
                              </a>
                            </div>
                            <div className="project-card-content-wrap">
                              <div className="project-card-number-box">
                                <p className="project-card-number text-secondary">
                                  0/
                                </p>
                                <div className="text-dark">
                                  <p className="project-card-number">
                                    3
                                  </p>
                                </div>
                              </div>
                              <div className="project-card-content-box">
                                <a aria-label="Project Link" className="project-card-title-box inline-block" href="/project/skyline-vista">
                                  <h3 className="project-card-title">
                                    SKYLINE VISTA
                                  </h3>
                                </a>
                                <p className="secondary-text-regular">
                                  6111 BurnHarvest Ave 19
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inner-project-wrap is-tablet">
                  </div>
                </div>
              </div>
            </section>
            <section className="section achievements">
              <div className="container">
                <div className="achievements-wrap">
                  <div className="achievement-text-block">
                    <div className="inner-title-box inner-achievements reveal">
                      <h2 className="inner-title white">
                        TURNING AMBITION TO SUCCESS and
                        <span className="italic">
                          achievements
                        </span>
                      </h2>
                    </div>
                    <div className="achievements-description-box reveal">
                      <p className="secondary-text-regular">
                        Every property we design or represent is a one-of-a-kind expression of our client’s vision. From serene countryside estates to purpose-built equestrian retreats, we are committed to crafting distinctive.
                      </p>
                      <div className="inner-button-box reveal">
                        <a className="primary-button inline-block" href="/contact">
                          <div className="primary-button-text-wrap">
                            <div className="primary-button-text">
                              GET CONSULTATION
                            </div>
                            <div className="primary-button-hover-text">
                              GET CONSULTATION
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="achievements-grid" role="list">
                      <div className="collection-item" role="listitem">
                        <a className="achievements-card inline-block reveal" href="/project/bay-heights">
                          <div className="achievements-card-image-box">
                            <img alt="Achievement Image" className="achievements-card-image" loading="lazy" src="/assets/images/693946e15934a20a63cf89bb_Project-Image--2-.webp" />
                          </div>
                          <div className="achievements-content-box">
                            <div className="project-card-number-box">
                              <p className="project-card-number text-secondary">
                                0/
                              </p>
                              <div className="text-dark">
                                <p className="project-card-number">
                                  1
                                </p>
                              </div>
                            </div>
                            <div className="achievement-card-description">
                              <h3 className="achievements-card-name">
                                BAY HEIGHTS
                              </h3>
                              <div className="description achievements">
                                Wake up to sea breezes and sunset views in a gated
                              </div>
                            </div>
                            <div className="secondary-text-regular text-primary">
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="collection-item" role="listitem">
                        <a className="achievements-card inline-block reveal" href="/project/grove-housin">
                          <div className="achievements-card-image-box">
                            <img alt="Achievement Image" className="achievements-card-image" loading="lazy" src="/assets/images/693946d6d4ea504d366dfc6b_Project-Image--1-.webp" />
                          </div>
                          <div className="achievements-content-box">
                            <div className="project-card-number-box">
                              <p className="project-card-number text-secondary">
                                0/
                              </p>
                              <div className="text-dark">
                                <p className="project-card-number">
                                  2
                                </p>
                              </div>
                            </div>
                            <div className="achievement-card-description">
                              <h3 className="achievements-card-name">
                                GROVE HOUSING
                              </h3>
                              <div className="description achievements">
                                Nature-Inspired Living and Minutes from the City
                              </div>
                            </div>
                            <div className="secondary-text-regular text-primary">
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="collection-item" role="listitem">
                        <a className="achievements-card inline-block reveal" href="/project/havenoint-living">
                          <div className="achievements-card-image-box">
                            <img alt="Achievement Image" className="achievements-card-image" loading="lazy" src="/assets/images/6852e2c07dac4baf5afaef22_project-image-8.jpg" />
                          </div>
                          <div className="achievements-content-box">
                            <div className="project-card-number-box">
                              <p className="project-card-number text-secondary">
                                0/
                              </p>
                              <div className="text-dark">
                                <p className="project-card-number">
                                  3
                                </p>
                              </div>
                            </div>
                            <div className="achievement-card-description">
                              <h3 className="achievements-card-name">
                                HAVENOINT LIVING
                              </h3>
                              <div className="description achievements">
                                A luxury residential platform curated homes and serene getaway estates.
                              </div>
                            </div>
                            <div className="secondary-text-regular text-primary">
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="visual-wrap">
                <img alt="" className="visual" loading="lazy" sizes="(max-width: 5760px) 100vw, 5760px, 100vw" src="/assets/images/Achievement-Image.webp" srcSet="/assets/images/Achievement-Image-p-500.webp 500w, /assets/images/Achievement-Image-p-800.webp 800w, /assets/images/Achievement-Image-p-1080.webp 1080w, /assets/images/Achievement-Image-p-1600.webp 1600w, /assets/images/Achievement-Image-p-2000.webp 2000w, /assets/images/Achievement-Image-p-2600.webp 2600w, /assets/images/Achievement-Image-p-3200.webp 3200w, /assets/images/Achievement-Image.webp 5760w" />
                <div className="visual-overlay">
                </div>
              </div>
            </section>
            <section className="section full-padding-bottom">
              <div className="container">
                <div className="themselves-wrap">
                  <div className="themselves-left-box">
                    <div className="inner-title-wrap themselves">
                      <div className="inner-title-box is-themselves reveal">
                        <h2 className="inner-title all-caps">
                          Success Stories That Speak for
                          <span className="italic">
                            Themselves
                          </span>
                        </h2>
                      </div>
                      <div className="themselves-button-box reveal">
                        <a className="primary-button inline-block" href="/contact">
                          <div className="primary-button-text-wrap">
                            <div className="primary-button-text">
                              GET IN TOUCH
                            </div>
                            <div className="primary-button-hover-text">
                              GET IN TOUCH
                            </div>
                          </div>
                        </a>
                        <div className="secondary-text-regular">
                          Every property we design represent as one-of-a-kind expression of our client’s vision.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="themselves-right-box">
                    <div className="themselves-counter-wrap">
                      <div className="themselves-counter-single-box reveal">
                        <div className="counter-single-box reveal">
                          <div className="counter-description-box">
                            <div className="small-text counter">
                              YEARS OF EXPERIENCE
                            </div>
                          </div>
                          <div className="counter-number-wrap">
                            <div className="counter-digit-wrap">
                              <div className="counter-digit-item first">
                                <p className="counter-number">
                                  1
                                </p>
                                <p className="counter-number">
                                  2
                                </p>
                                <p className="counter-number">
                                  3
                                </p>
                                <p className="counter-number">
                                  4
                                </p>
                                <p className="counter-number">
                                  5
                                </p>
                                <p className="counter-number">
                                  6
                                </p>
                                <p className="counter-number">
                                  7
                                </p>
                                <p className="counter-number">
                                  8
                                </p>
                              </div>
                              <div className="counter-digit-item second">
                                <p className="counter-number">
                                  0
                                </p>
                                <p className="counter-number">
                                  2
                                </p>
                                <p className="counter-number">
                                  1
                                </p>
                                <p className="counter-number">
                                  9
                                </p>
                                <p className="counter-number">
                                  8
                                </p>
                                <p className="counter-number">
                                  7
                                </p>
                                <p className="counter-number">
                                  6
                                </p>
                                <p className="counter-number">
                                  5
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="themselves-counter-single-box reveal">
                        <div className="counter-single-box reveal">
                          <div className="counter-description-box">
                            <div className="small-text counter">
                              PROJECTSCOMPLETED
                            </div>
                          </div>
                          <div className="counter-number-wrap">
                            <div className="counter-digit-wrap">
                              <div className="counter-digit-item first">
                                <p className="counter-number">
                                  3
                                </p>
                                <p className="counter-number">
                                  2
                                </p>
                                <p className="counter-number">
                                  3
                                </p>
                                <p className="counter-number">
                                  4
                                </p>
                                <p className="counter-number">
                                  5
                                </p>
                                <p className="counter-number">
                                  6
                                </p>
                                <p className="counter-number">
                                  7
                                </p>
                                <p className="counter-number">
                                  8
                                </p>
                              </div>
                              <div className="counter-digit-item second">
                                <p className="counter-number">
                                  0
                                </p>
                                <p className="counter-number">
                                  2
                                </p>
                                <p className="counter-number">
                                  1
                                </p>
                                <p className="counter-number">
                                  9
                                </p>
                                <p className="counter-number">
                                  8
                                </p>
                                <p className="counter-number">
                                  7
                                </p>
                                <p className="counter-number">
                                  6
                                </p>
                                <p className="counter-number">
                                  5
                                </p>
                              </div>
                              <div className="counter-digit-item first">
                                <p className="counter-number">
                                  0
                                </p>
                                <p className="counter-number">
                                  2
                                </p>
                                <p className="counter-number">
                                  3
                                </p>
                                <p className="counter-number">
                                  4
                                </p>
                                <p className="counter-number">
                                  5
                                </p>
                                <p className="counter-number">
                                  6
                                </p>
                                <p className="counter-number">
                                  7
                                </p>
                                <p className="counter-number">
                                  8
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="themselves-counter-single-box reveal">
                        <div className="counter-single-box reveal">
                          <div className="counter-description-box">
                            <div className="small-text counter">
                              AWARDS HAVE RECEIVED
                            </div>
                          </div>
                          <div className="counter-number-wrap">
                            <div className="counter-digit-wrap">
                              <div className="counter-digit-item first">
                                <p className="counter-number">
                                  1
                                </p>
                                <p className="counter-number">
                                  2
                                </p>
                                <p className="counter-number">
                                  3
                                </p>
                                <p className="counter-number">
                                  4
                                </p>
                                <p className="counter-number">
                                  5
                                </p>
                                <p className="counter-number">
                                  6
                                </p>
                                <p className="counter-number">
                                  7
                                </p>
                                <p className="counter-number">
                                  8
                                </p>
                              </div>
                              <div className="counter-digit-item second">
                                <p className="counter-number">
                                  4
                                </p>
                                <p className="counter-number">
                                  2
                                </p>
                                <p className="counter-number">
                                  1
                                </p>
                                <p className="counter-number">
                                  9
                                </p>
                                <p className="counter-number">
                                  8
                                </p>
                                <p className="counter-number">
                                  7
                                </p>
                                <p className="counter-number">
                                  6
                                </p>
                                <p className="counter-number">
                                  5
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="themselves-counter-single-box reveal">
                        <div className="counter-single-box reveal">
                          <div className="counter-description-box">
                            <div className="small-text counter">
                              SUCCESSFUL PARTNERSHIP
                            </div>
                          </div>
                          <div className="counter-number-wrap">
                            <div className="counter-digit-wrap">
                              <div className="counter-digit-item first">
                                <p className="counter-number">
                                  5
                                </p>
                                <p className="counter-number">
                                  2
                                </p>
                                <p className="counter-number">
                                  3
                                </p>
                                <p className="counter-number">
                                  4
                                </p>
                                <p className="counter-number">
                                  5
                                </p>
                                <p className="counter-number">
                                  6
                                </p>
                                <p className="counter-number">
                                  7
                                </p>
                                <p className="counter-number">
                                  8
                                </p>
                              </div>
                              <div className="counter-digit-item second">
                                <p className="counter-number">
                                  3
                                </p>
                                <p className="counter-number">
                                  2
                                </p>
                                <p className="counter-number">
                                  1
                                </p>
                                <p className="counter-number">
                                  9
                                </p>
                                <p className="counter-number">
                                  8
                                </p>
                                <p className="counter-number">
                                  7
                                </p>
                                <p className="counter-number">
                                  6
                                </p>
                                <p className="counter-number">
                                  5
                                </p>
                              </div>
                              <div className="counter-digit-item first">
                                <p className="counter-number">
                                  2
                                </p>
                                <p className="counter-number">
                                  2
                                </p>
                                <p className="counter-number">
                                  3
                                </p>
                                <p className="counter-number">
                                  4
                                </p>
                                <p className="counter-number">
                                  5
                                </p>
                                <p className="counter-number">
                                  6
                                </p>
                                <p className="counter-number">
                                  7
                                </p>
                                <p className="counter-number">
                                  8
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section testimonial">
              <div className="container">
                <div className="testimonial-section-title reveal">
                  <h2 className="inner-title is-testimonial">
                    Testimonials
                    <span className="italic">
                      From Our Clients
                    </span>
                  </h2>
                  <p>
                    Real stories of growth and collaboration from our partners.
                  </p>
                </div>
                <div className="testimonial-tabs tabs reveal">
                  <div className="testimonial-tabs-menu tab-menu">
                    <a aria-current="page" className="testimonial-tab-link inline-block tab-link" data-tab="Tab 1">
                      <img alt="" className="testimonial-author-image" loading="lazy" sizes="100vw" src="/assets/images/Testimonial-Author-2.webp" srcSet="/assets/images/Testimonial-Author-2-p-500.webp 500w, /assets/images/Testimonial-Author-2-p-800.webp 800w, /assets/images/Testimonial-Author-2.webp 1044w" />
                    </a>
                    <a className="testimonial-tab-link inline-block tab-link" data-tab="Tab 2">
                      <img alt="" className="testimonial-author-image" loading="lazy" sizes="100vw" src="/assets/images/Testimonial-Author.webp" srcSet="/assets/images/Testimonial-Author-p-500.webp 500w, /assets/images/Testimonial-Author-p-800.webp 800w, /assets/images/Testimonial-Author.webp 1044w" />
                    </a>
                    <a className="testimonial-tab-link inline-block tab-link" data-tab="Tab 3">
                      <img alt="" className="testimonial-author-image" loading="lazy" sizes="100vw" src="/assets/images/Testimonial-Author-1.webp" srcSet="/assets/images/Testimonial-Author-1-p-500.webp 500w, /assets/images/Testimonial-Author-1-p-800.webp 800w, /assets/images/Testimonial-Author-1.webp 1044w" />
                    </a>
                  </div>
                  <div className="testimonial-tabs-content tab-content">
                    <div className="testimonial-tab-pane tab-pane is-active" data-tab="Tab 1">
                      <div className="testimonial-tab-content">
                        <img alt="" className="testimonial-quote-icon" loading="lazy" src="/assets/images/Quote-Icon.svg" />
                        <div className="testimonial-text-block">
                          <div className="testimonial-text-wrapper">
                            <p className="testimonial-text-large">
                              “The collaboration exceeded our expectations, leading to innovative solutions that set us apart in the market. I couldn’t ask for a better partnership!”
                            </p>
                            <p className="testimonial-text-small">
                              Their insights were invaluable, driving significant improvements in our customer engagement and sales metrics over a short period.
                            </p>
                          </div>
                          <div className="testimonial-author-block">
                            <img alt="" className="testimonial-author" height="48" loading="lazy" sizes="(max-width: 479px) 100vw, 48px" src="/assets/images/Testimonial-Author-2.webp" srcSet="/assets/images/Testimonial-Author-2-p-500.webp 500w, /assets/images/Testimonial-Author-2-p-800.webp 800w, /assets/images/Testimonial-Author-2.webp 1044w" width="48" />
                            <div className="testimonial-author-info">
                              <p className="testimonial-text-small">
                                Maria Gonzalez
                              </p>
                              <p className="testimonial-text-xsmall">
                                Chief Marketing Officer, EcoFashion Co.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-tab-pane tab-pane" data-tab="Tab 2">
                      <div className="testimonial-tab-content">
                        <img alt="" className="testimonial-quote-icon" loading="lazy" src="/assets/images/Quote-Icon.svg" />
                        <div className="testimonial-text-block">
                          <div className="testimonial-text-wrapper">
                            <p className="testimonial-text-large">
                              “Our brand really took off thanks to some cool strategies and awesome execution. I'm really impressed with how everything turned out and how smooth the partnership was!”
                            </p>
                            <p className="testimonial-text-small">
                              Working with them was a breeze, and the strategies they shared helped us grow for real in just a few months.
                            </p>
                          </div>
                          <div className="testimonial-author-block">
                            <img alt="" className="testimonial-author" height="48" loading="lazy" sizes="100vw" src="/assets/images/Testimonial-Author.webp" srcSet="/assets/images/Testimonial-Author-p-500.webp 500w, /assets/images/Testimonial-Author-p-800.webp 800w, /assets/images/Testimonial-Author.webp 1044w" width="48" />
                            <div className="testimonial-author-info">
                              <p className="testimonial-text-small">
                                Anantaraya Putra
                              </p>
                              <p className="testimonial-text-xsmall">
                                Director, Jambi Retail Group
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-tab-pane tab-pane" data-tab="Tab 3">
                      <div className="testimonial-tab-content">
                        <img alt="" className="testimonial-quote-icon" loading="lazy" src="/assets/images/Quote-Icon.svg" />
                        <div className="testimonial-text-block">
                          <div className="testimonial-text-wrapper">
                            <p className="testimonial-text-large">
                              “Their approach was refreshing and transformative, paving the way for new opportunities that we hadn't considered before!”
                            </p>
                            <p className="testimonial-text-small">
                              The support and expertise provided were instrumental in enhancing our brand visibility and outreach in the industry.
                            </p>
                          </div>
                          <div className="testimonial-author-block">
                            <img alt="" className="testimonial-author" height="48" loading="lazy" sizes="100vw" src="/assets/images/Testimonial-Author-1.webp" srcSet="/assets/images/Testimonial-Author-1-p-500.webp 500w, /assets/images/Testimonial-Author-1-p-800.webp 800w, /assets/images/Testimonial-Author-1.webp 1044w" width="48" />
                            <div className="testimonial-author-info">
                              <p className="testimonial-text-small">
                                James Lee
                              </p>
                              <p className="testimonial-text-xsmall">
                                CEO, Tech Innovations Inc.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section benefit">
              <div className="container">
                <div className="benefit-card-block">
                  <div className="benefit-card one">
                    <h2 className="benefit-card-title">
                      Verified Listings!
                    </h2>
                    <div className="benefit-card-text">
                      Tap into our know-how and negotiation hacks to make smart choices and score awesome results.
                    </div>
                  </div>
                  <div className="benefit-card two">
                    <h2 className="benefit-card-title">
                      Expert Help!
                    </h2>
                    <div className="benefit-card-text">
                      Use our market savvy and negotiation tricks to make smart decisions and snag the best outcomes.
                    </div>
                  </div>
                  <div className="benefit-card three">
                    <h2 className="benefit-card-title">
                      Pro Support!
                    </h2>
                    <div className="benefit-card-text">
                      Get the right support and handy negotiation tips to help you make smart choices and achieve great results.
                    </div>
                  </div>
                  <div className="benefit-card four">
                    <h2 className="benefit-card-title">
                      Trusted Know-How!
                    </h2>
                    <div className="benefit-card-text">
                      Leverage our industry insights and negotiation skills to make smart choices and get amazing results.
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section full-padding-top">
              <div className="container">
                <div className="results-flex">
                  <div className="result-feft-box">
                    <div className="inner-title-wrap results">
                      <div className="inner-title-box is-result reveal">
                        <h2 className="inner-title">
                          Expert Services AND Exceptional
                          <span className="italic">
                            Results
                          </span>
                        </h2>
                      </div>
                      <div className="inner-button-box reveal">
                        <a className="primary-button inline-block" href="/contact">
                          <div className="primary-button-text-wrap">
                            <div className="primary-button-text">
                              GET IN TOUCH
                            </div>
                            <div className="primary-button-hover-text">
                              GET IN TOUCH
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="result-right-box" role="list">
                      <div role="listitem">
                        <a className="results-single-wrap inline-block" href="/service/commercial-sales-leasing">
                          <div className="results-single-flex">
                            <div className="result-card-left-box">
                              <div className="result-card-title-box">
                                <h3 className="result-card-title">
                                  COMMERCIAL SALES &amp; LEASING
                                </h3>
                                <div className="result-card-number">
                                  01
                                </div>
                              </div>
                              <div className="result-card-image-box reveal">
                                <img alt="" className="result-card-image" loading="lazy" src="/assets/images/68589d78cb772959e14979c7_result-3.jpg" />
                              </div>
                            </div>
                            <div className="result-icon-box">
                              <img alt="" className="result-icon" loading="lazy" src="/assets/images/result.svg" />
                              <img alt="" className="result-icon" loading="lazy" src="/assets/images/result.svg" />
                            </div>
                          </div>
                          <div className="result-card-divider-wrap">
                            <div className="blog-card-divider" style={{ width: "100%" }}>
                            </div>
                            <div className="blog-card-divider-hover" style={{ width: "0%" }}>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div role="listitem">
                        <a className="results-single-wrap inline-block" href="/service/construction-renovation">
                          <div className="results-single-flex">
                            <div className="result-card-left-box">
                              <div className="result-card-title-box">
                                <h3 className="result-card-title">
                                  CONSTRUCTION &amp; RENOVATION
                                </h3>
                                <div className="result-card-number">
                                  02
                                </div>
                              </div>
                              <div className="result-card-image-box reveal">
                                <img alt="" className="result-card-image" loading="lazy" src="/assets/images/68589d12aa21fa380b5fd7e2_result-1.jpg" />
                              </div>
                            </div>
                            <div className="result-icon-box">
                              <img alt="" className="result-icon" loading="lazy" src="/assets/images/result.svg" />
                              <img alt="" className="result-icon" loading="lazy" src="/assets/images/result.svg" />
                            </div>
                          </div>
                          <div className="result-card-divider-wrap">
                            <div className="blog-card-divider" style={{ width: "100%" }}>
                            </div>
                            <div className="blog-card-divider-hover" style={{ width: "0%" }}>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div role="listitem">
                        <a className="results-single-wrap inline-block" href="/service/home-staging-marketing">
                          <div className="results-single-flex">
                            <div className="result-card-left-box">
                              <div className="result-card-title-box">
                                <h3 className="result-card-title">
                                  HOME STAGING &amp; MARKETING
                                </h3>
                                <div className="result-card-number">
                                  03
                                </div>
                              </div>
                              <div className="result-card-image-box reveal">
                                <img alt="" className="result-card-image" loading="lazy" src="/assets/images/68589db035cada08750b40cd_result-4.jpg" />
                              </div>
                            </div>
                            <div className="result-icon-box">
                              <img alt="" className="result-icon" loading="lazy" src="/assets/images/result.svg" />
                              <img alt="" className="result-icon" loading="lazy" src="/assets/images/result.svg" />
                            </div>
                          </div>
                          <div className="result-card-divider-wrap">
                            <div className="blog-card-divider" style={{ width: "100%" }}>
                            </div>
                            <div className="blog-card-divider-hover" style={{ width: "0%" }}>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div role="listitem">
                        <a className="results-single-wrap inline-block" href="/service/interior-design-services">
                          <div className="results-single-flex">
                            <div className="result-card-left-box">
                              <div className="result-card-title-box">
                                <h3 className="result-card-title">
                                  INTERIOR DESIGN SERVICES
                                </h3>
                                <div className="result-card-number">
                                  04
                                </div>
                              </div>
                              <div className="result-card-image-box reveal">
                                <img alt="" className="result-card-image" loading="lazy" src="/assets/images/68589d4c1f76257ee5e18cc9_result-2.jpg" />
                              </div>
                            </div>
                            <div className="result-icon-box">
                              <img alt="" className="result-icon" loading="lazy" src="/assets/images/result.svg" />
                              <img alt="" className="result-icon" loading="lazy" src="/assets/images/result.svg" />
                            </div>
                          </div>
                          <div className="result-card-divider-wrap">
                            <div className="blog-card-divider" style={{ width: "100%" }}>
                            </div>
                            <div className="blog-card-divider-hover" style={{ width: "0%" }}>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div role="listitem">
                        <a className="results-single-wrap inline-block" href="/service/rental-leasing-service">
                          <div className="results-single-flex">
                            <div className="result-card-left-box">
                              <div className="result-card-title-box">
                                <h3 className="result-card-title">
                                  RENTAL &amp; LEASING SERVICE
                                </h3>
                                <div className="result-card-number">
                                  05
                                </div>
                              </div>
                              <div className="result-card-image-box reveal">
                                <img alt="" className="result-card-image" loading="lazy" src="/assets/images/68589dcee31d040ea994b7bd_result-5.jpg" />
                              </div>
                            </div>
                            <div className="result-icon-box">
                              <img alt="" className="result-icon" loading="lazy" src="/assets/images/result.svg" />
                              <img alt="" className="result-icon" loading="lazy" src="/assets/images/result.svg" />
                            </div>
                          </div>
                          <div className="result-card-divider-wrap">
                            <div className="blog-card-divider" style={{ width: "100%" }}>
                            </div>
                            <div className="blog-card-divider-hover" style={{ width: "0%" }}>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section inner-blog">
              <div className="container">
                <div className="inner-wrap">
                  <div className="inner-title-wrap flex">
                    <div className="inner-title-box inner-blog reveal">
                      <h2 className="inner-title">
                        Real Estate &amp; Design Trends
                        <span className="italic">
                          delivering
                        </span>
                      </h2>
                    </div>
                    <div className="inner-button-box reveal">
                      <a className="primary-button inline-block" href="/blog">
                        <div className="primary-button-text-wrap">
                          <div className="primary-button-text">
                            VIEW BLOGS
                          </div>
                          <div className="primary-button-hover-text">
                            VIEW BLOGS
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="inner-blog-grid" role="list">
                      <div data-cat="design" role="listitem">
                        <div className="blog-card reveal">
                          <a className="blog-image-box inline-block" href="/blog/how-design-trends-shape-buyer-decisions">
                            <img alt="Blog Image" className="blog-image" loading="lazy" src="/assets/images/6854e9e11a7ab92f3935bcaf_blog-5.jpg" />
                          </a>
                          <a aria-label="Blog Link" className="blog-card-title-box inline-block" href="/blog/how-design-trends-shape-buyer-decisions">
                            <h3 className="blog-card-title">
                              How Design Trends Shape Buyer Decisions
                            </h3>
                          </a>
                          <div className="blog-author-box">
                            <div className="blog-author-name">
                              Feroz Christopher
                            </div>
                            <div className="blog-author-date">
                              Jun 20, 2025
                            </div>
                          </div>
                          <div className="blog-card-divider-wrap">
                            <div className="blog-card-divider" style={{ width: "100%" }}>
                            </div>
                            <div className="blog-card-divider-hover" style={{ width: "0%" }}>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-cat="architect" role="listitem">
                        <div className="blog-card reveal">
                          <a className="blog-image-box inline-block" href="/blog/how-the-real-estate-market-is-evolving-in-2025">
                            <img alt="Blog Image" className="blog-image" loading="lazy" src="/assets/images/68523d5f344342ceb9029b6b_blog-1.jpg" />
                          </a>
                          <a aria-label="Blog Link" className="blog-card-title-box inline-block" href="/blog/how-the-real-estate-market-is-evolving-in-2025">
                            <h3 className="blog-card-title">
                              How the Real Estate Market Is Evolving in 2025
                            </h3>
                          </a>
                          <div className="blog-author-box">
                            <div className="blog-author-name">
                              Thomas William
                            </div>
                            <div className="blog-author-date">
                              Jun 18, 2025
                            </div>
                          </div>
                          <div className="blog-card-divider-wrap">
                            <div className="blog-card-divider" style={{ width: "100%" }}>
                            </div>
                            <div className="blog-card-divider-hover" style={{ width: "0%" }}>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-cat="design" role="listitem">
                        <div className="blog-card reveal">
                          <a className="blog-image-box inline-block" href="/blog/the-role-of-design-in-real-estate-development">
                            <img alt="Blog Image" className="blog-image" loading="lazy" src="/assets/images/6858a1a81f76257ee5e2c379_blog-4.jpg" />
                          </a>
                          <a aria-label="Blog Link" className="blog-card-title-box inline-block" href="/blog/the-role-of-design-in-real-estate-development">
                            <h3 className="blog-card-title">
                              The Role of Design in Real Estate Development
                            </h3>
                          </a>
                          <div className="blog-author-box">
                            <div className="blog-author-name">
                              Emerson Lofer
                            </div>
                            <div className="blog-author-date">
                              Jun 20, 2025
                            </div>
                          </div>
                          <div className="blog-card-divider-wrap">
                            <div className="blog-card-divider" style={{ width: "100%" }}>
                            </div>
                            <div className="blog-card-divider-hover" style={{ width: "0%" }}>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </>
  );
}
