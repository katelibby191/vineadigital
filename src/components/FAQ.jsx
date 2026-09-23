import React, { useState } from "react";
import Icon from "./Icon.jsx";
import siteConfig from "../config.js";

export default function FAQ() {
  const { faq } = siteConfig;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="wrap faq-layout">
        <div className="faq-sidebar">
          <div className="section-head">
            <p className="eyebrow-light">{faq.eyebrow}</p>
            <h2>{faq.heading}</h2>
            <p>{faq.description}</p>
          </div>
        </div>

        <div className="faq-list-container">
          <div className="faq-list">
            {faq.items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.question}>
                  <button
                    type="button"
                    className="faq-q"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <Icon
                      name={isOpen ? "minus" : "plus"}
                      size={15}
                      strokeWidth={2.5}
                      className="faq-toggle-icon"
                    />
                  </button>
                  {isOpen && <p className="faq-a">{item.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
