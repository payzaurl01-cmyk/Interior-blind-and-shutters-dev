"use client";

import React, { useState, useRef, useEffect } from "react";

export function HeroQuoteCard() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ label: "Menu", code: "01/04" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    postcode: "",
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuOptions = [
    { label: "Menu", href: "/", code: "01/04" },
    { label: "Product", href: "/product", code: "02/04" },
    { label: "Project", href: "/project", code: "03/04" },
    { label: "Service", href: "/service", code: "04/04" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", postcode: "" });
    }, 4500);
  };

  return (
    <div className="hero-quote-card-container">
      {/* Top Header Row */}
      <div className="hero-quote-header">
        <span className="hero-quote-subtitle">FREE MEASURE &amp; QUOTE</span>

        {/* Interactive Dropdown Menu */}
        <div className="hero-quote-dropdown-wrap" ref={dropdownRef}>
          <button
            type="button"
            className="hero-quote-step-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
            title="Click to select Menu, Product, Project, or Service"
          >
            <span>{selectedOption.code}</span>
            <svg
              className={`step-btn-icon ${dropdownOpen ? "rotate" : ""}`}
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="hero-quote-dropdown-menu">
              <div className="dropdown-menu-title">Navigation Menu</div>
              {menuOptions.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`dropdown-menu-item ${selectedOption.code === item.code ? "active" : ""}`}
                  onClick={() => {
                    setSelectedOption({ label: item.label, code: item.code });
                    setDropdownOpen(false);
                  }}
                >
                  <span className="item-label">{item.label}</span>
                  <span className="item-code">{item.code}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Title */}
      <h2 className="hero-quote-title">
        <em>Let’s dress your</em>
        <br />
        <em>windows.</em>
      </h2>

      {/* Form or Success State */}
      {submitted ? (
        <div className="hero-quote-success">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3572FF" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="success-title">Thank You!</p>
          <p className="success-desc">We will contact you shortly regarding your enquiry.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="hero-quote-form">
          <div className="hero-quote-grid">
            <input
              type="text"
              placeholder="Name"
              required
              className="quote-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone"
              required
              className="quote-input"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="quote-input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Postcode"
              required
              className="quote-input"
              value={formData.postcode}
              onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
            />
          </div>

          <button type="submit" className="hero-quote-submit-btn">
            <span>GET A FREE QUOTE</span>
            <span className="btn-arrow">↗</span>
          </button>
        </form>
      )}

      {/* Footer Disclaimer */}
      <p className="hero-quote-disclaimer">
        By submitting, you agree to be contacted about your enquiry.
      </p>
    </div>
  );
}
