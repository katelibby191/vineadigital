import React, { useState } from "react";
import Icon from "../components/Icon.jsx";

const services = [
  {
    id: "facial",
    name: "Hydrating Rose Glow Facial",
    category: "Skincare",
    duration: "60 mins",
    price: 3200,
    desc: "Deep pore cleansing, botanical steam, hyaluronic infusion, and chilled jade stone massage.",
  },
  {
    id: "balayage",
    name: "Luxe Balayage & Gloss Finish",
    category: "Hair",
    duration: "120 mins",
    price: 6500,
    desc: "Custom freehand dimensional color contouring with organic bonding treatment and blowout.",
  },
  {
    id: "massage",
    name: "Aromatherapy Deep Tension Massage",
    category: "Body",
    duration: "75 mins",
    price: 4200,
    desc: "Targeted full-body muscle release utilizing organic lavender and eucalyptus warm essential oils.",
  },
  {
    id: "pedi",
    name: "Spa Gel Manicure & Pedicure",
    category: "Nails",
    duration: "60 mins",
    price: 2400,
    desc: "Exfoliating salt scrub, paraffin treatment, nail shaping, and long-lasting non-toxic gel coat.",
  },
  {
    id: "haircut",
    name: "Signature Precision Cut & Styling",
    category: "Hair",
    duration: "45 mins",
    price: 1800,
    desc: "Personalized hair architecture consult, detoxifying scalp wash, precision haircut, and blowout.",
  },
];

const specialists = [
  { id: "elena", name: "Elena Rostova", role: "Master Esthetician", rating: "4.9 ★" },
  { id: "sophia", name: "Sophia Chen", role: "Senior Color Specialist", rating: "5.0 ★" },
  { id: "marcus", name: "Marcus Vance", role: "Holistic Body Therapist", rating: "4.9 ★" },
];

const timeSlots = ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"];

export default function SalonProject() {
  const [selectedServices, setSelectedServices] = useState([services[0]]);
  const [selectedSpecialist, setSelectedSpecialist] = useState(specialists[0]);
  const [selectedDate, setSelectedDate] = useState("Tomorrow, 2:30 PM");
  const [selectedSlot, setSelectedSlot] = useState("2:30 PM");
  const [activeCategory, setActiveCategory] = useState("All");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [clientInfo, setClientInfo] = useState({ name: "Aarav Sharma", phone: "+91 98765 01234", notes: "" });

  const toggleService = (service) => {
    if (selectedServices.find((s) => s.id === service.id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s.id !== service.id));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <div className="sample-salon-app">
      {/* Salon Header */}
      <header className="salon-header">
        <div className="salon-header-inner">
          <div className="salon-logo">
            <span className="salon-logo-icon">✦</span>
            <div>
              <h3>BLUSH & BLOOM</h3>
              <p>SALON & WELLNESS SPA</p>
            </div>
          </div>
          <div className="salon-header-meta">
            <span>Open Today: 9:00 AM – 8:00 PM</span>
            <a href="tel:+918446534749" className="salon-phone-link">
              📞 +91 84465 34749
            </a>
          </div>
        </div>
      </header>

      {/* Hero Welcome */}
      <section className="salon-hero">
        <div className="salon-hero-content">
          <p className="salon-eyebrow">INSTANT ONLINE RESERVATIONS</p>
          <h1>Reserve Your Personalized Beauty & Wellness Ritual</h1>
          <p className="salon-lead">
            Select treatments, pick your favorite stylist, and lock in your appointment in under 60 seconds with instant SMS confirmation.
          </p>
        </div>
      </section>

      {/* Main Booking Interface */}
      <section className="salon-booking-layout">
        <div className="salon-left-col">
          {/* Step 1: Select Services */}
          <div className="salon-card">
            <div className="salon-step-head">
              <span className="salon-step-num">1</span>
              <div>
                <h3>Select Services</h3>
                <p>Choose one or more treatments for your session</p>
              </div>
            </div>

            {/* Category tabs */}
            <div className="salon-cat-tabs">
              {["All", "Skincare", "Hair", "Body", "Nails"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`salon-cat-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="salon-services-list">
              {filteredServices.map((service) => {
                const isSelected = selectedServices.some((s) => s.id === service.id);
                return (
                  <div
                    key={service.id}
                    className={`salon-service-item ${isSelected ? "selected" : ""}`}
                    onClick={() => toggleService(service)}
                  >
                    <div className="service-info-col">
                      <div className="service-title-row">
                        <h4>{service.name}</h4>
                        <span className="service-duration">⏱ {service.duration}</span>
                      </div>
                      <p>{service.desc}</p>
                    </div>
                    <div className="service-action-col">
                      <span className="service-price">₹{service.price.toLocaleString()}</span>
                      <button
                        type="button"
                        className={`btn-toggle-service ${isSelected ? "btn-remove" : "btn-add"}`}
                      >
                        {isSelected ? "Selected ✓" : "+ Add"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 2: Choose Specialist & Schedule */}
          <div className="salon-card" style={{ marginTop: 24 }}>
            <div className="salon-step-head">
              <span className="salon-step-num">2</span>
              <div>
                <h3>Stylist & Available Time</h3>
                <p>Select your preferred professional and slot</p>
              </div>
            </div>

            {/* Specialist selection */}
            <div className="specialists-grid">
              {specialists.map((spec) => (
                <div
                  key={spec.id}
                  className={`specialist-card ${selectedSpecialist.id === spec.id ? "active" : ""}`}
                  onClick={() => setSelectedSpecialist(spec)}
                >
                  <div className="specialist-avatar">
                    {spec.name.slice(0, 1)}
                  </div>
                  <div>
                    <h5>{spec.name}</h5>
                    <span className="spec-role">{spec.role}</span>
                    <span className="spec-rating">{spec.rating}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Time Slot Picker */}
            <div className="slots-wrapper">
              <label>Select Preferred Time Slot:</label>
              <div className="slots-grid">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className={`slot-chip ${selectedSlot === slot ? "active" : ""}`}
                    onClick={() => {
                      setSelectedSlot(slot);
                      setSelectedDate(`Tomorrow, ${slot}`);
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sticky Booking Summary */}
        <div className="salon-right-col">
          <div className="booking-summary-card">
            <h3>Appointment Summary</h3>
            <div className="summary-section">
              <div className="summary-row">
                <span className="summary-label">Date & Time:</span>
                <span className="summary-val">{selectedDate}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Specialist:</span>
                <span className="summary-val">{selectedSpecialist.name}</span>
              </div>
            </div>

            <div className="summary-services-list">
              <span className="summary-label">Selected Treatments ({selectedServices.length}):</span>
              {selectedServices.map((s) => (
                <div className="summary-service-row" key={s.id}>
                  <span>{s.name}</span>
                  <strong>₹{s.price.toLocaleString()}</strong>
                </div>
              ))}
            </div>

            <div className="summary-total-row">
              <span>Total Estimated:</span>
              <span className="summary-total-price">₹{totalPrice.toLocaleString()}</span>
            </div>

            <form onSubmit={handleBookingSubmit} className="booking-form">
              <div className="input-group">
                <label>Your Name</label>
                <input
                  type="text"
                  required
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                />
              </div>
              <div className="input-group">
                <label>WhatsApp / Phone Number</label>
                <input
                  type="tel"
                  required
                  value={clientInfo.phone}
                  onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block btn-confirm-booking">
                Confirm Appointment (Pay at Salon) →
              </button>
            </form>
            <p className="summary-guarantee">
              🔒 Free cancellation up to 4 hours before your session.
            </p>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {bookingConfirmed && (
        <div className="salon-modal-backdrop" onClick={() => setBookingConfirmed(false)}>
          <div className="salon-receipt-modal" onClick={(e) => e.stopPropagation()}>
            <div className="receipt-check-circle">✓</div>
            <h2>Appointment Confirmed!</h2>
            <p className="receipt-subtitle">A confirmation SMS has been dispatched to {clientInfo.phone}</p>
            
            <div className="receipt-body">
              <div className="receipt-line">
                <span>Confirmation ID:</span>
                <strong>#BB-{Math.floor(100000 + Math.random() * 900000)}</strong>
              </div>
              <div className="receipt-line">
                <span>Client Name:</span>
                <strong>{clientInfo.name}</strong>
              </div>
              <div className="receipt-line">
                <span>Scheduled For:</span>
                <strong>{selectedDate}</strong>
              </div>
              <div className="receipt-line">
                <span>Specialist:</span>
                <strong>{selectedSpecialist.name} ({selectedSpecialist.role})</strong>
              </div>
              <div className="receipt-line">
                <span>Total Amount:</span>
                <strong className="receipt-green">₹{totalPrice.toLocaleString()}</strong>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={() => setBookingConfirmed(false)}
            >
              Done / Return to Salon App
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
