import {
  IconAppWindow,
  IconBed,
  IconBellRinging,
  IconBrandReact,
  IconBuildingArch,
  IconBulb,
  IconCategoryPlus,
  IconChartHistogram,
  IconPresentation,
  IconReportAnalytics,
  IconSeeding,
  IconTestPipe,
  IconUsers,
} from "@tabler/icons-react";
import {
  AppWindowIcon,
  BookOpenIcon,
  ServerIcon,
  LandPlotIcon,
} from "lucide-react";

export const app = {
  name: "Four Real",
  description: "4 Real stock trading app",
};

export const user = {
  fullName: "Torvalds Unix",
  firstName: "Torvalds",
  lastName: "Unix",
  initials: "Tux",
  email: "torvalds.unix@linux.com",
};

export const repos = [
  {
    name: "Frontend",
    url: "https://bitbucket.org/densermeerkat/fr-frontend/src",
    icon: AppWindowIcon,
  },
  {
    name: "Backend",
    url: "https://bitbucket.org/densermeerkat/fr-backend/src",
    icon: ServerIcon,
  },
  {
    name: "Documentation",
    url: "https://bitbucket.org/densermeerkat/fr-doc/src",
    icon: BookOpenIcon,
  },
];

export const navItems = [
  {
    title: "Home",
    url: "/",
    icon: IconPresentation,
    items: [],
  },
  {
    title: "Team",
    url: "/team",
    icon: IconUsers,
    items: [],
  },
  {
    title: "Intro",
    url: "/intro",
    icon: IconBulb,
    items: [],
  },
  {
    title: "System",
    url: "/system",
    icon: IconBuildingArch,
    items: [],
  },
  {
    title: "Tech",
    url: "/tech",
    icon: IconBrandReact,
    items: [],
  },
  {
    title: "Demo",
    url: "/demo",
    icon: IconAppWindow,
    items: [],
  },
  {
    title: "Test",
    url: "/test",
    icon: IconTestPipe,
    items: [],
  },
  {
    title: "Challenges",
    url: "/challenges",
    icon: LandPlotIcon,
    items: [],
  },
  {
    title: "Future",
    url: "/future",
    icon: IconSeeding,
    items: [],
  },
  {
    title: "Conclusion",
    url: "/conclusion",
    icon: IconBed,
    items: [],
  },
];

export const team = [
  {
    src: "/images/team/ragulraj.jpg",
    name: "Ragul Raj M",
    initials: "RR",
    universiity: "CEG, Chennai",
    domain: "Frontend",
  },
  {
    src: "/images/team/srinidhi.jpg",
    name: "Srinidhi B",
    initials: "SB",
    universiity: "VIT, Chennai",
    domain: "Backend",
  },
  {
    src: "/images/team/tejas.jpg",
    name: "Tejas V",
    initials: "TV",
    universiity: "SSN, Chennai",
    domain: "Frontend",
  },
  {
    src: "/images/team/vijayalakshmi.jpg",
    name: "Vijayalakshmi S",
    initials: "VS",
    universiity: "CEG, Chennai",
    domain: "Backend",
  },
];

export const techStack = {
  "Project Management": [
    { name: "Jira", src: "/images/tech/jira.png" },
    { name: "Bitbucket", src: "/images/tech/bitbucket.png" },
  ],
  Frontend: [
    { name: "React", src: "/images/tech/react.png" },
    { name: "Next.js", src: "/images/tech/nextjs.png" },
    { name: "Tailwind CSS", src: "/images/tech/tailwind.png" },
  ],
  Backend: [
    { name: "Java", src: "/images/tech/java.png" },
    { name: "Spring", src: "/images/tech/spring.png" },
    { name: "MySQL", src: "/images/tech/mysql.png" },
  ],
  DevOps: [
    { name: "Vercel", src: "/images/tech/vercel.png" },
    { name: "Docker", src: "/images/tech/docker.png" },
    { name: "VS Code", src: "/images/tech/vscode.png" },
    { name: "IntelliJ", src: "/images/tech/intellij.png" },
  ],
};

export const futureEnhancements = [
  {
    icon: IconBellRinging,
    content: "Push Notifications for order processing updates.",
  },
  {
    icon: IconChartHistogram,
    content: "Better Stock Analytics.",
  },
  {
    icon: IconReportAnalytics,
    content: "Stock Recommendations & Risk Analysis.",
  },
  {
    icon: IconCategoryPlus,
    content: "More investment options like Mutual Funds, Bonds.",
  },
];

export const challengesAndLearnings = [
  {
    challenge: "Bitbucket–Jira integration issues during project setup",
    learning: "Troubleshoot and configure development tool integrations",
  },
  {
    challenge: "Backend database connection problems",
    learning: "Set up and maintain reliable database connectivity",
  },
  {
    challenge: "Java naming conventions for service/controller layers",
    learning: "Enforce consistent naming and separation of concerns in Java",
  },
  {
    challenge: "Incompatible framework and hosting platform",
    learning:
      "Adapt to technical limitations and make informed tech stack decisions",
  },
];
