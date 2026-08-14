"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function ContactQuoteForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData(form);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "Unable to submit your request.");
      }

      form.reset();
      router.push("/thanks-you");
    } catch (error) {
      window.alert(
        error instanceof Error
          ? error.message
          : "Unable to submit your request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-from" id="contact-quote-form" onSubmit={handleSubmit}>
      <div className="contact-field-wrap">
        <div className="contact-field-box">
          <label htmlFor="contact-full-name">Full Name</label>
          <input
            autoComplete="name"
            className="field wf-input"
            id="contact-full-name"
            name="fullName"
            placeholder="Your name"
            required
            type="text"
          />
        </div>
        <div className="contact-field-box">
          <label htmlFor="contact-phone">Phone Number</label>
          <input
            autoComplete="tel"
            className="field wf-input"
            id="contact-phone"
            inputMode="tel"
            name="phone"
            placeholder="0458 822 281"
            required
            type="tel"
          />
        </div>
      </div>

      <div className="contact-field-wrap">
        <div className="contact-field-box">
          <label htmlFor="contact-email">Email Address</label>
          <input
            autoComplete="email"
            className="field wf-input"
            id="contact-email"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </div>
        <div className="contact-field-box">
          <label htmlFor="contact-postcode">Postcode</label>
          <input
            autoComplete="postal-code"
            className="field wf-input"
            id="contact-postcode"
            inputMode="numeric"
            name="postcode"
            pattern="[0-9]{4}"
            placeholder="3000"
            required
            type="text"
          />
        </div>
      </div>

      <div className="contact-field-wrap">
        <div className="contact-field-box">
          <label htmlFor="contact-service">Required Service</label>
          <select
            className="field wf-input contact-service-select"
            defaultValue=""
            id="contact-service"
            name="service"
            required
          >
            <option disabled value="">Select a service</option>
            <option value="roller-blinds">Roller Blinds</option>
            <option value="shutters">Shutters</option>
            <option value="curtains">Curtains</option>
            <option value="outdoor-blinds">Outdoor Blinds</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <button className="from-button wf-button" disabled={isSubmitting} type="submit">
        {isSubmitting ? "SENDING..." : "BOOK FREE MEASURE"}
      </button>
      <p className="home-quote-privacy">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M7 10V7a5 5 0 0 1 10 0v3m-11 0h12a1 1 0 0 1 1 1v9H5v-9a1 1 0 0 1 1-1Zm6 4v3" />
        </svg>
        Your details are safe with us.
      </p>
    </form>
  );
}
