// ---------------------------------------------------------------------------
// site.config.js
// Every piece of copy, every link, every price on the page is read from this
// file. Edit the values here — you should never need to touch the component
// files just to change text, links, or contact details.
// ---------------------------------------------------------------------------

const siteConfig = {
  brand: {
    name: "VineaDigital",
    tagline: "Ideas · Websites · Apps · Growth",

    // ---------------------------------------------------------------------
    // Multi-language brand rotation
    // ---------------------------------------------------------------------
    // The brand name and tagline automatically cycle through the languages
    // listed below with a scramble-style reveal animation.
    //
    //   enabled           turn the rotation on / off
    //   intervalMs        how long a language stays on screen before swapping
    //   scrambleMs        how long a single letter tumbles before it locks in
    //   staggerMs         delay between each letter locking in (left to right)
    //   showIndicator     render the small language dots under the name
    //   languages         the actual translations, in rotation order
    //
    // A language can split its name into coloured segments with `nameParts`,
    // so "Vinea" stays white while "Digital" picks up the brand purple —
    // matching the wordmark in the logo lockup.
    languageRotation: {
      enabled: true,
      intervalMs: 5000,
      scrambleMs: 850,
      staggerMs: 45,
      showIndicator: true,
      languages: [
        {
          code: "en",
          label: "English",
          htmlLang: "en",
          name: "VineaDigital",
          nameParts: [
            { text: "Vinea", accent: false },
            { text: "Digital", accent: true },
          ],
          tagline: "Ideas · Websites · Apps · Growth",
        },
        {
          code: "mr",
          label: "मराठी",
          htmlLang: "mr",
          name: "विनेआ डिजिटल",
          nameParts: [
            { text: "विनेआ ", accent: false },
            { text: "डिजिटल", accent: true },
          ],
          tagline: "आयडिया · वेबसाइट्स · ॲप्स · वाढ",
        },
      ],
    },
  },

  nav: {
    links: [
      { label: "Home", href: "#top" },
      { label: "What I Do", href: "#features" },
      { label: "Solutions", href: "#solutions" },
      { label: "Portfolio", href: "#projects" },
      { label: "Packages", href: "#pricing" },
      { label: "How It Works", href: "#process" },
      { label: "About", href: "#about" },
      { label: "FAQ", href: "#faq" },
    ],
    ctaLabel: "Get a Free Quote",
    // Shorter variant swapped in on narrow screens via CSS
    ctaLabelShort: "Get Quote",
    ctaHref: "#cta",
  },

  hero: {
    eyebrow: "TAKE YOUR BUSINESS ONLINE",
    headline: ["Your Business.", "Online.", "Beautifully."],
    accentWord: "Online.",
    subhead:
      "We turn local businesses, artists and professionals into powerful online brands — with websites, booking systems, e-commerce and custom digital solutions.",
    primaryCta: { label: "Start Your Project", href: "#pricing" },
    secondaryCta: { label: "View Our Work", href: "#projects" },
    trustPoints: [
      "Modern & Responsive Designs",
      "Fast & Secure Performance",
      "Dedicated Support & Maintenance",
    ],
    note: "Beautiful websites for real businesses",
    mockup: {
      bgImage: "/art-soul.jpg",
      browserTitle: "Art & Soul",
      browserSubtitle: "Original Paintings · Prints · Commissions",
      browserCtaLabel: "Explore Collection",
      phoneTitle: "Art & Soul",
      phoneSubtitle: "Original Artwork for your space",
      phoneCtaLabel: "Shop Now",
    },
  },

  features: {
    eyebrow: "WHAT WE BUILD",
    heading: "Complete Digital Solutions for Your Business",
    description:
      "From simple websites to powerful business applications, we create solutions that help you get more customers, manage your operations and grow online.",
    items: [
      {
        title: "Business Websites",
        description: "Professional websites that build trust and create opportunities.",
        icon: "globe",
      },
      {
        title: "E-commerce Stores",
        description: "Sell your products online with secure payments.",
        icon: "cart",
      },
      {
        title: "Booking Systems",
        description: "Let your customers book, schedule and pay online.",
        icon: "calendar",
      },
      {
        title: "Custom Web Applications",
        description: "Tailored solutions for your unique business needs.",
        icon: "code",
      },
      {
        title: "Mobile Apps",
        description: "Reach your customers anytime, anywhere with mobile apps.",
        icon: "phone",
      },
    ],
  },

  transformation: {
    eyebrow: "THE TRANSFORMATION",
    heading: "From Offline → Online",
    description:
      "We help you go digital, so you can reach more customers, work smarter and grow faster.",
    photo: "/florist.jpg",
    note: "More visibility.\nMore customers.\nMore growth.",
    steps: [
      { label: "Your Business", icon: "store" },
      { label: "Website", icon: "globe" },
      { label: "Online Enquiries", icon: "inbox", active: true },
      { label: "Bookings / Payments", icon: "calendar" },
      { label: "Customer Management", icon: "users" },
      { label: "Business Growth", icon: "trendingUp" },
    ],
    stats: [
      { label: "Online Bookings", value: "+245%", trend: "up" },
      { label: "Website Visitors", value: "12.4K", trend: "up" },
    ],
  },

  projects: {
    eyebrow: "FEATURED WORK",
    heading: "Our Recent Projects",
    description:
      "Real businesses. Real results. Click any project below to explore the full interactive live demo we built.",
    viewAllLabel: "View All Projects",
    items: [
      {
        id: "artist",
        title: "Artist Portfolio Website",
        meta: "Gallery · Inquiries · Prints",
        tag: "Artist",
        category: "Websites",
        image: "/project-artist.jpg",
        thumbGradient: "linear-gradient(150deg,#3a3060,#c98a5a)",
        badge: "Live Interactive Demo",
      },
      {
        id: "salon",
        title: "Salon Booking System",
        meta: "Appointments · Calendar · Slots",
        tag: "Salon",
        category: "Booking",
        image: "/project-salon.jpg",
        thumbGradient: "linear-gradient(150deg,#f4e8df,#e7b8a3)",
        badge: "Live Interactive Demo",
      },
      {
        id: "restaurant",
        title: "Restaurant Website",
        meta: "Menu · Online Ordering · Booking",
        tag: "Restaurant",
        category: "E-Commerce",
        image: "/project-restaurant.jpg",
        thumbGradient: "linear-gradient(150deg,#2c2620,#8a5a3c)",
        badge: "Live Interactive Demo",
      },
      {
        id: "dashboard",
        title: "Business Dashboard",
        meta: "CRM · Analytics · Management",
        tag: "Business",
        category: "Web Apps",
        image: "/project-dashboard.svg",
        thumbGradient: "linear-gradient(150deg,#eef1fb,#c7d0f2)",
        badge: "Live Interactive Demo",
      },
      {
        id: "fitpulse",
        title: "FitPulse Fitness & Wellness",
        meta: "Workouts · Nutrition · Coach Booking",
        tag: "Fitness",
        category: "Web Apps",
        image: "/art-soul.jpg",
        thumbGradient: "linear-gradient(135deg, #10B981, #059669)",
        badge: "Coming Soon",
        comingSoon: true,
      },
      {
        id: "luxeliving",
        title: "LuxeLiving Real Estate Portal",
        meta: "Property Listings · 3D Tours · Inquiries",
        tag: "Real Estate",
        category: "Websites",
        image: "/florist.jpg",
        thumbGradient: "linear-gradient(135deg, #6366F1, #3B82F6)",
        badge: "Coming Soon",
        comingSoon: true,
      },
      {
        id: "sweetcrumb",
        title: "SweetCrumb Artisan Bakery",
        meta: "Online Orders · Custom Cakes · Delivery",
        tag: "Bakery",
        category: "E-Commerce",
        image: "/project-restaurant.jpg",
        thumbGradient: "linear-gradient(135deg, #F59E0B, #D97706)",
        badge: "Coming Soon",
        comingSoon: true,
      },
      {
        id: "cloudflow",
        title: "CloudFlow DevSecOps Platform",
        meta: "Cloud Metrics · CI/CD · Alerts",
        tag: "SaaS",
        category: "Web Apps",
        image: "/project-dashboard.svg",
        thumbGradient: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
        badge: "Coming Soon",
        comingSoon: true,
      },
    ],
  },

  pricing: {
    eyebrow: "PRICING",
    heading: "Simple, Transparent Packages",
    description:
      "Choose the package that fits your needs. Need something different? Let's discuss your requirements.",
    customCta: { label: "Get a Custom Quote", href: "#cta" },
    currency: "₹",
    tiers: [
      {
        name: "Starter",
        subtitle: "Perfect for individuals & small businesses",
        price: "10,000+",
        popular: false,
        features: [
          "5 page website",
          "Mobile responsive",
          "Contact form",
          "Basic SEO",
          "SSL & deployment",
        ],
        ctaLabel: "Get Started",
        ctaHref: "#cta",
      },
      {
        name: "Business",
        subtitle: "For growing businesses",
        price: "25,000+",
        popular: true,
        badgeLabel: "Most Popular",
        features: [
          "8–12 page website",
          "Gallery / Portfolio",
          "Enquiry system",
          "WhatsApp integration",
          "Google Business setup",
          "Admin panel",
        ],
        ctaLabel: "Get Started",
        ctaHref: "#cta",
      },
      {
        name: "Custom",
        subtitle: "For complex business needs",
        price: "40,000+",
        popular: false,
        features: [
          "Custom web / mobile app",
          "Booking & payment systems",
          "Customer management",
          "Advanced analytics",
          "API integrations",
          "Ongoing support",
        ],
        ctaLabel: "Discuss Your Project",
        ctaHref: "#cta",
      },
    ],
  },

  process: {
    heading: "How It Works",
    note: "Most projects go live in 1–4 weeks, depending on scope.",
    steps: [
      {
        title: "Tell us about your business",
        description: "Share your goals, needs and ideas over a quick call.",
        icon: "chat",
      },
      {
        title: "We agree the scope",
        description: "You get a clear plan, timeline and fixed quote upfront.",
        icon: "check",
      },
      {
        title: "We design",
        description: "Mockups and layouts are agreed before any code is written.",
        icon: "palette",
      },
      {
        title: "We build",
        description: "Responsive development, testing and performance tuning.",
        icon: "code",
      },
      {
        title: "You review",
        description: "See a live preview and request changes before we launch.",
        icon: "users",
      },
      {
        title: "We launch & support",
        description: "Go live, then keep the site maintained and improving.",
        icon: "rocket",
      },
    ],
  },

  whyUs: {
    heading: "Your Success is Our Priority",
    points: [
      "Business-focused solutions, not just code",
      "Clean, modern and responsive design",
      "Mobile-first builds that work on every device",
      "Fast, SEO-ready sites with lightweight pages",
      "Secure hosting, SSL and deployment handled end to end",
      "On-time delivery and transparent communication",
      "You work directly with the person building your project",
      "Training and handover so you can update content yourself",
      "Ongoing support and maintenance after launch",
      "Flexible pricing and tailored packages",
    ],
  },

  about: {
    heading: "Hi, I'm Ninad Pednekar",
    role: "Software Engineer",
    bio:
      "I'm a full-time Software Engineer with around 5 years of experience in software design, development and deployment. My day job is building enterprise applications at an IT firm — large, long-lived systems where reliability, scalability and clean architecture really matter. Alongside that, I help local businesses, artists and professionals build their online presence with modern websites, applications and digital marketing support.",
    ctaLabel: "Learn More About Me",
    ctaHref: "https://www.linkedin.com/in/ninad-pednekar-17a185357/",
    logos: [
      { name: "Java", label: "Java" },
      { name: "Spring", label: "Spring Boot" },
      { name: "React", label: "React" },
      { name: "Angular", label: "Angular" },
      { name: "Oracle", label: "Oracle" },
      { name: "AWS", label: "AWS" },
      { name: "Docker", label: "Docker" },
      { name: "Node", label: "Node.js" },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    description: "Quick answers to common questions. Still have questions? Feel free to reach out.",
    items: [
      {
        question: "Do you include hosting and domain in the price?",
        answer:
          "Hosting and domain setup can be included as part of your package, or I can help you set things up under your own accounts — whichever you prefer.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "Most Starter sites take 1–2 weeks, Business packages 2–4 weeks, and Custom builds depend on scope — I'll give you a clear timeline after our first call.",
      },
      {
        question: "Can I update the content myself?",
        answer:
          "Yes. Every site comes with a simple admin panel so you can update text, images and offers without touching any code.",
      },
      {
        question: "Do you provide support after launch?",
        answer:
          "Every package includes a maintenance window after launch, and ongoing support plans are available if you'd like continued help.",
      },
      {
        question: "What if I need additional features later?",
        answer:
          "All our solutions are built to be modular and scalable. We can add new features, pages, or integrations whenever your business needs them.",
      },
    ],
  },

  cta: {
    eyebrow: "READY TO GET STARTED?",
    heading: "Let's Build Your Online Presence",
    description: "Tell us about your business and get a free consultation with a custom plan.",
    primaryCta: { label: "Get a Free Consultation", href: "https://wa.me/918446534749" },
    whatsapp: {
      label: "Or WhatsApp us",
      number: "+91 84465 34749",
    },
    bgImage: "/cta-bg.jpg",
  },

  footer: {
    tagline: "Made for local businesses that want to grow online.",
    copyright: `© ${new Date().getFullYear()} VineaDigital. All rights reserved.`,
    links: [
      { label: "Home", href: "#top" },
      { label: "What I Do", href: "#features" },
      { label: "Packages", href: "#pricing" },
      { label: "Portfolio", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#cta" },
    ],
  },

  // `icon` maps to a glyph in src/components/Icon.jsx
  social: [
    { icon: "instagram", name: "Instagram", href: "https://instagram.com/yourhandle" },
    { icon: "linkedin", name: "LinkedIn", href: "https://linkedin.com/in/ninad-pednekar-17a185357/" },
    { icon: "x", name: "X (Twitter)", href: "https://x.com/yourhandle" },
  ],

  theme: {
    colors: {
      navy950: "#090b1e",
      navy900: "#0c0f28",
      navy800: "#13173d",
      indigo500: "#5b5df8",
      indigo400: "#6f71fa",
      indigo300: "#9294fc",
      lavender50: "#f8f9fd",
      lavender100: "#eef0fc",
      paper: "#ffffff",
      ink: "#0f172a",
      inkSoft: "#64748b",
      inkFaint: "#94a3b8",
      line: "#e2e8f0",
      accent: "#5b5df8",
    },
    fonts: {
      display: "'Plus Jakarta Sans', sans-serif",
      body: "'Inter', sans-serif",
      handwriting: "'Caveat', cursive",
    },
  },
};

export default siteConfig;
