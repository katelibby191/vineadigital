import React, { useState } from "react";
import siteConfig from "../config.js";
import BrandText from "./BrandText.jsx";

export default function Navbar() {
  const { brand, nav } = siteConfig;
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="logo" href="#top" aria-label={brand.name}>
          <img src="/vinealogo.svg" alt="" className="logo-img" />
          <BrandText />
        </a>

        <ul className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a className="btn btn-primary" href={nav.ctaHref}>
            <span className="cta-label-full">{nav.ctaLabel}</span>
            <span className="cta-label-short">{nav.ctaLabelShort || nav.ctaLabel}</span>
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
