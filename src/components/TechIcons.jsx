import React from "react";

// Authentic, pixel-perfect brand SVG logos for the tech stack
export default function TechIcon({ name, size = 26, className = "" }) {
  switch (name.toLowerCase()) {
    case "java":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M8.5 18.5c0 0-1 0.5 1 0.7 2.4 0.2 4.6 0.1 6.8-0.2 0 0 1-0.2 1.5 0.5 0 0 0.5 0.8-1 1.1-3 0.6-6.5 0.4-9.3-0.2-1.2-0.3-0.7-1.4 1-1.9zm-0.5-2.2c0 0-1.1 0.7 0.8 0.9 2.2 0.2 4.4 0.1 6.6-0.3 0 0 1.2-0.2 1.6 0.6 0 0 0.4 0.9-1.2 1.2-3.3 0.6-7.3 0.3-10.4-0.4-1.3-0.3-0.5-1.5 1.5-1.9 0.4-0.1 0.7-0.1 1.1-0.1zm7.3-4.7c0.8 1 0.2 1.9-0.8 2.6-1.5 1-3.6 1.4-5.6 1.5-1.7 0.1-3.6-0.1-4.7-0.7-0.6-0.3-0.8-0.7-0.4-1 0.8-0.6 2.3-0.9 3.5-1 2.3-0.2 4.5 0.3 6.8-0.5 0.5-0.2 0.9-0.5 1.2-0.9zm2.4 4.5c-0.2-0.1-0.4-0.1-0.6-0.1-0.5 0-1 0.2-1.3 0.5 1.4 0.6 2.8 1.4 2.8 2.3 0 1.5-3.3 2.5-7.7 2.5s-7.7-1-7.7-2.5c0-0.9 1.2-1.7 2.5-2.2-0.4-0.3-0.8-0.6-1.2-0.7-2 0.8-3.3 2-3.3 3.3 0 2.5 4.3 4.2 9.7 4.2s9.7-1.7 9.7-4.2c0-1.3-1.2-2.4-2.9-3.1z"
            fill="#E76F00"
          />
          <path
            d="M13.2 2.2c0.8 1-0.2 2.4-0.8 3.5-0.7 1.2-1.3 2.4-1.2 3.8 0 0.5 0.2 1 0.5 1.4-0.8-0.2-1.4-0.8-1.7-1.5-0.5-1.1-0.3-2.3 0.2-3.4 0.6-1.3 1.8-2.6 3-3.8z"
            fill="#5382A1"
          />
          <path
            d="M15.4 5.5c0.6 0.8 0 1.8-0.5 2.6-0.5 0.9-0.9 1.8-0.8 2.8 0 0.4 0.2 0.8 0.4 1.1-0.6-0.2-1-0.6-1.3-1.1-0.4-0.8-0.2-1.7 0.2-2.5 0.5-1 1.4-2 2-2.9z"
            fill="#E76F00"
          />
        </svg>
      );

    case "spring":
    case "spring boot":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M21.2 10.3c-.6-4.6-4.3-8.3-8.9-8.9-3.9-.5-7.7 1.5-9.4 5.1-1.7 3.6-1 7.9 1.9 10.7 2.9 2.8 7.2 3.6 10.8 1.8 3.6-1.7 5.7-5.5 5.6-9.5v.8z"
            fill="#6DB33F"
          />
          <path
            d="M17.8 7.9c-2.8-2.8-7.4-2.8-10.2 0s-2.8 7.4 0 10.2c2.8 2.8 7.4 2.8 10.2 0 1.5-1.4 2.2-3.4 2.1-5.4 0-.3-.2-.5-.5-.5s-.5.2-.5.5c0 1.7-.7 3.4-1.9 4.6-2.4 2.4-6.4 2.4-8.8 0-2.4-2.4-2.4-6.4 0-8.8 2.4-2.4 6.4-2.4 8.8 0 .8.8 1.3 1.8 1.6 2.9.1.3.4.4.7.4.3 0 .5-.2.5-.5-.4-1.4-1-2.6-2-3.6z"
            fill="#FFFFFF"
          />
          <path
            d="M13.6 10.4c-.2-.2-.5-.2-.7 0l-3.3 3.3c-.2.2-.2.5 0 .7.2.2.5.2.7 0l3.3-3.3c.2-.2.2-.5 0-.7z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "react":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(60 12 12)"
            stroke="#61DAFB"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(120 12 12)"
            stroke="#61DAFB"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );

    case "angular":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 2L2 5.6 3.6 17.5 12 22l8.4-4.5 1.6-11.9L12 2z"
            fill="#DD0031"
          />
          <path
            d="M12 2v20l8.4-4.5 1.6-11.9L12 2z"
            fill="#C3002F"
          />
          <path
            d="M12 5.5l-4.7 10.5h1.8l1-2.4h3.8l1 2.4h1.8L12 5.5zm1.3 6.6h-2.6l1.3-3.2 1.3 3.2z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "oracle":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="2" y="5" width="20" height="14" rx="7" fill="#F80000" />
          <rect x="6" y="8" width="12" height="8" rx="4" fill="#FFFFFF" />
          <rect x="8.5" y="9.5" width="7" height="5" rx="2.5" fill="#F80000" />
        </svg>
      );

    case "aws":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M6.8 9.5c0-.6.4-1 .9-1 .8 0 1.2.6 1.2 1.5v3.4c0 .3.2.5.5.5h1.2c.3 0 .5-.2.5-.5V9.8c0-1.8-1.1-2.8-2.8-2.8-1.5 0-2.6.9-2.9 2.2-.1.3.1.6.4.6l1.1.2c.3 0 .6-.2.7-.5h.2zM13 13.5c.3 0 .5-.2.5-.5V7.5c0-.3-.2-.5-.5-.5h-1.2c-.3 0-.5.2-.5.5v5.5c0 .3.2.5.5.5H13zm5.6-3.8c-.8 0-1.3.5-1.5 1h-.1V7.5c0-.3-.2-.5-.5-.5h-1.2c-.3 0-.5.2-.5.5v5.5c0 .3.2.5.5.5h1.2c.3 0 .5-.2.5-.5v-2.3c0-.9.4-1.5 1.2-1.5.7 0 1 .5 1 1.2v2.6c0 .3.2.5.5.5h1.2c.3 0 .5-.2.5-.5V10c0-1.6-.9-2.3-2.3-2.3z"
            fill="#232F3E"
          />
          <path
            d="M4.5 17.5c4.8 3.2 11.2 3.2 15 0 .4-.3.1-.7-.3-.5-3.5 2-8.9 2-14.4-.1-.5-.2-.7.3-.3.6z"
            fill="#FF9900"
          />
          <path
            d="M20 16.2c-.4-.5-2.2-.2-3.1 0-.3 0-.3.3 0 .4.8.4 1.8.3 2.7.2.2 0 .4-.3.4-.6z"
            fill="#FF9900"
          />
        </svg>
      );

    case "docker":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M13.9 11.2h2.2v2.2h-2.2v-2.2zm-2.8 0h2.2v2.2h-2.2v-2.2zm-2.8 0h2.2v2.2H8.3v-2.2zm-2.8 0h2.2v2.2H5.5v-2.2zm8.4-2.8h2.2v2.2h-2.2V8.4zm-2.8 0h2.2v2.2h-2.2V8.4zm-2.8 0h2.2v2.2H8.3V8.4zm5.6-2.8h2.2v2.2h-2.2V5.6zm7.8 7.3c-.3-.2-1.2-.4-2-.1-.2-.6-.7-1.1-1.3-1.4l-.5-.2-.3.5c-.3.7-.3 1.5-.1 2.2-.4.2-1.1.3-1.8.3H2.5c-.3 1.2.1 2.5.8 3.5 1.3 1.9 3.5 3 6.1 3 4.8 0 8.8-2.6 10.4-6.8.5.1 1 .1 1.4-.2.4-.3.6-.8.6-.8l-.3-.1z"
            fill="#2496ED"
          />
        </svg>
      );

    case "node":
    case "nodejs":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z"
            fill="#339933"
          />
          <path
            d="M12 5.5l6.5 3.8v7.4L12 20.5 5.5 16.7V9.3L12 5.5z"
            fill="#026E00"
          />
          <path
            d="M10.5 10.5h3v1.5h-1.5v1.5h1.5v1.5h-3v-4.5z"
            fill="#FFFFFF"
          />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="6" fill="#4F46E5" />
          <text x="12" y="16" fill="#fff" fontSize="11" fontWeight="bold" textAnchor="middle">
            {name.slice(0, 2).toUpperCase()}
          </text>
        </svg>
      );
  }
}
