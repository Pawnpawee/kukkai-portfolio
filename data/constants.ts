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
    year: "2025",
    title: "Full-Stack Developer Intern | @Gofive Company (3 months)",
    description: [
      "Architected and implemented backends using ASP.NET Core and Clean Architecture; designed complex database schemas to ensure high system maintainability and scalability.",
      "Optimized PDF rendering performance by 80x (reducing latency from 1,748ms to 21ms) by migrating from external services to Puppeteer with a custom caching strategy.",
      "Engineered a secure AI monetization layer by architecting JWT/X-API-Key middleware, enabling precise AI Token quota management and cross-platform communications.",
      "Developed a multi-slip payment validation system (API) allowing customers to consolidate up to 5 payment proofs per invoice with automated error checking.",
      "Developed responsive frontends in Angular and Next.js, ensuring adherence to the company's Design System to maintain UI/UX consistency across all platforms.",
      "Reduced design-to-code turnaround time by leading knowledge-sharing sessions on integrating Figma with VS Code via MCP for the development team.",
      "Led sprint planning sessions as Project Owner in Agile Scrum and Sprint Reviews, translating complex technical updates for stakeholders.",
    ],
    skills: [
      "ASP.NET Core",
      "Puppeteer",
      "JWT",
      "Angular",
      "Next.js",
      "Figma",
      "MCP",
      "Agile Scrum",
    ],
    images: [
      "/assets/work_exp/gofive/1.jpg",
      "/assets/work_exp/gofive/2.jpg",
      "/assets/work_exp/gofive/3.jpg",
      "/assets/work_exp/gofive/4.png",
    ],
  },
  {
    year: "2024",
    title: "Web Developer Intern | Merkle @Dentsu Thailand (2 Months)",
    description: [
      "Developed real-time web applications using Laravel (PHP) and Livewire under MVC architecture; managed MySQL database operations to support high-traffic web platforms.",
      "Maintained source code accuracy and team collaboration through Git flow, using Git clients like Fork to manage complex version control and code integration.",
    ],
    skills: ["Laravel", "PHP", "Livewire", "MySQL", "Git", "MVC"],
    images: [
      "/assets/work_exp/merkle/1.JPG",
      "/assets/work_exp/merkle/2.JPG",
      "/assets/work_exp/merkle/3.jpg",
      "/assets/work_exp/merkle/4.jpg",
      "/assets/work_exp/merkle/5.png",
    ],
  },
  {
    year: "2024",
    title: "Part-time Frontend Developer | Bainisys Company (1 Year)",
    description: [
      "Implementing responsive web designs using Bootstrap and CSS while collaborating on Graphic Design tasks.",
    ],
    skills: ["Bootstrap", "CSS", "Graphic Design"],
    images: [],
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
  {
    id: "fantasy-1",
    title: "Fantasy 1",
    skills: ["3D Graphics", "Maya"],
    videoEmbedUrl: "/assets/3d/fantasy/1.jpg",
    year: "2024",
  },
  {
    id: "fantasy-2",
    title: "Fantasy 2",
    skills: ["3D Graphics", "Maya"],
    videoEmbedUrl: "/assets/3d/fantasy/2.jpg",
    year: "2024",
  },
  {
    id: "fantasy-3",
    title: "Fantasy 3",
    skills: ["3D Graphics", "Maya"],
    videoEmbedUrl: "/assets/3d/fantasy/3.jpg",
    year: "2024",
  },
  {
    id: "fantasy-4",
    title: "Fantasy 4",
    skills: ["3D Graphics", "Maya"],
    videoEmbedUrl: "/assets/3d/fantasy/4.jpg",
    year: "2024",
  },
  {
    id: "fantasy-5",
    title: "Fantasy 5",
    skills: ["3D Graphics", "Maya"],
    videoEmbedUrl: "/assets/3d/fantasy/5.jpg",
    year: "2024",
  },
  {
    id: "fantasy-6",
    title: "Fantasy 6",
    skills: ["3D Graphics", "Maya"],
    videoEmbedUrl: "/assets/3d/fantasy/6.jpg",
    year: "2024",
  },
  {
    id: "fantasy-7",
    title: "Fantasy 7",
    skills: ["3D Graphics", "Maya"],
    videoEmbedUrl: "/assets/3d/fantasy/7.jpg",
    year: "2024",
  },
  {
    id: "fantasy-8",
    title: "Fantasy 8",
    skills: ["3D Graphics", "Maya"],
    videoEmbedUrl: "/assets/3d/fantasy/8.jpg",
    year: "2024",
  },
  {
    id: "fantasy-9",
    title: "Fantasy 9",
    skills: ["3D Graphics", "Maya"],
    videoEmbedUrl: "/assets/3d/fantasy/9.jpg",
    year: "2024",
  },
  {
    id: "fantasy-10",
    title: "Fantasy 10",
    skills: ["3D Graphics", "Maya"],
    videoEmbedUrl: "/assets/3d/fantasy/10.jpg",
    year: "2024",
  },

  // Cafe Theme
  {
    id: "cafe-1",
    title: "Cafe SoulSad",
    skills: ["3D Graphics", "Interior"],
    videoEmbedUrl: "/assets/3d/cafe/01-SoulSad.jpg",
    year: "2024",
  },
  {
    id: "cafe-2",
    title: "Cafe PortBoat",
    skills: ["3D Graphics", "Interior"],
    videoEmbedUrl: "/assets/3d/cafe/02-PortBoat.jpg",
    year: "2024",
  },
  {
    id: "cafe-3",
    title: "Cafe Toilet",
    skills: ["3D Graphics", "Interior"],
    videoEmbedUrl: "/assets/3d/cafe/03-Toilet.jpg",
    year: "2024",
  },
  {
    id: "cafe-4",
    title: "Cafe Floor 1",
    skills: ["3D Graphics", "Interior"],
    videoEmbedUrl: "/assets/3d/cafe/04-Floor1.jpg",
    year: "2024",
  },
  {
    id: "cafe-5",
    title: "Cafe Floor 2",
    skills: ["3D Graphics", "Interior"],
    videoEmbedUrl: "/assets/3d/cafe/05-Floor2.jpg",
    year: "2024",
  },
  {
    id: "cafe-6",
    title: "Cafe Counter Bar",
    skills: ["3D Graphics", "Interior"],
    videoEmbedUrl: "/assets/3d/cafe/06-CounterBar.jpg",
    year: "2024",
  },
  {
    id: "cafe-7",
    title: "Cafe Icecream Table",
    skills: ["3D Graphics", "Interior"],
    videoEmbedUrl: "/assets/3d/cafe/07-IcecreamTable.jpg",
    year: "2024",
  },
  {
    id: "cafe-8",
    title: "Cafe Floor 3",
    skills: ["3D Graphics", "Interior"],
    videoEmbedUrl: "/assets/3d/cafe/08-Floor3.jpg",
    year: "2024",
  },
  {
    id: "cafe-9",
    title: "Cafe Bridge",
    skills: ["3D Graphics", "Interior"],
    videoEmbedUrl: "/assets/3d/cafe/09-Bridge.jpg",
    year: "2024",
  },
  {
    id: "cafe-10",
    title: "Cafe Bakery",
    skills: ["3D Graphics", "Interior"],
    videoEmbedUrl: "/assets/3d/cafe/10-Bakery.jpg",
    year: "2024",
  },
  {
    id: "cafe-11",
    title: "Cafe Counter Bakery",
    skills: ["3D Graphics", "Interior"],
    videoEmbedUrl: "/assets/3d/cafe/11-CounterBakery.jpg",
    year: "2024",
  },
  {
    id: "cafe-12",
    title: "Cafe Outdoor",
    skills: ["3D Graphics", "Interior"],
    videoEmbedUrl: "/assets/3d/cafe/12-Outdoor.jpg",
    year: "2024",
  },
  {
    id: "cafe-13",
    title: "Cafe Sunset",
    skills: ["3D Graphics", "Interior"],
    videoEmbedUrl: "/assets/3d/cafe/13-Sunset.jpg",
    year: "2024",
  },
  {
    id: "cafe-14",
    title: "Cafe Underwater",
    skills: ["3D Graphics", "Interior"],
    videoEmbedUrl: "/assets/3d/cafe/14-Under water.jpg",
    year: "2024",
  },

  // Circus Theme
  {
    id: "circus-1",
    title: "Circus Endstage 1",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/circus/Endstage1.jpg",
    year: "2023",
  },
  {
    id: "circus-2",
    title: "Circus Endstage 2",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/circus/Endstage2.jpg",
    year: "2023",
  },
  {
    id: "circus-3",
    title: "Circus Endstage 3",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/circus/Endstage3.jpg",
    year: "2023",
  },
  {
    id: "circus-4",
    title: "Circus Magic Hour 1",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/circus/MagicHour1.jpg",
    year: "2023",
  },
  {
    id: "circus-5",
    title: "Circus Magic Hour 2",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/circus/MagicHour2.jpg",
    year: "2023",
  },
  {
    id: "circus-6",
    title: "Circus Magic Hour 3",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/circus/MagicHour3.jpg",
    year: "2023",
  },
  {
    id: "circus-7",
    title: "Circus On Stage 1",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/circus/OnStage1.jpg",
    year: "2023",
  },
  {
    id: "circus-8",
    title: "Circus On Stage 2",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/circus/OnStage2.jpg",
    year: "2023",
  },
  {
    id: "circus-9",
    title: "Circus On Stage 3",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/circus/OnStage3.jpg",
    year: "2023",
  },

  // Marvel Theme
  {
    id: "marvel-1",
    title: "Marvel Darkhole",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/marvel/Darkhole.jpg",
    year: "2023",
  },
  {
    id: "marvel-2",
    title: "Marvel Demon",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/marvel/Demon.jpg",
    year: "2023",
  },
  {
    id: "marvel-3",
    title: "Marvel Gate",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/marvel/Gate.jpg",
    year: "2023",
  },
  {
    id: "marvel-4",
    title: "Marvel Overall",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/marvel/Overall.jpg",
    year: "2023",
  },
  {
    id: "marvel-5",
    title: "Marvel Room",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/marvel/Room.jpg",
    year: "2023",
  },
  {
    id: "marvel-6",
    title: "Marvel Scene 1",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/marvel/scene1.jpg",
    year: "2023",
  },
  {
    id: "marvel-7",
    title: "Marvel Scene 2",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/marvel/scene2.jpg",
    year: "2023",
  },
  {
    id: "marvel-8",
    title: "Marvel Scene 3",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/marvel/scene3.jpg",
    year: "2023",
  },
  {
    id: "marvel-9",
    title: "Marvel Scene 4",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/marvel/scene4.jpg",
    year: "2023",
  },
  {
    id: "marvel-10",
    title: "Marvel Scene 5",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/marvel/scene5.jpg",
    year: "2023",
  },
  {
    id: "marvel-11",
    title: "Marvel Scene Main",
    skills: ["3D Graphics", "Environment"],
    videoEmbedUrl: "/assets/3d/marvel/scene-main.jpg",
    year: "2023",
  },
];
export const productionProjectsData = [
  {
    id: "raek-yaem",
    title: "Raek Yaem Pracha Uthit 45",
    description: "A love story between college friends.",
    skills: ["Storytelling", "Write Script", "Video Production"],
    videoEmbedUrl:
      "https://www.youtube.com/embed/58_YWeVt_mo?si=MbBBQE146CzYXn-4",
    year: "2024",
  },
  {
    id: "wake-up",
    title: "pls, Wake up and go to school",
    description: "Introduction of 5 people that going to do something secret.",
    skills: ["Storytelling", "Write Script", "Video Production"],
    videoEmbedUrl:
      "https://www.youtube.com/embed/zJxUNYz47kw?si=r5k3vfa49lObOB7r",
    year: "2024",
  },
  {
    id: "homeless",
    title: "UNTIL BECOME HOMELESS",
    description:
      "A documentary about homeless people in the heart of the city.",
    skills: ["Storytelling", "Write Script", "Documentary"],
    videoEmbedUrl:
      "https://www.youtube.com/embed/RxlchrFuRYY?si=fCOnDVQpPINN0eT-",
    year: "2024",
  },
  {
    id: "id-rather-sleep",
    title: "I'd Rather Sleep - Kero Kero Bonito (Unofficial MV)",
    description:
      "An unofficial music video that tells the story of a woman who works so hard she becomes paranoid.",
    skills: ["Storytelling", "Write Script", "Music Video"],
    videoEmbedUrl:
      "https://www.youtube.com/embed/w3hZc6ua3x8?si=HTNWQZBJh8OGLbdH",
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
    count: new Set(renderingProjectsData.map((p) => p.id.split("-")[0])).size,
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

// --- Activities Section Data ---
export const activitiesData = [
  {
    year: "2024",
    title: "Silver Medal Thailand Teaching Academy Award 2024",
    description:
      "Engineered 'STARBOUND' using Unity and C# to simplify C++ programming and flowchart logic into an interactive, award-winning educational experience.",
    images: [
      "/assets/activities/STARBOUND/1.jpg",
      "/assets/activities/STARBOUND/2.jpg",
      "/assets/activities/STARBOUND/3.jpg",
      "/assets/activities/STARBOUND/4.jpg",
    ],
  },
  {
    year: "2024",
    title: "MU(x) Gamification Hackathon Finalist (Top 11)",
    description:
      "Engineered a strategic solution to enhance student engagement for Mahidol University's online learning platform (MUx) via gamification, reaching the Final 11 teams nationwide.",
    images: [
      "/assets/activities/MUX/1.png",
      "/assets/activities/MUX/2.png",
    ],
  },
  {
    year: "2024",
    title: "TA FIET Series Workshop 3D",
    description:
      "Served as a Teaching Assistant for the 3D Workshop, mentoring high school students in the practical application of Maya and VR software.",
    images: [
      "/assets/activities/TA/1.jpg",
      "/assets/activities/TA/2.jpg",
      "/assets/activities/TA/3.jpg",
    ],
  },
  {
    year: "2024",
    title: "Yannix Career Camp #1",
    description:
      "Participated in an intensive career camp to gain industry insights and learn about the professional production workflows at Yannix.",
    images: [
      "/assets/activities/yannix/1.jpg",
      "/assets/activities/yannix/2.jpg",
      "/assets/activities/yannix/3.jpg",
      "/assets/activities/yannix/4.jpg",
    ],
  },
  {
    year: "2023",
    title: "Vice President | MULTICAMP #20",
    description:
      "Orchestrated large-scale project planning and led cross-functional teams to achieve systematic milestones. Managed live stage environments and audience engagement as the official host.",
    images: [
      "/assets/activities/multicamp/1.jpg",
      "/assets/activities/multicamp/2.jpg",
      "/assets/activities/multicamp/3.jpg",
    ],
  },
  {
    year: "2025",
    title: "Cross-cultural Engineering Project 2025",
    description:
      "Demonstrated the ability to collaborate in multi-national environments by effectively communicating technical requirements and project goals with international peers.",
    images: [
      "/assets/activities/CEP/1.jpg",
      "/assets/activities/CEP/2.jpg",
      "/assets/activities/CEP/3.jpg",
      "/assets/activities/CEP/4.jpg",
      "/assets/activities/CEP/5.jpg",
    ],
  },
  {
    year: "2024",
    title: "Creative Team Lead | MULTIFIRSTMEET",
    description:
      "Led a cross-functional team to design high-engagement event content and visual assets; demonstrated strong leadership by streamlining task delegation and delivering public presentations as an official host to enhance audience engagement.",
    images: [
      "/assets/activities/multi1st/1.jpg",
      "/assets/activities/multi1st/2.jpg",
      "/assets/activities/multi1st/3.jpg",
      "/assets/activities/multi1st/4.jpg",
    ],
  },
  {
    year: "2024",
    title: "TOY MUSEUM EXHIBITION",
    description:
      "Served as the Head of the Coding Team; managed the technical setup for VR experiences and communicated project details effectively with international faculty members.",
    images: [
      "/assets/activities/vr/1.jpg",
      "/assets/activities/vr/2.jpg",
      "/assets/activities/vr/3.jpg",
      "/assets/activities/vr/4.jpg",
    ],
  },
  {
    year: "2026",
    title: "FIET Training Project 2025",
    description:
      "Received the Honorable Mention Award for 'Promoting Sustainable Development Goals' for the 2026 academic year.",
    images: [
      "/assets/activities/fiet/1.jpg",
      "/assets/activities/fiet/2.jpg",
    ],
  },
  {
    year: "2024-2026",
    title: "KMUTT Student Honors Day",
    description:
      "Received the Academic Excellence Award for maintaining First-Class Honors standing throughout academic years 1 to 3.",
    images: [
      "/assets/activities/honors/1.jpg",
      "/assets/activities/honors/2.jpg",
      "/assets/activities/honors/3.jpg",
      "/assets/activities/honors/4.jpg",
      "/assets/activities/honors/5.jpg",
      "/assets/activities/honors/6.png",
    ],
  },
  {
    year: "2026",
    title: "IMKEN 2026",
    description:
      "Delivered a formal English pitching presentation for 'Ikigai: The Journey of Life' to a joint panel of professors from local and Japanese universities.",
    images: [
      "/assets/activities/imken/1.jpg",
      "/assets/activities/imken/2.jpg",
      "/assets/activities/imken/3.jpg",
    ],
  },
  {
    year: "2026",
    title: "ClubHaus Multi Exhibition",
    description:
      "Served as the Creative Team Lead and Master of Ceremonies (MC) for a public exhibition hosted at the Bangkok Art and Culture Centre (BACC), earning the Rising Talent Award for the project.",
    images: [
      "/assets/activities/exhibition/1.jpg",
      "/assets/activities/exhibition/2.jpg",
      "/assets/activities/exhibition/3.jpg",
      "/assets/activities/exhibition/4.jpg",
    ],
  },
];

// --- Skills Section Data ---
export const skillsData = [
  {
    category: "Frontend",
    skills: [
      {
        name: "Next.js",
        iconUrl:
          "https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2148%2FPNG%2F512%2Fnextjs_icon_132160.png&id=132160&pack_or_individual=pack",
      },
      {
        name: "Angular",
        iconUrl:
          "https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-rouge.png",
      },
      {
        name: "React",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
      {
        name: "JavaScript",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
      },
      {
        name: "TypeScript",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      },
      {
        name: "Tailwind CSS",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
      {
        name: "BootStrap",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/960px-Bootstrap_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
      {
        name: "HTML",
        iconUrl: "https://images.icon-icons.com/171/PNG/512/html5_23329.png",
      },
      {
        name: "CSS",
        iconUrl:
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png",
      },
      {
        name: "Framer Motion",
        iconUrl:
          "https://images.seeklogo.com/logo-png/58/2/framer-icon-logo-png_seeklogo-586477.png",
      },
      {
        name: "Figma",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      },
      {
        name: "Lottie JSON",
        iconUrl:
          "https://cdn.iconscout.com/icon/free/png-256/free-lottiefiles-logo-icon-svg-download-png-4674917.png",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "C#",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/csharp.webp",
      },
      {
        name: "ASP.NET Core)",
        iconUrl:
          "https://user-images.githubusercontent.com/42860908/106164530-120e5680-61b0-11eb-954c-969c7031ffd4.png",
      },
      {
        name: "Java",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
      },
      {
        name: "PHP",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
      },
      {
        name: "Laravel",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/3840px-Laravel.svg.png",
      },
      {
        name: "RESTful APIs",
        iconUrl: "https://miro.medium.com/1*7kx2CABxc38topzfJ_vZsQ.jpeg",
      },
      {
        name: "Python",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png",
      },
      {
        name: "JWT/CORS Security",
        iconUrl: "https://jwtguard.net/images/logo.png",
      },
      {
        name: "Clean Architecture",
        iconUrl:
          "https://api.nuget.org/v3-flatcontainer/sam.cleanarchitecture.template/10.0.1/icon",
      },
    ],
  },
  {
    category: "Database & Cloud",
    skills: [
      {
        name: "Microsoft SQL Server",
        iconUrl:
          "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
      },
      {
        name: "MySQL",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
      },
      {
        name: "Azure",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/960px-Microsoft_Azure_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
      {
        name: "postgresql",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1280px-Postgresql_elephant.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
      {
        name: "vercel",
        iconUrl:
          "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/5/vercel-6xfdjwqdd2dnfsr90c0pjq.png/vercel-ltjv9ugkhzcj1yk16y59an.png?_a=DATAiZAAZAA0",
      },
      {
        name: "railway",
        iconUrl: "https://railway.com/brand/logo-dark.svg",
      },
    ],
  },
  {
    category: "DevOps & AI Automation",
    skills: [
      {
        name: "Git flow",
        iconUrl:
          "https://media.licdn.com/dms/image/v2/C4D12AQG0e-T1e2E7XQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1584958634252?e=2147483647&v=beta&t=bs9nDHEPP1aJK3gG_h9sq0R8g6nkbdzpGnDg37tnDnw",
      },
      { name: "Fork git", iconUrl: "https://git-fork.com/images/logo.png" },
      {
        name: "Agile/Scrum",
        iconUrl: "https://miro.medium.com/0*KpzqUReoWU_DEwb5.png",
      },
      {
        name: "MCP Figma",
        iconUrl:
          "https://miro.medium.com/v2/resize:fit:1200/1*TOiXt8_tZ7UShX3r6kjxVQ.png",
      },
      {
        name: "Docker",
        iconUrl:
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/docker-icon.png",
      },
      {
        name: "n8n",
        iconUrl:
          "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/n8n-color.png",
      },
    ],
  },
  {
    category: "Languages",
    skills: [
      {
        name: "Thai (Native)",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/323/323281.png",
      },
      {
        name: "English (Working Proficiency Plus - TOEIC: 870)",
        iconUrl:
          "https://www.cpttm.org.mo/wp-content/uploads/2026/05/toeic-logo-larger-green.png",
      },
    ],
  },
  {
    category: "Creative & Game",
    skills: [
      {
        name: "Unity (C#)",
        iconUrl:
          "https://images.icon-icons.com/2389/PNG/512/unity_logo_icon_144772.png",
      },
      {
        name: "Maya 3D",
        iconUrl:
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/autodesk-maya-icon.png",
      },
      {
        name: "After Effect",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Adobe_After_Effects_CC_2026_icon.svg/3840px-Adobe_After_Effects_CC_2026_icon.svg.png",
      },
      {
        name: "Illustrator",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1280px-Adobe_Illustrator_CC_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      },
      {
        name: "Photoshop",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/3840px-Adobe_Photoshop_CC_icon.svg.png",
      },
      {
        name: "Premier Pro",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/500px-Adobe_Premiere_Pro_CC_icon.svg.png",
      },
    ],
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

export const chatbotSuggestedQuestions = [
  "แนะนำตัว Kukkai ให้รู้จักหน่อย 👋",
  "ถนัด Tech Stack อะไรบ้าง? 💻",
  "มีประสบการณ์ทำงานที่ไหนมาบ้าง? 🏢",
  "โปรเจกต์ Ikigai คืออะไร? ✨",
  "ช่องทางการติดต่อ 📬",
];
