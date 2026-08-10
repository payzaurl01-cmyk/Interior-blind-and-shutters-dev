"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export function HomeQuoteSection() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    router.push("/thanks-you");
  }

  return (
    <section className="home-quote-section" id="home-quote-section" aria-labelledby="home-quote-title">
      <div className="home-quote-container">
        <div className="home-quote-content reveal">
          <p className="home-quote-kicker">LET’S GET STARTED</p>
          <h2 className="home-quote-title" id="home-quote-title">
            READY TO<br /> 
            TRANSFORM<br />
            YOUR HOME?
          </h2>
          <p className="home-quote-script">Book your free measure &amp; quote.</p>
          <p className="home-quote-copy">
            Our team will help you find the right blinds or shutters for your space,
            style and budget.
          </p>
          <ul className="home-quote-benefits" aria-label="Appointment benefits">
            <li>Free in-home measure</li>
            <li>No obligation quote</li>
            <li>Expert installation</li>
          </ul>
        </div>

        <div className="home-quote-panel reveal">
          <form className="home-quote-form" onSubmit={handleSubmit}>
              <div className="home-quote-field">
                <label htmlFor="home-quote-name">Full Name</label>
                <input
                  autoComplete="name"
                  id="home-quote-name"
                  name="fullName"
                  required
                  type="text"
                />
              </div>
              <div className="home-quote-field">
                <label htmlFor="home-quote-phone">Phone Number</label>
                <input
                  autoComplete="tel"
                  id="home-quote-phone"
                  inputMode="tel"
                  name="phone"
                  required
                  type="tel"
                />
              </div>
              <div className="home-quote-field">
                <label htmlFor="home-quote-email">Email Address</label>
                <input
                  autoComplete="email"
                  id="home-quote-email"
                  name="email"
                  required
                  type="email"
                />
              </div>
              <div className="home-quote-field">
                <label htmlFor="home-quote-postcode">Postcode</label>
                <input
                  autoComplete="postal-code"
                  id="home-quote-postcode"
                  inputMode="numeric"
                  name="postcode"
                  pattern="[0-9]{4}"
                  required
                  type="text"
                />
              </div>
              <div className="home-quote-field home-quote-select-field">
                <label htmlFor="home-quote-service">Required Service</label>
                <select defaultValue="" id="home-quote-service" name="service" required>
                  <option disabled value="">Select a service</option>
                  <option value="roller-blinds">Roller Blinds</option>
                  <option value="shutters">Shutters</option>
                  <option value="curtains">Curtains</option>
                  <option value="outdoor-blinds">Outdoor Blinds</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button className="home-quote-submit" type="submit">
                BOOK FREE MEASURE
              </button>
              <p className="home-quote-privacy">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M7 10V7a5 5 0 0 1 10 0v3m-11 0h12a1 1 0 0 1 1 1v9H5v-9a1 1 0 0 1 1-1Zm6 4v3" />
                </svg>
                Your details are safe with us.
              </p>
          </form>
        </div>
      </div>
    </section>
  );
}
