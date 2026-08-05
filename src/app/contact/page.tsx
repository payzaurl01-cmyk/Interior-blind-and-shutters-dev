// Nuvora template — this page's markup mirrors the original design; styling comes
// from /assets/css/styles.css. Edit copy and image sources directly below.
export default function ContactPage() {
  return (
    <>
      <section className="section inner-hero">
              <div className="container">
                <div className="inner-title-wrap contact">
                  <div className="inner-title-box is-contact reveal">
                    <h1 className="hero-white-title">
                      Let’s Chat, Reach
                      <span className="italic none">
                        out to collaborate
                      </span>
                    </h1>
                  </div>
                  <div className="inner-button-box reveal">
                    <a aria-current="page" className="primary-button inline-block" href="/contact">
                      <div className="primary-button-content">
                        <div className="primary-button-text-wrap">
                          <div className="primary-button-text">
                            GET IN TOUCH
                          </div>
                          <div className="primary-button-hover-text">
                            GET IN TOUCH
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="visual-wrap">
                <img alt="" className="visual" loading="lazy" sizes="(max-width: 5760px) 100vw, 5760px" src="/assets/images/Contact-Banner-Image.webp" srcSet="/assets/images/Contact-Banner-Image-p-500.webp 500w, /assets/images/Contact-Banner-Image-p-800.webp 800w, /assets/images/Contact-Banner-Image-p-1080.webp 1080w, /assets/images/Contact-Banner-Image-p-1600.webp 1600w, /assets/images/Contact-Banner-Image-p-2000.webp 2000w, /assets/images/Contact-Banner-Image-p-2600.webp 2600w, /assets/images/Contact-Banner-Image-p-3200.webp 3200w, /assets/images/Contact-Banner-Image.webp 5760w" />
                <div className="visual-overlay">
                </div>
              </div>
            </section>
            <section className="section full-padding-bottom">
              <div className="container">
                <div className="contact-flex">
                  <div className="contact-left-box">
                    <h2 className="contact-title reveal">
                      Send a message and we’ll connect!
                    </h2>
                    <div className="contact-card reveal">
                      <div className="primary-text-regular">
                        Phone
                      </div>
                      <a className="primary-text-regular text-primary" href="tel:+44789247652">
                        +44 789 247 652
                      </a>
                    </div>
                    <div className="plan-divider" style={{ width: "0%" }}>
                    </div>
                    <div className="contact-card reveal">
                      <div className="primary-text-regular">
                        Email
                      </div>
                      <a className="primary-text-regular text-primary" href="mailto:support@example.com">
                        support@example.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-right-box reveal">
                    <div className="form-block">
                      <form className="contact-from" data-demo-form="1" data-name="Email Form" id="email-form" name="email-form">
                        <div className="contact-field-wrap">
                          <div className="contact-field-box">
                            <label htmlFor="First-Name">
                              First Name
                            </label>
                            <input className="field wf-input" data-name="First Name" id="First-Name" maxLength={256} name="First-Name" placeholder="Jon" required type="text" />
                          </div>
                          <div className="contact-field-box">
                            <label htmlFor="Last-Name">
                              Last Name
                            </label>
                            <input className="field wf-input" data-name="Last Name" id="Last-Name" maxLength={256} name="Last-Name" placeholder="Doe" type="text" />
                          </div>
                        </div>
                        <div className="contact-field-wrap">
                          <div className="contact-field-box">
                            <label htmlFor="Email">
                              Email
                            </label>
                            <input className="field wf-input" data-name="Email" id="Email" maxLength={256} name="Email" placeholder="support@example.com" required type="email" />
                          </div>
                          <div className="contact-field-box">
                            <label htmlFor="Phone">
                              Phone Number
                            </label>
                            <input className="field wf-input" data-name="Phone" id="Phone" maxLength={256} name="Phone" placeholder="+19297829239" type="tel" />
                          </div>
                        </div>
                        <div className="contact-field-wrap">
                          <div className="contact-field-box">
                            <label htmlFor="Message-Field">
                              Message
                            </label>
                            <textarea className="textareea wf-input" data-name="Field" id="Message-Field" maxLength={5000} name="field" placeholder="Message"></textarea>
                          </div>
                        </div>
                        <input className="from-button wf-button" type="submit" value="SEND MESSAGE" />
                      </form>
                      <div className="success-message wf-form-done" data-form-done="1" hidden>
                        <div>
                          Thank you! Your submission has been received!
                        </div>
                      </div>
                      <div className="error-message wf-form-fail" data-form-fail="1" hidden>
                        <div>
                          Oops! Something went wrong while submitting the form.
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
