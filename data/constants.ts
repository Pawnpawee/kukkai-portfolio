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
export const designProjectsData = [];
export const animationProjectsData = [];
export const renderingProjectsData = [];
export const productionProjectsData = [];

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
    count: renderingProjectsData.length,
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
