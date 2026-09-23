import React from "react";
import Icon from "./Icon.jsx";
import siteConfig from "../config.js";
import BrandText from "./BrandText.jsx";

export function CtaBand() {
  const { cta } = siteConfig;
  return (
    <section
      className="cta-band"
      id="cta"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(9, 11, 30, 0.95) 0%, rgba(9, 11, 30, 0.8) 50%, rgba(9, 11, 30, 0.92) 100%), url(${cta.bgImage || "/cta-bg.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="wrap cta-inner">
        <div className="cta-text">
          <p className="cta-eyebrow">{cta.eyebrow || "READY TO GET STARTED?"}</p>
          <h2>{cta.heading}</h2>
          <p className="cta-desc">{cta.description}</p>
        </div>
        <div className="cta-actions-box">
          <a className="btn btn-primary btn-cta" href={cta.primaryCta.href}>
            {cta.primaryCta.label} →
          </a>
          <a
            className="cta-whatsapp"
            href={`https://wa.me/${cta.whatsapp.number.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={17} strokeWidth={2.2} />
            <span>
              {cta.whatsapp.label}: <strong>{cta.whatsapp.number}</strong>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { brand, footer, social } = siteConfig;
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <a className="logo" href="#top" aria-label={brand.name}>
            <img src="/vinealogo.svg" alt="" className="logo-img" />
            <span className="logo-name-group">
              <BrandText />
            </span>
          </a>

          <div className="footer-links">
            {footer.links.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-social">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                title={item.name}
                className={`social-tile social-tile-${item.icon}`}
              >
                <Icon name={item.icon} size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>{footer.copyright}</span>
          <span className="footer-tagline">{footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
