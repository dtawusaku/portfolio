export const siteConfig = {
  name: "David Tony-Awusaku",
  title: "Software Engineer",
  description: "Portfolio website of David Tony-Awusaku",
  accentColor: "#1d4ed8",
  social: {
    email: "davidtonyawusaku@gmail.com", // email
    linkedin: "https://linkedin.com/in/davidtony",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/dtawusaku",
  },
  aboutMe: " I am a ...",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "ECOWAS CCJ",
      title: "Graduate IT Support Specialist",
      dateRange: "Feb 2024 – Aug 2024",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Huawei Technologies",
      title: "Cloud Technology Intern",
      dateRange: "Mar 2022 – Jun 2022",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Netapps Marketplace",
      title: "Web Development Intern",
      dateRange: "Feb 2022 – Mar 2022",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "Dublin City University",
      degree: "Master of Science in Computing",
      dateRange: "2024 - 2025",
      achievements: [
        "Graduated with Upper Second Class Honours (2:1)",
        'Completed dissertation on "Evaluating the Efficacy of Multilingual Speech Recognition Models for Igbo Speech Recognition using Data Augmentation Techniques"',
        // "Industry Labs",
      ], //Also make new compnoent for moduels later
    },
    {
      school: "Babcock University",
      degree: "Bachelor of Science in Software Engineering",
      dateRange: "2019 - 2023",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
