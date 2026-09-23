import React from "react";
import Icon from "./Icon.jsx";
import siteConfig from "../config.js";

const trustIcons = ["shield", "bolt", "award"];

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="wrap hero-grid">
        <div className="hero-content">
          <div className="eyebrow-pill">
            <span>{hero.eyebrow}</span>
          </div>

          <h1>
            Your Business.
            <br />
            <span className="accent">Online.</span> Beautifully.
          </h1>

          <p className="lead">{hero.subhead}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label} →
            </a>
            <a className="btn btn-ghost-dark" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="hero-trust">
            {hero.trustPoints.map((point, i) => (
              <div className="trust-item" key={point}>
                <Icon name={trustIcons[i % trustIcons.length]} size={16} strokeWidth={2.2} />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          {hero.note && (
            <div className="hero-annotation">
              <span>{hero.note}</span>
              <svg className="annotation-arrow" width="48" height="42" viewBox="0 0 48 42" fill="none">
                <path
                  d="M40 4C30 14 18 24 6 36M6 36L16 35M6 36L8 26"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}

          {/* Laptop Frame */}
          <div className="laptop-wrapper">
            <div className="laptop-screen">
              <div className="laptop-camera" />
              <div className="laptop-display">
                {/* Website mock header */}
                <div className="mock-site-nav">
                  <span className="mock-site-logo">{hero.mockup.browserTitle}</span>
                  <div className="mock-site-links">
                    <span>Home</span>
                    <span>Gallery</span>
                    <span>About</span>
                    <span>Contact</span>
                  </div>
                  <div className="mock-site-cart">
                    <Icon name="cart" size={13} strokeWidth={2} />
                  </div>
                </div>

                {/* Website mock hero */}
                <div
                  className="mock-site-hero"
                  style={{
                    backgroundImage: `linear-gradient(rgba(10, 12, 30, 0.65), rgba(10, 12, 30, 0.85)), url(${hero.mockup.bgImage || "/art-soul.jpg"})`,
                  }}
                >
                  <h2>{hero.mockup.browserTitle}</h2>
                  <p>{hero.mockup.browserSubtitle}</p>
                  <span className="mock-site-btn">{hero.mockup.browserCtaLabel}</span>
                </div>
              </div>
            </div>
            {/* Laptop Base */}
            <div className="laptop-base">
              <div className="laptop-notch" />
            </div>
          </div>

          {/* Phone Frame */}
          <div className="phone-wrapper">
            <div className="phone-island" />
            <div
              className="phone-screen"
              style={{
                backgroundImage: `linear-gradient(rgba(12, 14, 35, 0.75), rgba(12, 14, 35, 0.9)), url(${hero.mockup.bgImage || "/art-soul.jpg"})`,
              }}
            >
              <div className="phone-nav">
                <span>{hero.mockup.phoneTitle}</span>
                <Icon name="cart" size={11} strokeWidth={2} />
              </div>
              <div className="phone-hero">
                <h4>{hero.mockup.phoneTitle}</h4>
                <p>{hero.mockup.phoneSubtitle}</p>
                <span className="phone-btn">{hero.mockup.phoneCtaLabel}</span>
              </div>
              <div className="phone-art-grid">
                <div className="phone-art-thumb" />
                <div className="phone-art-thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
