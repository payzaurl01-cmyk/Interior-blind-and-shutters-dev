import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your free measure and quote request has been received.",
};

export default function ThanksYouPage() {
  return (
    <main className="thanks-page">
      <div className="thanks-page-card">
        <span className="home-quote-success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="m5 12 4.5 4.5L19 7" />
          </svg>
        </span>
        <p className="home-quote-success-kicker">THANK YOU</p>
        <h1>
          Your request is
          <span>on its way.</span>
        </h1>
        <p className="thanks-page-copy">
          We’ve received your details. One of our team will be in touch soon to
          arrange your free in-home measure and quote.
        </p>
        <div className="home-quote-success-rule" />
        <span className="home-quote-success-note">NO OBLIGATION. EXPERT ADVICE.</span>
        <a className="thanks-page-button" href="/">
          BACK TO HOME
        </a>
      </div>
    </main>
  );
}
