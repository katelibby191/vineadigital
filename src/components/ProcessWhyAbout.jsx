import React from "react";
import Icon from "./Icon.jsx";
import TechIcon from "./TechIcons.jsx";
import siteConfig from "../config.js";

export default function ProcessWhyAbout() {
  const { process, whyUs, about } = siteConfig;

  return (
    <section id="process" className="process-section">
      <div className="wrap">
        <div className="triple">
          {/* Column 1: How it works */}
          <div className="triple-col">
            <p className="eyebrow-light">OUR PROCESS</p>
            <h3>{process.heading}</h3>
            <div className="process-steps-list">
              {process.steps.map((step, i) => (
                <div className="step-row" key={step.title}>
                  <div className="step-icon-badge">
                    <Icon name={step.icon || "code"} size={16} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span className="title">
                      {i + 1}. {step.title}
                    </span>
                    <span className="description">{step.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {process.note && (
              <p className="process-note">
                <Icon name="bolt" size={14} strokeWidth={2.2} />
                <span>{process.note}</span>
              </p>
            )}
          </div>

          {/* Column 2: Why choose us */}
          <div className="triple-col">
            <p className="eyebrow-light">WHY CHOOSE US</p>
            <h3>{whyUs.heading}</h3>
            <div className="why-checks-list">
              {whyUs.points.map((point) => (
                <div className="check-row" key={point}>
                  <div className="check-icon">
                    <Icon name="check" size={14} strokeWidth={3} />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: About */}
          <div className="triple-col" id="about">
            <p className="eyebrow-light">ABOUT ME</p>
            <h3>{about.heading}</h3>
            {about.role && <p className="about-role">{about.role}</p>}
            <p className="about-bio">{about.bio}</p>

            <div className="about-cta-wrapper">
              <a
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                href={about.ctaHref}
              >
                {about.ctaLabel} →
              </a>
            </div>

            <div className="about-tech-stack">
              {about.logos.map((logo, i) => (
                <div
                  className="tech-icon-card"
                  key={logo.name || i}
                  title={logo.label || logo.name}
                >
                  <TechIcon name={logo.name} size={26} />
                  <span className="tech-icon-label">{logo.label || logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
