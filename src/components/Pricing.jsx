import React from "react";
import Icon from "./Icon.jsx";
import siteConfig from "../config.js";

export default function Pricing() {
  const { pricing } = siteConfig;

  return (
    <section className="pricing" id="pricing">
      <div className="wrap pricing-container">
        <div className="pricing-sidebar">
          <div className="section-head">
            <p className="eyebrow-light">{pricing.eyebrow}</p>
            <h2>{pricing.heading}</h2>
            <p>{pricing.description}</p>
            {pricing.customCta && (
              <div className="pricing-custom-cta">
                <a className="btn btn-primary" href={pricing.customCta.href}>
                  {pricing.customCta.label} →
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="pricing-cards-wrapper">
          <div className="pricing-grid">
            {pricing.tiers.map((tier) => (
              <div
                className={`price-card ${tier.popular ? "popular" : ""}`}
                key={tier.name}
              >
                {tier.popular && tier.badgeLabel && (
                  <span className="badge-popular">{tier.badgeLabel}</span>
                )}
                <h3>{tier.name}</h3>
                <p className="sub">{tier.subtitle}</p>
                <div className="price">
                  <span className="currency">{pricing.currency}</span>
                  {tier.price}
                </div>
                <ul className="price-list">
                  {tier.features.map((feature) => (
                    <li key={feature}>
                      <Icon name="check" size={15} strokeWidth={2.5} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className={`btn btn-block ${tier.popular ? "btn-primary" : "btn-ghost-light"}`}
                  href={tier.ctaHref}
                >
                  {tier.ctaLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
