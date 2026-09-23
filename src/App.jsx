import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Transformation from "./components/Transformation.jsx";
import Projects from "./components/Projects.jsx";
import Pricing from "./components/Pricing.jsx";
import ProcessWhyAbout from "./components/ProcessWhyAbout.jsx";
import FAQ from "./components/FAQ.jsx";
import { CtaBand, Footer } from "./components/CtaAndFooter.jsx";
import siteConfig from "./config.js";
import "./App.css";

// Sample project pages
import ProjectViewer from "./projects/ProjectViewer.jsx";
import ArtistProject from "./projects/ArtistProject.jsx";
import SalonProject from "./projects/SalonProject.jsx";
import RestaurantProject from "./projects/RestaurantProject.jsx";
import DashboardProject from "./projects/DashboardProject.jsx";

// Map project id → component
const PROJECT_COMPONENTS = {
  artist: ArtistProject,
  salon: SalonProject,
  restaurant: RestaurantProject,
  dashboard: DashboardProject,
};

// Turns config.theme into real CSS custom properties
function ThemeVars() {
  const { colors, fonts } = siteConfig.theme;
  const css = `:root{
    --navy-950:${colors.navy950};
    --navy-900:${colors.navy900};
    --navy-800:${colors.navy800};
    --indigo-500:${colors.indigo500};
    --indigo-400:${colors.indigo400};
    --indigo-300:${colors.indigo300};
    --lavender-50:${colors.lavender50};
    --lavender-100:${colors.lavender100};
    --paper:${colors.paper};
    --ink:${colors.ink};
    --ink-soft:${colors.inkSoft};
    --ink-faint:${colors.inkFaint};
    --line:${colors.line};
    --font-display:${fonts.display};
    --font-body:${fonts.body};
    --font-handwriting:${fonts.handwriting};
    --accent:${colors.accent || colors.indigo500};
  }`;
  return <style>{css}</style>;
}

export default function App() {
  const [activeProject, setActiveProject] = useState(null); // null = main portfolio

  const handleSelectProject = (project) => {
    if (!project || !project.id) return;
    if (!PROJECT_COMPONENTS[project.id]) return;
    setActiveProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToPortfolio = () => {
    setActiveProject(null);
    // Scroll back to projects section after a short tick
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  // ----- DEMO PAGE -----
  if (activeProject) {
    const ProjectPage = PROJECT_COMPONENTS[activeProject.id];
    return (
      <>
        <ThemeVars />
        <ProjectViewer project={activeProject} onBack={handleBackToPortfolio}>
          <ProjectPage />
        </ProjectViewer>
      </>
    );
  }

  // ----- MAIN PORTFOLIO PAGE -----
  return (
    <>
      <ThemeVars />
      <Navbar />
      <Hero />
      <Features />
      <Transformation />
      <Projects onSelectProject={handleSelectProject} />
      <Pricing />
      <ProcessWhyAbout />
      <FAQ />
      <CtaBand />
      <Footer />
    </>
  );
}
