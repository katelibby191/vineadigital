import React from "react";
import Icon from "./Icon.jsx";
import siteConfig from "../config.js";

export default function Features() {
  const { features } = siteConfig;

  return (
    <section className="features" id="features">
      <div className="wrap">
        <div className="features-grid">
          <div className="section-head">
            <p className="eyebrow-light">{features.eyebrow.toUpperCase()}</p>
            <h2>{features.heading}</h2>
            <p>{features.description}</p>
          </div>

          <div className="feature-cards">
            {features.items.map((item) => (
              <div className="feature-card" key={item.title}>
                <div className="feature-icon">
                  <Icon name={item.icon} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
