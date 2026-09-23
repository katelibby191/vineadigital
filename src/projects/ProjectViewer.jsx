import React, { useState } from "react";
import Icon from "../components/Icon.jsx";

export default function ProjectViewer({ project, onBack, children }) {
  const [deviceView, setDeviceView] = useState("desktop"); // 'desktop' | 'tablet' | 'mobile'

  return (
    <div className="project-viewer-container">
      {/* Top Banner Toolbar */}
      <header className="viewer-toolbar">
        <div className="viewer-toolbar-left">
          <button
            type="button"
            className="btn-back-portfolio"
            onClick={onBack}
            title="Return to main portfolio"
          >
            <Icon name="arrowRight" size={15} style={{ transform: "rotate(180deg)" }} />
            <span>Back to VineaDigital</span>
          </button>
          <div className="viewer-title-divider" />
          <div className="viewer-project-info">
            <span className="viewer-project-title">{project.title}</span>
            <span className="viewer-project-badge">{project.tag}</span>
            <span className="viewer-live-pill">
              <span className="live-dot" /> Live Demo
            </span>
          </div>
        </div>

        <div className="viewer-toolbar-center">
          <div className="device-switcher">
            <button
              type="button"
              className={`device-btn ${deviceView === "desktop" ? "active" : ""}`}
              onClick={() => setDeviceView("desktop")}
              title="Desktop View"
            >
              <Icon name="globe" size={15} />
              <span>Desktop</span>
            </button>
            <button
              type="button"
              className={`device-btn ${deviceView === "tablet" ? "active" : ""}`}
              onClick={() => setDeviceView("tablet")}
              title="Tablet View"
            >
              <Icon name="inbox" size={15} />
              <span>Tablet</span>
            </button>
            <button
              type="button"
              className={`device-btn ${deviceView === "mobile" ? "active" : ""}`}
              onClick={() => setDeviceView("mobile")}
              title="Mobile View"
            >
              <Icon name="phone" size={15} />
              <span>Mobile</span>
            </button>
          </div>
        </div>

        <div className="viewer-toolbar-right">
          <a
            href="#cta"
            onClick={onBack}
            className="btn btn-primary viewer-cta-btn"
          >
            Get a Website Like This →
          </a>
        </div>
      </header>

      {/* Screen Container */}
      <main className="viewer-viewport-wrap">
        <div className={`viewer-frame-container device-${deviceView}`}>
          <div className="viewer-screen-content">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
