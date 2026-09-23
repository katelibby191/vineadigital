import React, { useState } from "react";
import Icon from "../components/Icon.jsx";

const artworks = [
  {
    id: 1,
    title: "Highland Meadow at Dusk",
    year: "2024",
    medium: "Oil on Linen",
    size: "36 × 48 in",
    price: "₹85,000",
    image: "/art-soul.jpg",
    category: "Landscapes",
    available: true,
    description: "An expressive sunset over the rolling highlands, built with rich impasto textures and layered earthen pigments.",
  },
  {
    id: 2,
    title: "Whispering Pine Forest",
    year: "2024",
    medium: "Oil on Canvas",
    size: "30 × 40 in",
    price: "₹62,000",
    image: "/project-artist.jpg",
    category: "Landscapes",
    available: true,
    description: "Atmospheric woodland scene captured during early morning mist, balancing deep emerald tones with golden sunlight.",
  },
  {
    id: 3,
    title: "Golden Hour Solitude",
    year: "2023",
    medium: "Oil on Wood Panel",
    size: "24 × 36 in",
    price: "₹48,000",
    image: "/art-soul.jpg",
    category: "Abstracts",
    available: false,
    description: "Abstracted light study exploring the interplay between warm embers of twilight and cool mountain shadows.",
  },
  {
    id: 4,
    title: "Coastal Tide & Surge",
    year: "2024",
    medium: "Mixed Media & Oil",
    size: "40 × 50 in",
    price: "₹95,000",
    image: "/project-artist.jpg",
    category: "Landscapes",
    available: true,
    description: "Dynamic ocean waves crashing against rugged cliffs, evoking raw maritime energy and coastal tranquility.",
  },
  {
    id: 5,
    title: "Rustic Farmhouse Awakening",
    year: "2023",
    medium: "Oil on Canvas",
    size: "20 × 28 in",
    price: "₹38,000",
    image: "/art-soul.jpg",
    category: "Landscapes",
    available: true,
    description: "Peaceful morning light casting gentle shadows across a historic barn in the countryside.",
  },
  {
    id: 6,
    title: "Winter Silence in Valley",
    year: "2024",
    medium: "Oil on Linen",
    size: "32 × 44 in",
    price: "₹72,000",
    image: "/project-artist.jpg",
    category: "Abstracts",
    available: false,
    description: "Quiet contemplation in silver and alabaster tones, capturing a pristine snow-laden valley at dawn.",
  },
];

export default function ArtistProject() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArt, setSelectedArt] = useState(null);
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", note: "" });

  const filteredArt =
    activeCategory === "All"
      ? artworks
      : artworks.filter((a) => a.category === activeCategory);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setSelectedArt(null);
      setFormData({ name: "", email: "", note: "" });
    }, 2800);
  };

  return (
    <div className="sample-artist-app">
      {/* Sample Site Header */}
      <header className="artist-header">
        <div className="artist-header-inner">
          <div className="artist-brand">
            <h2>ART & SOUL</h2>
            <span>ELEANOR VANCE STUDIO</span>
          </div>
          <nav className="artist-nav">
            <a href="#gallery">Gallery</a>
            <a href="#exhibitions">Exhibitions</a>
            <a href="#biography">About</a>
            <a href="#commissions" className="artist-nav-cta">Inquire / Commissions</a>
          </nav>
        </div>
      </header>

      {/* Hero Exhibition Banner */}
      <section className="artist-hero" style={{ backgroundImage: `linear-gradient(rgba(18, 16, 26, 0.7), rgba(18, 16, 26, 0.9)), url('/art-soul.jpg')` }}>
        <div className="artist-hero-content">
          <p className="artist-eyebrow">CURRENT SOLO EXHIBITION · 2024</p>
          <h1>Light & Landscape</h1>
          <p className="artist-hero-sub">
            Original oil paintings and limited fine art prints exploring light, mood, and the raw beauty of natural vistas.
          </p>
          <div className="artist-hero-btns">
            <a href="#gallery" className="btn btn-primary">Explore Collection ({artworks.length})</a>
            <a href="#commissions" className="btn btn-ghost-dark">Request Custom Work</a>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="artist-gallery-wrap" id="gallery">
        <div className="artist-section-head">
          <h3>Featured Works</h3>
          <div className="artist-tabs">
            {["All", "Landscapes", "Abstracts"].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`artist-tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="artist-grid">
          {filteredArt.map((art) => (
            <div
              className="art-card"
              key={art.id}
              onClick={() => setSelectedArt(art)}
            >
              <div
                className="art-image"
                style={{ backgroundImage: `url(${art.image})` }}
              >
                <div className="art-overlay">
                  <span className="btn-view-art">View Details ↗</span>
                </div>
                {!art.available && <span className="art-badge-sold">Sold Out</span>}
              </div>
              <div className="art-info">
                <h4>{art.title}</h4>
                <p className="art-meta">{art.medium} · {art.size}</p>
                <div className="art-bottom">
                  <span className="art-price">{art.price}</span>
                  <button
                    type="button"
                    className="art-inquire-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedArt(art);
                    }}
                  >
                    {art.available ? "Inquire →" : "View Archive"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artist Bio & Studio */}
      <section className="artist-about-section" id="biography">
        <div className="artist-about-grid">
          <div className="artist-about-photo" style={{ backgroundImage: `url('/art-soul.jpg')` }} />
          <div className="artist-about-text">
            <p className="artist-eyebrow">THE ARTIST</p>
            <h2>Meet Eleanor Vance</h2>
            <p>
              Eleanor Vance is a contemporary landscape painter whose works have been exhibited across premier galleries in Mumbai, London, and New York.
            </p>
            <p>
              Drawing inspiration from mountain twilight and coastal storms, each canvas is crafted with traditional oil techniques, natural mineral pigments, and rich linen supports.
            </p>
            <div className="artist-stats-row">
              <div>
                <strong>12+</strong>
                <span>Solo Exhibitions</span>
              </div>
              <div>
                <strong>350+</strong>
                <span>Private Collections</span>
              </div>
              <div>
                <strong>15 Years</strong>
                <span>Studio Practice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Inquiry Section */}
      <section className="artist-commission-section" id="commissions">
        <div className="artist-commission-card">
          <p className="artist-eyebrow">COMMISSIONS & INQUIRIES</p>
          <h3>Commission a Bespoke Artwork</h3>
          <p>
            Have a specific vision, color palette, or room dimension in mind? Work directly with Eleanor to create a one-of-a-kind original piece.
          </p>

          {inquirySent ? (
            <div className="artist-success-msg">
              <Icon name="check" size={24} />
              <h4>Inquiry Received!</h4>
              <p>Thank you for reaching out. We will respond with pricing and studio availability within 24 hours.</p>
            </div>
          ) : (
            <form className="artist-form" onSubmit={handleInquirySubmit}>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <textarea
                placeholder="Describe your desired size, space, or collection inquiry..."
                rows={3}
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              />
              <button type="submit" className="btn btn-primary btn-block">
                Submit Artwork Inquiry →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedArt && (
        <div className="art-modal-backdrop" onClick={() => setSelectedArt(null)}>
          <div className="art-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="art-modal-close"
              onClick={() => setSelectedArt(null)}
            >
              ✕
            </button>
            <div
              className="art-modal-image"
              style={{ backgroundImage: `url(${selectedArt.image})` }}
            />
            <div className="art-modal-details">
              <span className="art-modal-category">{selectedArt.category} · {selectedArt.year}</span>
              <h3>{selectedArt.title}</h3>
              <p className="art-modal-specs">
                <strong>Medium:</strong> {selectedArt.medium}
                <br />
                <strong>Dimensions:</strong> {selectedArt.size}
                <br />
                <strong>Framing:</strong> Natural White Oak Float Frame Included
              </p>
              <p className="art-modal-desc">{selectedArt.description}</p>
              <div className="art-modal-price-row">
                <span className="art-modal-price">{selectedArt.price}</span>
                <span className={`art-status-pill ${selectedArt.available ? "available" : "sold"}`}>
                  {selectedArt.available ? "Available for Purchase" : "In Private Collection"}
                </span>
              </div>
              {selectedArt.available ? (
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={() => {
                    alert(`Inquiry started for "${selectedArt.title}". A studio representative will contact you.`);
                    setSelectedArt(null);
                  }}
                >
                  Acquire This Artwork ({selectedArt.price}) →
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-ghost-dark btn-block"
                  onClick={() => {
                    alert(`You are on the waiting list for similar works to "${selectedArt.title}".`);
                    setSelectedArt(null);
                  }}
                >
                  Join Waiting List for Similar Works
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
