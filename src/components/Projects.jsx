import React, { useState } from "react";
import siteConfig from "../config.js";
import Icon from "./Icon.jsx";

// Project ids that have a real interactive demo built
const LIVE_DEMO_IDS = new Set(["artist", "salon", "restaurant", "dashboard"]);

export default function Projects({ onSelectProject }) {
  const { projects } = siteConfig;
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Websites", "Booking", "E-Commerce", "Web Apps"];

  const filteredItems = projects.items.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  // When "All" tab and not showAll → show first 4; otherwise show all matching
  const displayedItems =
    !showAll && activeCategory === "All"
      ? filteredItems.slice(0, 4)
      : filteredItems;

  const hasMore = filteredItems.length > 4;

  const handleCardClick = (project) => {
    if (!LIVE_DEMO_IDS.has(project.id)) return; // coming-soon card — no-op
    onSelectProject && onSelectProject(project);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="wrap">
        <div className="projects-header">
          <div className="section-head">
            <p className="eyebrow-light">{projects.eyebrow}</p>
            <h2>{projects.heading}</h2>
            <p>{projects.description}</p>
            {/* Top "View All" button — only shown when collapsed and there are more */}
            {!showAll && hasMore && activeCategory === "All" && (
              <div className="projects-cta-top">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowAll(true)}
                >
                  {`View All Projects (${projects.items.length}) →`}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="project-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`project-cat-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(cat);
                if (cat !== "All") setShowAll(true);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {displayedItems.map((project) => {
            const isLive = LIVE_DEMO_IDS.has(project.id);
            return (
              <div
                className={`project-card ${isLive ? "clickable-project-card" : "project-card-coming-soon"}`}
                key={`${project.id}-${project.title}`}
                onClick={() => handleCardClick(project)}
                role={isLive ? "button" : undefined}
                tabIndex={isLive ? 0 : undefined}
                onKeyDown={(e) => {
                  if (isLive && (e.key === "Enter" || e.key === " ")) {
                    handleCardClick(project);
                  }
                }}
                style={{ cursor: isLive ? "pointer" : "default" }}
              >
                <div
                  className="project-thumb"
                  style={{
                    backgroundImage: project.image
                      ? `url(${project.image})`
                      : project.thumbGradient,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                  }}
                >
                  {isLive ? (
                    <>
                      {/* Live demo hover overlay */}
                      <div className="project-thumb-hover">
                        <span className="project-launch-btn">
                          <span>Explore Live Demo</span>
                          <Icon name="arrowRight" size={14} />
                        </span>
                      </div>
                      <div className="project-live-indicator">
                        <span className="pulse-dot" />
                        <span>Live App</span>
                      </div>
                    </>
                  ) : (
                    /* Coming soon badge */
                    <div className="project-coming-soon-badge">Coming Soon</div>
                  )}
                </div>
                <div className="project-body">
                  <div className="project-title-row">
                    <h4>{project.title}</h4>
                  </div>
                  <p>{project.meta}</p>
                  <div className="project-footer-row">
                    <span className="project-tag">{project.tag}</span>
                    {isLive ? (
                      <span className="project-view-link">Open Demo ↗</span>
                    ) : (
                      <span style={{ fontSize: "0.75rem", color: "var(--ink-faint)", fontWeight: 600 }}>
                        In Development
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom expand / collapse toggle */}
        {activeCategory === "All" && hasMore && (
          <div className="projects-bottom-actions">
            <button
              type="button"
              className="btn btn-ghost-light"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll
                ? "Show Featured Projects ↑"
                : `View All Projects (${projects.items.length}) →`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}


