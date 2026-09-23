import React, { useState } from "react";
import Icon from "../components/Icon.jsx";

const menuItems = [
  {
    id: "wagyu",
    name: "A5 Miyazaki Wagyu Ribeye",
    category: "Entrees",
    price: 3450,
    desc: "Truffle potato mousseline, charred asparagus, red wine marrow jus.",
    image: "/project-restaurant.jpg",
    tags: ["Chef's Signature", "Gluten Free"],
  },
  {
    id: "scallops",
    name: "Pan-Seared Hokkaido Scallops",
    category: "Starters",
    price: 1850,
    desc: "Sweet pea emulsion, crispy pancetta lardons, black truffle pearls.",
    image: "/project-restaurant.jpg",
    tags: ["Seafood", "Popular"],
  },
  {
    id: "risotto",
    name: "Wild Morel & Lobster Risotto",
    category: "Entrees",
    price: 2650,
    desc: "Carnaroli rice, butter-poached Maine lobster tail, shaved Parmigiano-Reggiano.",
    image: "/project-restaurant.jpg",
    tags: ["Signature"],
  },
  {
    id: "burrata",
    name: "Artisanal Burrata & Heirloom Tomato",
    category: "Starters",
    price: 1250,
    desc: "Aged balsamic reduction, micro basil pesto, toasted sourdough crisps.",
    image: "/project-restaurant.jpg",
    tags: ["Vegetarian"],
  },
  {
    id: "dessert",
    name: "Valrhona Molten Chocolate Sphere",
    category: "Desserts",
    price: 950,
    desc: "Warm dark chocolate core, Madagascan vanilla bean gelato, gold leaf flake.",
    image: "/project-restaurant.jpg",
    tags: ["Dessert", "Vegetarian"],
  },
  {
    id: "wine",
    name: "Château Margaux Grand Cru 2015",
    category: "Wines",
    price: 4800,
    desc: "Full-bodied Bordeaux with notes of cassis, black truffle, and toasted cedar.",
    image: "/project-restaurant.jpg",
    tags: ["Vintage Reserve"],
  },
];

export default function RestaurantProject() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState([
    { ...menuItems[0], qty: 1 },
    { ...menuItems[1], qty: 1 },
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [checkoutDone, setCheckoutDone] = useState(false);
  const [reservationDone, setReservationDone] = useState(false);

  const [reserveData, setReserveData] = useState({
    guests: "2 Guests",
    date: "Today, 8:00 PM",
    name: "Ninad Pednekar",
    phone: "+91 84465 34749",
  });

  const addToCart = (item) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
    setCartOpen(true);
  };

  const updateQty = (id, delta) => {
    setCart(
      cart
        .map((c) => (c.id === id ? { ...c, qty: c.qty + delta } : c))
        .filter((c) => c.qty > 0)
    );
  };

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((m) => m.category === activeCategory);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = subtotal > 0 ? 150 : 0;
  const taxes = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + delivery + taxes;

  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="sample-restaurant-app">
      {/* Restaurant Header */}
      <header className="restaurant-nav">
        <div className="restaurant-nav-inner">
          <div className="restaurant-brand">
            <h2>THE BLACK TRUFFLE</h2>
            <span>FINE DINING & GASTRONOMY</span>
          </div>
          <div className="restaurant-nav-right">
            <button
              type="button"
              className="btn btn-ghost-dark btn-sm"
              onClick={() => setReservationOpen(true)}
            >
              📅 Reserve a Table
            </button>
            <button
              type="button"
              className="restaurant-cart-btn"
              onClick={() => setCartOpen(true)}
            >
              <Icon name="cart" size={17} />
              <span>Order ({totalCartCount})</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Showcase */}
      <section
        className="restaurant-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 11, 15, 0.7), rgba(10, 11, 15, 0.9)), url('/project-restaurant.jpg')`,
        }}
      >
        <div className="restaurant-hero-content">
          <p className="restaurant-eyebrow">MICHELIN-GUIDED EXPERIENCE</p>
          <h1>Exquisite Dining, Delivered to Your Table</h1>
          <p className="restaurant-sub">
            Indulge in artisanal culinary creations crafted by Chef Laurent Moreau. Order for curbside dining or secure a table reservation for this evening.
          </p>
          <div className="restaurant-hero-btns">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                const el = document.getElementById("restaurant-menu");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Today's Menu ↓
            </button>
            <button
              type="button"
              className="btn btn-ghost-dark"
              onClick={() => setReservationOpen(true)}
            >
              Reserve a Table Online
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Menu Section */}
      <section className="restaurant-menu-section" id="restaurant-menu">
        <div className="restaurant-wrap">
          <div className="menu-header">
            <h3>Seasonal Tasting Menu</h3>
            <div className="menu-cat-pills">
              {["All", "Starters", "Entrees", "Desserts", "Wines"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`menu-pill ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="menu-grid">
            {filteredItems.map((dish) => (
              <div className="dish-card" key={dish.id}>
                <div
                  className="dish-thumb"
                  style={{ backgroundImage: `url(${dish.image})` }}
                >
                  <div className="dish-tag-row">
                    {dish.tags.map((t) => (
                      <span className="dish-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="dish-body">
                  <div className="dish-title-row">
                    <h4>{dish.name}</h4>
                    <span className="dish-price">₹{dish.price.toLocaleString()}</span>
                  </div>
                  <p>{dish.desc}</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-block btn-add-dish"
                    onClick={() => addToCart(dish)}
                  >
                    + Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="cart-backdrop" onClick={() => setCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-drawer-head">
              <h3>Your Order Summary ({totalCartCount})</h3>
              <button
                type="button"
                className="btn-close-drawer"
                onClick={() => setCartOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="cart-items-scroll">
              {cart.length === 0 ? (
                <p className="cart-empty-text">Your basket is currently empty.</p>
              ) : (
                cart.map((item) => (
                  <div className="cart-item-row" key={item.id}>
                    <div className="cart-item-meta">
                      <h5>{item.name}</h5>
                      <span className="cart-item-unit">₹{item.price.toLocaleString()}</span>
                    </div>
                    <div className="cart-qty-ctrl">
                      <button type="button" onClick={() => updateQty(item.id, -1)}>−</button>
                      <span>{item.qty}</span>
                      <button type="button" onClick={() => updateQty(item.id, 1)}>+</button>
                    </div>
                    <span className="cart-item-sub">
                      ₹{(item.price * item.qty).toLocaleString()}
                    </span>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-drawer-footer">
                <div className="cart-calc-line">
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="cart-calc-line">
                  <span>Taxes (5% GST):</span>
                  <span>₹{taxes.toLocaleString()}</span>
                </div>
                <div className="cart-calc-line">
                  <span>Priority Packaging:</span>
                  <span>₹{delivery.toLocaleString()}</span>
                </div>
                <div className="cart-total-line">
                  <span>Total Amount:</span>
                  <strong>₹{grandTotal.toLocaleString()}</strong>
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-block btn-checkout"
                  onClick={() => {
                    setCheckoutDone(true);
                    setCartOpen(false);
                  }}
                >
                  Proceed to Checkout (₹{grandTotal.toLocaleString()}) →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reservation Modal */}
      {reservationOpen && (
        <div className="cart-backdrop" onClick={() => setReservationOpen(false)}>
          <div className="reservation-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="btn-close-drawer"
              onClick={() => setReservationOpen(false)}
            >
              ✕
            </button>
            <h3>Reserve a Table at The Black Truffle</h3>
            <p className="res-sub">Enjoy an unforgettable culinary experience with personalized table service.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setReservationOpen(false);
                setReservationDone(true);
              }}
              className="res-form"
            >
              <div className="form-row">
                <div className="input-group">
                  <label>Guests</label>
                  <select
                    value={reserveData.guests}
                    onChange={(e) => setReserveData({ ...reserveData, guests: e.target.value })}
                  >
                    <option>2 Guests</option>
                    <option>4 Guests</option>
                    <option>6 Guests</option>
                    <option>Private Dining (8+ Guests)</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Preferred Time</label>
                  <select
                    value={reserveData.date}
                    onChange={(e) => setReserveData({ ...reserveData, date: e.target.value })}
                  >
                    <option>Today, 7:00 PM</option>
                    <option>Today, 8:00 PM</option>
                    <option>Today, 9:30 PM</option>
                    <option>Tomorrow, 8:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="input-group">
                <label>Contact Name</label>
                <input
                  type="text"
                  required
                  value={reserveData.name}
                  onChange={(e) => setReserveData({ ...reserveData, name: e.target.value })}
                />
              </div>

              <div className="input-group">
                <label>Phone / WhatsApp Confirmation</label>
                <input
                  type="tel"
                  required
                  value={reserveData.phone}
                  onChange={(e) => setReserveData({ ...reserveData, phone: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Lock in Reservation →
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Checkout Success Modal */}
      {checkoutDone && (
        <div className="cart-backdrop" onClick={() => setCheckoutDone(false)}>
          <div className="receipt-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="receipt-check-circle">✓</div>
            <h2>Order Placed Successfully!</h2>
            <p>Your culinary order has been received by the kitchen and is being curated with utmost care.</p>
            <div className="receipt-summary-box">
              <p>Estimated Preparation & Delivery: <strong>35 minutes</strong></p>
              <p>Order Total: <strong>₹{grandTotal.toLocaleString()}</strong></p>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={() => {
                setCheckoutDone(false);
                setCart([]);
              }}
            >
              Back to Dining Menu
            </button>
          </div>
        </div>
      )}

      {/* Reservation Confirmation Modal */}
      {reservationDone && (
        <div className="cart-backdrop" onClick={() => setReservationDone(false)}>
          <div className="receipt-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="receipt-check-circle">🥂</div>
            <h2>Table Reserved!</h2>
            <p>We are delighted to welcome you to The Black Truffle.</p>
            <div className="receipt-summary-box">
              <p>Table For: <strong>{reserveData.guests}</strong></p>
              <p>Time: <strong>{reserveData.date}</strong></p>
              <p>Reserved Under: <strong>{reserveData.name}</strong></p>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={() => setReservationDone(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
