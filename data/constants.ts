// --- Navbar Data ---
export const githubIcon = "/assets/Github.png";

export const navbarData = {
  primaryItems: [
    {
      type: "internal",
      href: "/projects",
      label: "Projects",
      iconType: "folder",
      iconClassName: "h-[30px] w-[40px]",
    },
    {
      type: "internal",
      href: "/work-experience",
      label: "Work\nExp.",
      iconType: "building",
      iconClassName: "h-[30px] w-[30px]",
    },
    {
      type: "internal",
      href: "/activities",
      label: "Activities",
      iconType: "users",
      iconClassName: "h-[25px] w-[26px]",
    },
    {
      type: "internal",
      href: "/skills",
      label: "Skills",
      iconType: "code-solid",
      iconClassName: "h-[25px] w-[25px]",
    },
  ],
  secondaryItems: [
    {
      type: "external",
      href: "https://github.com/Pawnpawee",
      label: "Github",
      iconType: "github",
      iconClassName: "h-[30px] w-[30px]",
    },
    {
      type: "mailto",
      href: "mailto:pornpawee214@gmail.com",
      label: "Email",
      iconType: "envelope",
      iconClassName: "h-[25px] w-[33.333px]",
    },
    {
      type: "anchor",
      href: "/#contact",
      label: "Contact",
      iconType: "phone",
      iconClassName: "h-[25px] w-[25px]",
    },
  ],
};

// --- Header Data ---
export const headerData = {
  logoImg: "/assets/logo.png",
  brandName: {
    first: "Kukkai",
    second: "Portfolio",
  },
  askBot: {
    label: "Ask Bot",
    subLabel: "ask anything about me!",
    href: "/chatbot",
  },
};

// --- Hero Section Data ---
export const heroData = {
  lines: [
    {
      segments: [{ text: "Howdy!" }],
    },
    {
      segments: [
        { text: "My name’s " },
        { text: "Kukkai.", className: "font-bold" },
      ],
    },
    {
      segments: [
        { text: "I’m ", className: "font-bold" },
        {
          text: "Full-Stack",
          className: "font-bitcount font-bold mt-2",
        },
        { text: " Developer.", className: "font-bold" },
      ],
    },
  ],
  quotes: [
    '"Explore the intersection of Code, Creativity, and AI."',
    "Curious what I’ve been building? Let’s dive in.",
  ],
  badges: [
    "Computer Science-Multimedia",
    "3+ experience in Web Development",
    "KMUTT Diamond Scholarship Students",
    "GPA 3.94",
    "TOEIC 870",
    "Passionate about AI and Software Development",
  ],
};

// --- Highlights Section Data ---
export const highlightsData = [
  {
    id: "ikigai",
    title: "Ikigai: The Journey Of Life",
    description:
      "AI-driven interactive storytelling for personalized student career discovery",
    videoEmbedUrl:
      "https://www.youtube.com/embed/i4pC7B5hVac?si=kqLwpjfYVAEQdk_e",
    exploreHref: "/projects/coding#ikigai",
  },
  {
    id: "starbound",
    title: "STARBOUND Thailand Teaching Academy Award",
    description:
      "using Unity and C# to simplify C++ programming and flowchart logic into an interactive, award-winning educational experience.",
    videoEmbedUrl:
      "https://www.youtube.com/embed/vbmbC4S2wjc?si=fvDXCbDFQ1ofc2g4",
    exploreHref: "/projects/coding#starbound",
  },
  {
    id: "xiaofumeow",
    title: "Xiaofumeow.com",
    description:
      "a responsive food e-commerce platform, using ASP.NET (C#) and Bootstrap.",
    videoEmbedUrl:
      "https://www.youtube.com/embed/iSLqXRpaCtY?si=tbe2hDxfVxV8Bhvz",
    exploreHref: "/projects/coding#xiaofumeow",
  },
];

// --- About Me Section Data ---
export const aboutMeData = {
  photos: ["/assets/1.jpg", "/assets/2.jpg", "/assets/3.jpg", "/assets/4.jpg"],
  details: {
    fullName: "Pawnpawee Tanonchaiyaphat",
    education: [
      "Petchra Pra Jom Klao Scholarship Student",
      "Majoring in Applied Computer Science - Multimedia",
      "King Mongkut's University of Technology Thonburi",
    ],
    hobbies: [
      { label: "Tech Trends", description: "Following the latest updates." },
      {
        label: "Podcasts",
        description: "Listening to English podcasts to level up my skills.",
      },
      { label: "Cat Parent", description: "Chilling with my black cat, Kuro." },
      { label: "Movies & Series", description: "MCU and K-dramas." },
    ],
    personalityTypes: ["MBTI - INTJ", "DISC - Dominant"],
    whoAmI:
      "A versatile Full-Stack Developer and UI/UX Designer. I build end-to-end web experiences with AI integration. Highly adaptable and always ready to step out of my comfort zone for global opportunities.",
    careerGoals: [
      "Seeking global opportunities and international challenges.",
      "Passionate about integrating AI (like n8n) into practical web solutions.",
      "Aiming to bridge the gap between complex logic and seamless UI/UX.",
    ],
  },
};

// --- Work Experience Section Data ---
export const workExperienceData = [
  {
    year: "2026",
    title: "Ikigai: The Journey Of Life",
    description:
      "AI-driven interactive storytelling for personalized student career discovery",
    skills: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
      "ASP.NET C#",
      "n8n",
      "AI",
    ],
    images: [1, 2, 3, 4, 5, 6],
  },
  {
    year: "2026",
    title: "Ikigai: The Journey Of Life (Part 2)",
    description:
      "AI-driven interactive storytelling for personalized student career discovery",
    skills: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
      "ASP.NET C#",
      "n8n",
    ],
    images: [1, 2, 3],
  },
];

// --- Coding Projects Page Data ---
export const codingProjectsData = [
  {
    id: "ikigai",
    title: "Ikigai: The Journey Of Life",
    description:
      "AI-driven interactive storytelling for personalized student career discovery",
    skills: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
      "ASP.NET C#",
      "n8n",
      "PostgreSQL",
      "AI",
      "Version Control",
    ],
    link: { label: "find-ikigai.space", href: "https://find-ikigai.space" },
    repository: [
      { label: "ikigai API", href: "https://github.com/Pawnpawee/ikigai-api" },
      { label: "Ikigai Web", href: "https://github.com/Pawnpawee/ikigai-web" },
    ],
    videoEmbedUrl:
      "https://www.youtube.com/embed/i4pC7B5hVac?si=kqLwpjfYVAEQdk_e",
    year: "2026",
  },
  {
    id: "starbound",
    title: "Project Starbound",
    description:
      "Silver Medal Thailand Teaching Academy Award 2024. Engineered STARBOUND using Unity and C# to simplify C++ programming and flowchart logic into an interactive, award-winning educational experience.",
    skills: ["C#", "Unity"],
    link: {
      label: "Download game available on Android and Windows",
      href: "https://drive.google.com/drive/folders/1JAr4kuMxc2W3ebupYkWl4wDrHlx8P94n?usp=drive_link",
    },
    videoEmbedUrl:
      "https://www.youtube.com/embed/vbmbC4S2wjc?si=fvDXCbDFQ1ofc2g4",
    year: "2024",
  },
  {
    id: "last-embrace",
    title: "Last Embrace ",
    description:
      "Puzzle Storytelling Game, exploring with father-daughter on yacht among a sea of memories.",
    skills: ["C#", "Unity"],
    link: {
      label: "Download game available on Windows",
      href: "https://drive.google.com/drive/folders/1sC1g-5_dJcHFbVedt4AqUS7btmXjZIcC?usp=drive_link",
    },
    videoEmbedUrl:
      "https://www.youtube.com/embed/PpvCHkfwQ-0?si=nDKuLL4a49_VcLjS",
    year: "2025",
  },
  {
    id: "xiaofumeow",
    title: "Xiaofumeow.com",
    description:
      "A responsive food e-commerce platform, using ASP.NET (C#) and Bootstrap.",
    skills: ["ASP.NET", "C#", "Bootstrap", "SQL Server"],
    repository: {
      label: "Xiaofumeow",
      href: "https://github.com/Pawnpawee/xiaofumeow",
    },
    videoEmbedUrl:
      "https://www.youtube.com/embed/iSLqXRpaCtY?si=tbe2hDxfVxV8Bhvz",
    year: "2024",
  },
  {
    id: "vrgame",
    title: "DESTOY VR GAME",
    description:
      "an immersive game VR experience using Unity and C#, managing task delegation and code integration to deliver high-performance gameplay.",
    skills: ["ASP.NET", "C#", "VR Development"],
    link: {
      label: "Download game available on Windows",
      href: "https://drive.google.com/drive/folders/1Vgk8vGqFcrb4wahTwq4YT6kaHh8ITf_9",
    },
    repository: {
      label: "VR-DestoyGame",
      href: "https://github.com/Pawnpawee/VR-DestoyGame",
    },
    videoEmbedUrl:
      "https://www.youtube.com/embed/WffaRH6psvc?si=mITKZLTMJLRSmGRq",
    year: "2024",
  },
  {
    id: "iot-project",
    title: "IoT Project",
    description:
      "IoT-Based Intrusion Prevention and Alert System Utilizing Facial Recognition and Automated Gel Blaster Deterrent.",
    skills: ["Python", "C++", "IoT Development", "Microcontroller Programming"],
    repository: {
      label: "IoT-Project",
      href: "https://github.com/Pawnpawee/PJ_IOT",
    },
    videoEmbedUrl:
      "https://www.youtube.com/embed/8J4Niq-a47o?si=onbOY-5lWqdSrypE",
    year: "2024",
  },
  {
    id: "peaweb",
    title: "PeaWebmonitor",
    description:
      "Peawebmonitor Admin System for monitoring and controlling IoT devices",
    skills: ["PHP", "Laravel", "Livewire", "Tailwind CSS", "PostgreSQL"],
    videoEmbedUrl:
      "https://www.youtube.com/embed/N6JkjKlJ19I?si=huv0sgGFabYDz8Y1",
    year: "2024",
  },
  {
    id: "thongthai",
    title: "Thongthai",
    description:
      "Thai Nature Exploration Game for Self-Directed Learners with Intellectual Disabilities.",
    skills: ["ASP.NET", "C#"],
    link: {
      label: "Download game available on Windows",
      href: "https://drive.google.com/drive/folders/1Vgk8vGqFcrb4wahTwq4YT6kaHh8ITf_9",
    },
    videoEmbedUrl:
      "https://www.youtube.com/embed/puDEY_7EIqg?si=KiNOLCR8C8JAShWY",
    year: "2025",
  },

  {
    id: "uptisign",
    title: "Uptisign.com",
    description: "Uptisign.com Multimedia House Website.",
    skills: ["HTML", "JavaScript", "CSS"],
    link: {
      label: "Uptisign.com",
      href: "https://midterm221-f154f.firebaseapp.com/index.html",
    },
    videoEmbedUrl:
      "https://www.youtube.com/embed/_SL_8LkoTgI?si=bOdbijNmKjW7ETdI",
    year: "2023",
  },
  {
    id: "sql",
    title: "DATABASE Receipt Microsoft SQL",
    description:
      "Design ER diagram and create database for receipt management system using Microsoft SQL.",
    skills: ["SQL", "Database Design"],
    repository: {
      label: "SQL-Database",
      href: "https://github.com/Pawnpawee/SQL-Database",
    },
    videoEmbedUrl: "/assets/sql.png",
    year: "2023",
  },
  {
    id: "diagram",
    title: "Use Case Diagram for Online Movie Ticket Booking System",
    description:
      "Use case diagram for an online movie ticket booking and sales system via application.",
    skills: ["Use Case Diagram"],
    videoEmbedUrl: "/assets/sql.png",
    year: "2024",
  },
  {
    id: "killing-dragon",
    title: "Killing Dragon",
    description:
      "A RPG game where players control a hero on a quest to defeat a  dragon.",
    skills: ["C++"],
    repository: {
      label: "Killing-Dragon",
      href: "https://github.com/Pawnpawee/Killing-Dragon",
    },
    videoEmbedUrl: "/assets/killing-dragon.png",
    year: "2023",
  },
];

// --- Projects Section Data ---
export const designProjectsData = [
  {
    id: "xiaofumeow-design",
    title: "XiaoFuMeow Web Application PROTOTYPE",
    description:
      "a responsive food e-commerce website prototype for XiaoFuMeow, designed with Figma.",
    skills: ["Figma", "UI/UX Design"],
    videoEmbedUrl:
      "https://embed.figma.com/design/3QpBu4nnjLjzwZWHzkDIAk/Final_WebCMM349?node-id=0-1&embed-host=share",
    year: "2024",
  },

  {
    id: "mux-gamification",
    title: "PROTOTYPE MU(x) Gamification",
    description:
      "Engineered a strategic solution to enhance student engagement for Mahidol University’s online learning platform (MUx) via gamification, reaching the Final 11 teams nationwide.",
    skills: ["Figma", "UI/UX Design"],
    videoEmbedUrl:
      "https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FdR3qcrXMQl5ha5e95VdxUr%2F%25E0%25B9%2580%25E0%25B8%25A3%25E0%25B8%25B5%25E0%25B8%25A2%25E0%25B8%2599%25E0%25B8%2581%25E0%25B8%25B1%25E0%25B8%2599%25E0%25B8%2595%25E0%25B9%2588%25E0%25B8%25AD%3Ftype%3Ddesign%26node-id%3D152-174%26t%3D2OboEdxkMpoKQX0K-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D152%253A174%26mode%3Ddesign",
    year: "2024",
  },
  {
    id: "port-mobile-app",
    title: "PORTFOLIO APPLICATION PROTOTYPE",
    description:
      "a responsive portfolio application prototype, designed with Figma.",
    skills: ["Figma", "UI/UX Design"],
    videoEmbedUrl:
      "https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcdjK5qxohIeTLw7Kbr9tRu%2FPortfolio%3Ftype%3Ddesign%26node-id%3D67-134%26t%3DjhkDDtsV9oyweQlc-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26mode%3Ddesign",
    year: "2024",
  },
  {
    id: "seed-prototype",
    title: "SE-ED WEBSITE PROTOTYPE",
    description:
      "a responsive e-commerce website prototype for SE-ED, designed with Figma.",
    skills: ["Figma", "UI/UX Design"],
    videoEmbedUrl:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5ftLKlHvSUm788CijgTY8p%2FSE-ED-Prototype%3Ftype%3Ddesign%26node-id%3D1-16158%26t%3DaWtz5exxaLriDI9I-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A16158%26mode%3Ddesign",
    year: "2024",
  },
  {
    id: "ekkamai-tour-application",
    title: "EKKAMAI TOUR APPLICATION",
    description:
      "a responsive travel application prototype for EKKAMAI TOUR, designed with Figma.",
    skills: ["Figma", "UI/UX Design"],
    videoEmbedUrl:
      "https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZMoE0a67LdiLHdywy6TZdd%2FEkamai%3Fnode-id%3D41-120%26scaling%3Dscale-down%26mode%3Ddesign%26t%3DgTTyWwGTdLKWhDAA-1",
    year: "2024",
  },
  {
    id: "res-q-app-design",
    title: "Res-Q Mobile Application",
    description:
      "a responsive mobile application about SDG principles, designed with Figma.",
    skills: ["Figma", "UI/UX Design"],
    videoEmbedUrl:
      "https://embed.figma.com/design/EHX1WRB4uZAbRPhPn4k2Z6/323?node-id=0-1&embed-host=share",
    year: "2025",
  },
  {
    id: "ikigai-design",
    title: "Ikigai Website",
    description:
      "a responsive website for the Ikigai project, designed with Figma.",
    skills: ["Figma", "UI/UX Design"],
    videoEmbedUrl:
      "https://embed.figma.com/design/vbwVAkvvTgrPIM6GpOM0t0/Thesis-Ikigai-Website?node-id=0-1&embed-host=share",
    year: "2026",
  },
  {
    id: "port-web-design-2026",
    title: "Portfolio Website 2026",
    description:
      "a responsive website for the Portfolio 2026 project, designed with Figma.",
    skills: ["Figma", "UI/UX Design"],
    videoEmbedUrl:
      "https://embed.figma.com/design/Ogl3QaSe7zf6AMg7LDah19/Portfolio?node-id=0-1&embed-host=share",
    year: "2026",
  },
  {
    id: "cartoon-club-design",
    title: "Cartoon Club Website",
    description:
      "a responsive website for the Cartoon Club project, designed with Figma.",
    skills: ["Figma", "UI/UX Design"],
    videoEmbedUrl:
      "https://embed.figma.com/design/OcvnmDKqWXtSDrsQiUAz0h/420-Final?node-id=0-1&embed-host=share",
    year: "2026",
  },
];
export const animationProjectsData = [
  {
    id: "loop-motion",
    title: "LOOP MOTION",
    skills: ["After Effects", "Motion Graphics", "Iillustrator"],
    videoEmbedUrl:
      "https://www.youtube.com/embed/ekPU4Mp8beg?si=U-FpHPwIEpcNwaNs",
    year: "2023",
  },
  {
    id: "pinball-animation",
    title: "Pinball Animation",
    skills: ["After Effects", "Motion Graphics", "Iillustrator"],
    videoEmbedUrl:
      "https://www.youtube.com/embed/7jlDcVUg3Nc?si=SR3Q8pZUZGfvNzdq",
    year: "2023",
  },
  {
    id: "pen-tablet-ads",
    title: "Pen Tablet Ads Prism - superior pro",
    skills: ["After Effects", "Motion Graphics", "Iillustrator"],
    videoEmbedUrl:
      "https://www.youtube.com/embed/EfR8iWBvd5w?si=BvDAX3J7RUUnsvq_",
    year: "2023",
  },
  {
    id: "lyrics-animation",
    title: "Lyrics Animation | Hayloft II - Mother Mother",
    skills: ["After Effects", "Motion Graphics", "Iillustrator"],
    videoEmbedUrl:
      "https://www.youtube.com/embed/lhs11nxfWEc?si=g8QVS2137ydXXqPZ",
    year: "2023",
  },
  {
    id: "parent-animation",
    title: "Parent Animation - Factory Tour (Powerpuff Girls)",
    skills: ["After Effects", "Motion Graphics", "Iillustrator"],
    videoEmbedUrl:
      "https://www.youtube.com/embed/yfa3UFkQBEA?si=SIn2TQM68vu7zJeF",
    year: "2023",
  },
  {
    id: "airway-animation",
    title: "Motion Airway",
    skills: ["After Effects", "Motion Graphics", "Iillustrator"],
    videoEmbedUrl:
      "https://www.youtube.com/embed/1s5IjwyLcvI?si=jHf5aYRp4x6DyQC2",
    year: "2023",
  },
  {
    id: "bouncing-ball-animation",
    title: "Bouncing Ball 3D Animation",
    skills: ["3d Graphics", "Maya"],
    videoEmbedUrl:
      "https://www.youtube.com/embed/Hu_lhdWUKdw?si=--yuDgSBd2d1wL1K",
    year: "2024",
  },
  {
    id: "bouncing-ball-animation-action",
    title: "Bouncing Ball 3D Animation Action Camera",
    skills: ["3d Graphics", "Maya"],
    videoEmbedUrl:
      "https://www.youtube.com/embed/A1WpFtC3l3c?si=TXifVmONVSZqrEpd",
    year: "2024",
  },
  {
    id: "fantasy-theme-island",
    title: "Fantasy Theme Island (Loop animation)",
    skills: ["3d Graphics", "Maya"],
    videoEmbedUrl:
      "https://www.youtube.com/embed/Ox7iPxRhbTc?si=LcMeP--DIMYB0W2B",
    year: "2024",
  },
  {
    id: "curse-revence-animation",
    title: "Curse of the Revence - Teaser Game",
    skills: ["3d Graphics", "Maya"],
    videoEmbedUrl:
      "https://www.youtube.com/embed/RQqLQhZf4Wo?si=bCk1yvG1oZEN9QRm",
    year: "2025",
  },
];
export const renderingProjectsData = [
  // Fantasy Theme
  { id: "fantasy-1", title: "Fantasy 1", skills: ["3D Graphics", "Maya"], videoEmbedUrl: "/assets/3d/fantasy/1.jpg", year: "2024" },
  { id: "fantasy-2", title: "Fantasy 2", skills: ["3D Graphics", "Maya"], videoEmbedUrl: "/assets/3d/fantasy/2.jpg", year: "2024" },
  { id: "fantasy-3", title: "Fantasy 3", skills: ["3D Graphics", "Maya"], videoEmbedUrl: "/assets/3d/fantasy/3.jpg", year: "2024" },
  { id: "fantasy-4", title: "Fantasy 4", skills: ["3D Graphics", "Maya"], videoEmbedUrl: "/assets/3d/fantasy/4.jpg", year: "2024" },
  { id: "fantasy-5", title: "Fantasy 5", skills: ["3D Graphics", "Maya"], videoEmbedUrl: "/assets/3d/fantasy/5.jpg", year: "2024" },
  { id: "fantasy-6", title: "Fantasy 6", skills: ["3D Graphics", "Maya"], videoEmbedUrl: "/assets/3d/fantasy/6.jpg", year: "2024" },
  { id: "fantasy-7", title: "Fantasy 7", skills: ["3D Graphics", "Maya"], videoEmbedUrl: "/assets/3d/fantasy/7.jpg", year: "2024" },
  { id: "fantasy-8", title: "Fantasy 8", skills: ["3D Graphics", "Maya"], videoEmbedUrl: "/assets/3d/fantasy/8.jpg", year: "2024" },
  { id: "fantasy-9", title: "Fantasy 9", skills: ["3D Graphics", "Maya"], videoEmbedUrl: "/assets/3d/fantasy/9.jpg", year: "2024" },
  { id: "fantasy-10", title: "Fantasy 10", skills: ["3D Graphics", "Maya"], videoEmbedUrl: "/assets/3d/fantasy/10.jpg", year: "2024" },

  // Cafe Theme
  { id: "cafe-1", title: "Cafe SoulSad", skills: ["3D Graphics", "Interior"], videoEmbedUrl: "/assets/3d/cafe/01-SoulSad.jpg", year: "2024" },
  { id: "cafe-2", title: "Cafe PortBoat", skills: ["3D Graphics", "Interior"], videoEmbedUrl: "/assets/3d/cafe/02-PortBoat.jpg", year: "2024" },
  { id: "cafe-3", title: "Cafe Toilet", skills: ["3D Graphics", "Interior"], videoEmbedUrl: "/assets/3d/cafe/03-Toilet.jpg", year: "2024" },
  { id: "cafe-4", title: "Cafe Floor 1", skills: ["3D Graphics", "Interior"], videoEmbedUrl: "/assets/3d/cafe/04-Floor1.jpg", year: "2024" },
  { id: "cafe-5", title: "Cafe Floor 2", skills: ["3D Graphics", "Interior"], videoEmbedUrl: "/assets/3d/cafe/05-Floor2.jpg", year: "2024" },
  { id: "cafe-6", title: "Cafe Counter Bar", skills: ["3D Graphics", "Interior"], videoEmbedUrl: "/assets/3d/cafe/06-CounterBar.jpg", year: "2024" },
  { id: "cafe-7", title: "Cafe Icecream Table", skills: ["3D Graphics", "Interior"], videoEmbedUrl: "/assets/3d/cafe/07-IcecreamTable.jpg", year: "2024" },
  { id: "cafe-8", title: "Cafe Floor 3", skills: ["3D Graphics", "Interior"], videoEmbedUrl: "/assets/3d/cafe/08-Floor3.jpg", year: "2024" },
  { id: "cafe-9", title: "Cafe Bridge", skills: ["3D Graphics", "Interior"], videoEmbedUrl: "/assets/3d/cafe/09-Bridge.jpg", year: "2024" },
  { id: "cafe-10", title: "Cafe Bakery", skills: ["3D Graphics", "Interior"], videoEmbedUrl: "/assets/3d/cafe/10-Bakery.jpg", year: "2024" },
  { id: "cafe-11", title: "Cafe Counter Bakery", skills: ["3D Graphics", "Interior"], videoEmbedUrl: "/assets/3d/cafe/11-CounterBakery.jpg", year: "2024" },
  { id: "cafe-12", title: "Cafe Outdoor", skills: ["3D Graphics", "Interior"], videoEmbedUrl: "/assets/3d/cafe/12-Outdoor.jpg", year: "2024" },
  { id: "cafe-13", title: "Cafe Sunset", skills: ["3D Graphics", "Interior"], videoEmbedUrl: "/assets/3d/cafe/13-Sunset.jpg", year: "2024" },
  { id: "cafe-14", title: "Cafe Underwater", skills: ["3D Graphics", "Interior"], videoEmbedUrl: "/assets/3d/cafe/14-Under water.jpg", year: "2024" },

  // Circus Theme
  { id: "circus-1", title: "Circus Endstage 1", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/circus/Endstage1.jpg", year: "2023" },
  { id: "circus-2", title: "Circus Endstage 2", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/circus/Endstage2.jpg", year: "2023" },
  { id: "circus-3", title: "Circus Endstage 3", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/circus/Endstage3.jpg", year: "2023" },
  { id: "circus-4", title: "Circus Magic Hour 1", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/circus/MagicHour1.jpg", year: "2023" },
  { id: "circus-5", title: "Circus Magic Hour 2", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/circus/MagicHour2.jpg", year: "2023" },
  { id: "circus-6", title: "Circus Magic Hour 3", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/circus/MagicHour3.jpg", year: "2023" },
  { id: "circus-7", title: "Circus On Stage 1", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/circus/OnStage1.jpg", year: "2023" },
  { id: "circus-8", title: "Circus On Stage 2", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/circus/OnStage2.jpg", year: "2023" },
  { id: "circus-9", title: "Circus On Stage 3", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/circus/OnStage3.jpg", year: "2023" },

  // Marvel Theme
  { id: "marvel-1", title: "Marvel Darkhole", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/marvel/Darkhole.jpg", year: "2023" },
  { id: "marvel-2", title: "Marvel Demon", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/marvel/Demon.jpg", year: "2023" },
  { id: "marvel-3", title: "Marvel Gate", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/marvel/Gate.jpg", year: "2023" },
  { id: "marvel-4", title: "Marvel Overall", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/marvel/Overall.jpg", year: "2023" },
  { id: "marvel-5", title: "Marvel Room", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/marvel/Room.jpg", year: "2023" },
  { id: "marvel-6", title: "Marvel Scene 1", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/marvel/scene1.jpg", year: "2023" },
  { id: "marvel-7", title: "Marvel Scene 2", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/marvel/scene2.jpg", year: "2023" },
  { id: "marvel-8", title: "Marvel Scene 3", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/marvel/scene3.jpg", year: "2023" },
  { id: "marvel-9", title: "Marvel Scene 4", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/marvel/scene4.jpg", year: "2023" },
  { id: "marvel-10", title: "Marvel Scene 5", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/marvel/scene5.jpg", year: "2023" },
  { id: "marvel-11", title: "Marvel Scene Main", skills: ["3D Graphics", "Environment"], videoEmbedUrl: "/assets/3d/marvel/scene-main.jpg", year: "2023" },
];
export const productionProjectsData = [
  {
    id: "raek-yaem",
    title: "Raek Yaem Pracha Uthit 45",
    description: "A love story between college friends.",
    skills: ["Storytelling", "Write Script", "Video Production"],
    videoEmbedUrl: "https://www.youtube.com/embed/58_YWeVt_mo?si=MbBBQE146CzYXn-4",
    year: "2024",
  },
  {
    id: "wake-up",
    title: "pls, Wake up and go to school",
    description: "Introduction of 5 people that going to do something secret.",
    skills: ["Storytelling", "Write Script", "Video Production"],
    videoEmbedUrl: "https://www.youtube.com/embed/zJxUNYz47kw?si=r5k3vfa49lObOB7r",
    year: "2024",
  },
  {
    id: "homeless",
    title: "UNTIL BECOME HOMELESS",
    description: "A documentary about homeless people in the heart of the city.",
    skills: ["Storytelling", "Write Script", "Documentary"],
    videoEmbedUrl: "https://www.youtube.com/embed/RxlchrFuRYY?si=fCOnDVQpPINN0eT-",
    year: "2024",
  },
  {
    id: "id-rather-sleep",
    title: "I'd Rather Sleep - Kero Kero Bonito (Unofficial MV)",
    description: "An unofficial music video that tells the story of a woman who works so hard she becomes paranoid.",
    skills: ["Storytelling", "Write Script", "Music Video"],
    videoEmbedUrl: "https://www.youtube.com/embed/w3hZc6ua3x8?si=HTNWQZBJh8OGLbdH",
    year: "2024",
  },
];
export const categoriesData = [
  {
    id: "coding",
    title: "Coding &\nProgramming",
    count: codingProjectsData.length,
    iconType: "code",
    href: "/projects/coding",
  },
  {
    id: "design",
    title: "UX/UI &\nDesign",
    count: designProjectsData.length,
    iconType: "design",
    href: "/projects/design",
  },
  {
    id: "animation",
    title: "2d & 3D\nAnimation",
    count: animationProjectsData.length,
    iconType: "animation",
    href: "/projects/animation",
  },
  {
    id: "3d",
    title: "3D\nRendering",
    count: new Set(renderingProjectsData.map(p => p.id.split('-')[0])).size,
    iconType: "3d",
    href: "/projects/3d",
  },
  {
    id: "production",
    title: "\nProduction",
    count: productionProjectsData.length,
    iconType: "movie",
    href: "/projects/production",
  },
];

// --- Contact Section Data ---
export const contactData = [
  {
    id: "email",
    iconType: "envelope",
    text: "pornpawee214@gmail.com",
    href: "mailto:pornpawee214@gmail.com",
  },
  {
    id: "linkedin",
    iconType: "linkedin",
    text: "Pawnpawee Kukkai",
    href: "https://www.linkedin.com/in/pawnpawee-kukkai/",
  },
  {
    id: "phone",
    iconType: "phone",
    text: "0953566145",
    href: "tel:0953566145",
  },
  {
    id: "instagram",
    iconType: "instagram",
    text: "kukkikkukkaikamkon",
    href: "https://www.instagram.com/kukkikkukkaikamkon/",
  },
  {
    id: "youtube",
    iconType: "youtube",
    text: "@prinxeszx3165",
    href: "https://www.youtube.com/@prinxeszx3165",
  },
];

// --- Chatbot Page Data ---
export const chatbotData = {
  comingSoonText: "Coming Soon...",
};

// --- Common UI Strings ---
export const commonUI = {
  projectsLabel: "Select Category",
  previewVideoPlaceholder: "Preview Video",
  exploreButtonLabel: "explore",
  swipeMoreLabel: "Swipe More!",
  noMorePhotosLabel: "No more photos",
  knowMeBetterTitle: "Know Me Better",
  highlightsProjectTitle: "Highlights Project",
  workExperienceTitle: "Work Experience",
  contactTitle: "Have any question?",
};
