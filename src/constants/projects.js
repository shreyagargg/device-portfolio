export const PROJECTS_DATA = [
  {
    id: "syai",
    title: "SyAi - AI Productivity Assistant",
    category: "Full Stack",
    badge: "Flagship",
    status: "Live & Active",
    featured: true,
    description:
      "An intelligent AI-powered productivity assistant designed to streamline developer workflows, summarize complex notes, and provide context-aware task automation.",
    metrics: [
      { label: "Response Stream", value: "< 300ms" },
      { label: "Daily Tasks Automated", value: "50+" },
      { label: "Accuracy", value: "98%" },
    ],
    highlights: [
      "Integrated OpenAI API with real-time SSE streaming for instant conversational responses.",
      "Engineered responsive modular UI with React, Tailwind CSS, and custom state management.",
      "Built resilient Node.js / Express backend with request caching and rate limiting.",
    ],
    techStack: ["React.js", "Node.js", "Express", "OpenAI API", "Tailwind CSS", "REST API"],
    github: "https://github.com/shreyagargg",
    demo: "https://shreyagargg.github.io/portfolio/",
  },
  {
    id: "finance",
    title: "Finance Backend & Microservices",
    category: "Backend",
    badge: "API Architecture",
    status: "Completed",
    featured: true,
    description:
      "Robust financial management and transaction processing backend with JWT authentication, relational PostgreSQL schemas, and automated ledger balancing.",
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Endpoints", value: "24+" },
      { label: "Auth", value: "JWT + Bcrypt" },
    ],
    highlights: [
      "Engineered secure RESTful endpoints supporting transaction rollbacks and ACID compliance.",
      "Designed PostgreSQL normalized database schema with optimized indexing for fast lookups.",
      "Implemented comprehensive input validation and custom error handling middleware.",
    ],
    techStack: ["Node.js", "Express.js", "PostgreSQL", "JWT", "Docker", "REST API"],
    github: "https://github.com/shreyagargg",
    demo: "https://github.com/shreyagargg",
  },
  {
    id: "android-app",
    title: "Android Native Mobile Suite",
    category: "Mobile",
    badge: "Android",
    status: "Completed",
    featured: false,
    description:
      "Modern native Android application built with clean MVVM architecture, reactive state flows, and offline-first Room database synchronization.",
    metrics: [
      { label: "Architecture", value: "MVVM" },
      { label: "Offline Cache", value: "Room DB" },
      { label: "Min SDK", value: "Android 8.0+" },
    ],
    highlights: [
      "Crafted responsive Material UI with fluid transitions and custom theme engine.",
      "Integrated Firebase Cloud Messaging for real-time notifications and analytics.",
      "Implemented coroutines and Flow for non-blocking asynchronous data pipelines.",
    ],
    techStack: ["Android", "Kotlin", "Java", "Jetpack Compose", "Firebase", "Room DB"],
    github: "https://github.com/shreyagargg",
    demo: "https://github.com/shreyagargg",
  },
  {
    id: "system-monitor",
    title: "System Diagnostics & Utility Hub",
    category: "Desktop & Tools",
    badge: "OS Utility",
    status: "Completed",
    featured: false,
    description:
      "A desktop diagnostic utility interface providing hardware metrics, active session tracking, and system performance telemetry in real time.",
    metrics: [
      { label: "Telemetry", value: "Real-time" },
      { label: "Memory Footprint", value: "< 25MB" },
      { label: "Platform", value: "Web / Desktop" },
    ],
    highlights: [
      "Built interactive diagnostic widgets displaying CPU, memory allocation, and session uptime.",
      "Created retro-modern terminal styling with accessible color contrast and responsive scaling.",
      "Implemented client-side telemetry caching with zero external server dependencies.",
    ],
    techStack: ["JavaScript", "CSS3", "React", "HTML5", "OS APIs"],
    github: "https://github.com/shreyagargg",
    demo: "https://github.com/shreyagargg",
  },
];
