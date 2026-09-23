import React, { useEffect, useRef, useState } from "react";
import siteConfig from "../config.js";

// ---------------------------------------------------------------------------
// BrandText
// ---------------------------------------------------------------------------
// Renders the brand name + tagline and cycles them through every language in
// siteConfig.brand.languageRotation.languages.
//
// Reveal effect: the old name lifts away blurred, then the new name scrambles
// in — each letter tumbling through random glyphs of the target script before
// locking in one by one, left to right, while the tagline cross-fades below.
//
// LAYOUT STABILITY
// The scramble changes string width on every frame. To stop that from nudging
// the navbar around, the component renders two layers:
//
//   .brand-sizer  an invisible, in-flow copy of *every* language stacked in a
//                 single grid cell. It reserves the exact width of the widest
//                 language, so the block's box never changes size.
//
//   .brand-live   the animating copy, absolutely positioned on top of the
//                 sizer. Being out of flow, it cannot affect layout no matter
//                 how wide the scrambling text gets.
//
// Everything is driven from config.js — languages, timing and toggles.
// ---------------------------------------------------------------------------

// Glyph pools used while a letter is still scrambling.
const GLYPH_POOLS = {
  en: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef0123456789#%&@*",
  mr: "अआइईउऊएऐओऔकखगघचछजझञटठडढणतथदधनपफबभमयरलवशषसहािीुूेैोौंःँ",
};

// Characters that should never scramble (they carry meaning, not a letterform).
const NON_SCRAMBLE = new Set([" ", "·", "–", "—", "-", "/"]);

const randomChar = (pool) => pool.charAt(Math.floor(Math.random() * pool.length));

// A language may define `nameParts` to colour the name in segments
// ("Vinea" white + "Digital" purple). Fall back to one plain segment.
const partsFor = (lang) =>
  lang?.nameParts?.length ? lang.nameParts : [{ text: lang?.name ?? "", accent: false }];

// Flatten the coloured segments into one character list plus slice offsets,
// so the scramble can run across the whole name while each segment keeps
// its own colour.
function layoutParts(parts) {
  const chars = [];
  const slices = [];
  parts.forEach((part) => {
    const list = Array.from(part.text);
    slices.push({ start: chars.length, length: list.length, accent: part.accent });
    chars.push(...list);
  });
  return { chars, slices };
}

export default function BrandText() {
  const { brand } = siteConfig;
  const cfg = brand.languageRotation || {};
  const languages = cfg.languages || [];
  const isMulti = languages.length > 1;
  const showDots = Boolean(cfg.showIndicator) && isMulti;

  const [index, setIndex] = useState(0);
  const [shownIndex, setShownIndex] = useState(0);
  const [nameChars, setNameChars] = useState(() =>
    Array.from(languages[0]?.name ?? brand.name)
  );
  const [tagline, setTagline] = useState(languages[0]?.tagline ?? brand.tagline);
  const [phase, setPhase] = useState("idle"); // idle | out | in

  const frameRef = useRef(0);
  const swapTimerRef = useRef(0);
  const tagTimerRef = useRef(0);

  const current = languages[index] || languages[0];
  const parts = partsFor(current);
  const { slices } = layoutParts(parts);

  // Honour the OS "reduce motion" setting by skipping the scramble.
  const reducedMotion =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ----- 1. Automatically advance to the next language ---------------------
  useEffect(() => {
    if (!isMulti || !cfg.enabled) return undefined;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % languages.length);
    }, cfg.intervalMs ?? 5000);
    return () => window.clearInterval(id);
  }, [isMulti, cfg.enabled, cfg.intervalMs, languages.length]);

  // ----- 2. Play the transition whenever the language changes --------------
  useEffect(() => {
    if (!current) return undefined;

    const targetName = current.name || "";
    const targetTagline = current.tagline || "";

    // Single language, rotation off, or reduced motion → plain swap.
    if (!isMulti || !cfg.enabled || reducedMotion) {
      setNameChars(Array.from(targetName));
      setTagline(targetTagline);
      setShownIndex(index);
      setPhase("idle");
      return undefined;
    }

    const pool = GLYPH_POOLS[current.code] || GLYPH_POOLS.en;
    const scrambleMs = cfg.scrambleMs ?? 850;
    const staggerMs = cfg.staggerMs ?? 45;
    const exitMs = 280;
    const chars = Array.from(targetName);

    // 2a. Animate the current name out.
    setPhase("out");

    // 2b. Then scramble the new name in, letter by letter.
    swapTimerRef.current = window.setTimeout(() => {
      setPhase("in");
      const startedAt = performance.now();
      const finishAt = startedAt + scrambleMs + staggerMs * Math.max(chars.length - 1, 0);
      let lastPaint = 0;

      const tick = (now) => {
        const elapsed = now - startedAt;

        // ~25fps is plenty for a glitch effect and keeps the main thread free.
        if (now - lastPaint >= 40) {
          lastPaint = now;
          const settled = chars.map((ch, i) => {
            if (NON_SCRAMBLE.has(ch)) return ch;
            const lockAt = i * staggerMs;
            if (elapsed >= lockAt + scrambleMs) return ch;
            // Let letters start locking in during the last quarter so the
            // word visibly resolves instead of flickering to the end.
            const progress = (elapsed - lockAt) / scrambleMs;
            if (progress > 0.75 && Math.random() < (progress - 0.75) * 3.4) return ch;
            return randomChar(pool);
          });
          setNameChars(settled);
        }

        if (elapsed < finishAt) {
          frameRef.current = window.requestAnimationFrame(tick);
        } else {
          setNameChars(chars);
          setPhase("idle");
        }
      };

      frameRef.current = window.requestAnimationFrame(tick);
    }, exitMs);

    // 2c. Cross-fade the tagline + move the indicator once the swap begins.
    tagTimerRef.current = window.setTimeout(() => {
      setTagline(targetTagline);
      setShownIndex(index);
    }, exitMs + 140);

    return () => {
      window.clearTimeout(swapTimerRef.current);
      window.clearTimeout(tagTimerRef.current);
      window.cancelAnimationFrame(frameRef.current);
    };
  }, [index, isMulti, cfg.enabled, cfg.scrambleMs, cfg.staggerMs, reducedMotion, current]);

  if (!current) return null;

  // Renders one coloured segment of the name.
  const renderPart = (slice) =>
    nameChars.slice(slice.start, slice.start + slice.length).join("");

  return (
    <span className="brand-text">
      {/* ---- Sizer layer: reserves the widest possible box, never visible ---- */}
      <span className="brand-sizer" aria-hidden="true">
        <span className="brand-sizer-name">
          {languages.map((lang) => (
            <span key={lang.code} className="brand-name" lang={lang.htmlLang || lang.code}>
              {partsFor(lang).map((part, i) => (
                <span key={i} className={part.accent ? "brand-accent" : undefined}>
                  {part.text}
                </span>
              ))}
            </span>
          ))}
        </span>
        <span className="brand-sizer-tag">
          {languages.map((lang) => (
            <span key={lang.code} className="logo-sub" lang={lang.htmlLang || lang.code}>
              {lang.tagline}
            </span>
          ))}
        </span>
        {showDots && <span className="brand-dots-spacer" />}
      </span>

      {/* ---- Live layer: out of flow, so the scramble can't shift layout ---- */}
      <span className="brand-live" aria-hidden="true">
        <span
          className={`brand-name brand-name-${phase}`}
          lang={current.htmlLang || current.code}
        >
          {slices.map((slice, i) => (
            <span key={i} className={slice.accent ? "brand-accent" : undefined}>
              {renderPart(slice)}
            </span>
          ))}
        </span>

        <span
          key={`tag-${shownIndex}`}
          className="logo-sub brand-tagline"
          lang={current.htmlLang || current.code}
        >
          {tagline}
        </span>

        {showDots && (
          <span className="brand-dots">
            {languages.map((lang, i) => (
              <span key={lang.code} className={`brand-dot ${i === shownIndex ? "is-active" : ""}`} />
            ))}
          </span>
        )}
      </span>

      {/* Screen readers always get the canonical, static brand name */}
      <span className="sr-only">{brand.name}</span>
    </span>
  );
}
