import React from "react";
import Icon from "./Icon.jsx";
import siteConfig from "../config.js";

export default function Transformation() {
  const { transformation } = siteConfig;

  return (
    <section className="transform" id="solutions">
      <div className="wrap">
        <div className="transform-top">
          <div className="section-head">
            <p className="eyebrow-light">{transformation.eyebrow}</p>
            <h2>
              From Offline <span className="transform-arrow">→</span> Online
            </h2>
            <p>{transformation.description}</p>
          </div>
        </div>

        <div className="flow-wrapper">
          <div className="flow">
            {transformation.steps.map((step, i) => (
              <React.Fragment key={step.label}>
                <div className={`flow-step ${step.active ? "active" : ""}`}>
                  <div className="flow-circle">
                    <Icon name={step.icon} size={20} strokeWidth={2.2} />
                  </div>
                  <span>{step.label}</span>
                </div>
                {i < transformation.steps.length - 1 && (
                  <div className="flow-arrow-container">
                    <Icon name="arrowRight" size={15} className="flow-arrow" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="transform-showcase">
          <div
            className="transform-photo-frame"
            style={{ backgroundImage: `url(${transformation.photo || "/florist.jpg"})` }}
          >
            {/* Handwritten overlay annotation */}
            <div className="transform-annotation">
              <p>
                More visibility.
                <br />
                More customers.
                <br />
                More growth.
              </p>
              <svg className="transform-doodle" width="46" height="34" viewBox="0 0 46 34" fill="none">
                <path
                  d="M4 4C14 12 28 20 40 28M40 28L32 29M40 28L39 20"
                  stroke="#1E293B"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Overlaid floating stat cards */}
            <div className="transform-floating-stats">
              {/* Stat 1 */}
              <div className="transform-stat-card stat-bookings">
                <span className="stat-label">Online Bookings</span>
                <div className="stat-value up">
                  <span>+245%</span>
                  <Icon name="arrowUp" size={16} strokeWidth={3} />
                </div>
              </div>

              {/* Stat 2 */}
              <div className="transform-stat-card stat-visitors">
                <span className="stat-label">Website Visitors</span>
                <div className="stat-value">
                  <span>12.4K</span>
                </div>
                <svg className="sparkline" width="70" height="20" viewBox="0 0 70 20" fill="none">
                  <path
                    d="M2 16L15 12L28 14L40 7L54 9L68 3"
                    stroke="#5B5DF8"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
