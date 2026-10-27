export interface ClientProject {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  status: "Ongoing" | "Completed" | "Upcoming";
  image: string;
  images?: string[];
  description: string;
  overview: string;
  developersNote: string;
  keyFeatures: string[];
  deliverables: string[];
  challenges: string[];
  futurePlans: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  timeline: string;
  role: string;
  teamMembers: { name: string; role: string }[];
}

const imageBase =
  "https://raw.githubusercontent.com/Ramjanict/NXDI-Digital-Process-Intelligence/main/public/assets/Images";

export const nxdiProject: ClientProject = {
  slug: "nxdi",
  title: "NXDI",
  tagline: "Intelligent Processes & Workflow Automation",
  category: "Digital Transformation & Operations",
  status: "Completed",
  image: `${imageBase}/digital_transformation_future.png`,
  images: [
    `${imageBase}/digital_transformation_future.png`,
    `${imageBase}/process_mining_insights.png`,
    `${imageBase}/operational_growth_kpi.png`,
    `${imageBase}/intelligent_automation_rpa.png`,
    `${imageBase}/homecare_lead_intelligence.png`,
  ],
  description:
    "A Melbourne consultancy marketing platform that presents NXDI's Mine, Improve, and Automate method for discovering operational friction and scaling Home Care client pipelines.",
  overview:
    "NXDI is a digital transformation and operational consultancy site built to explain how organisations mine real workflows, improve them, and automate the work that slows growth. The experience is aimed at Home Care and healthcare providers that need to capture qualified leads faster while keeping onboarding consistent. Sticky full-screen stories walk through the M.I.A. method, supported by a contact flow and a visual system for process mining, automation, growth metrics, and client operations.",
  developersNote:
    "Designed and built the marketing site with Next.js 16, React 19, and TypeScript. Implemented the sticky Mine, Improve, and Automate scroll stack, responsive landing sections, and a static export configured for Vercel. Generated the process, automation, growth, home-care, and transformation visuals and wired them into the project profile.",
  keyFeatures: [
    "Sticky full-screen Mine, Improve, and Automate storytelling",
    "Home Care lead-generation and onboarding narrative",
    "Benefit grid covering client growth, efficiency, accuracy, and workforce focus",
    "Accessible FAQ accordion and trust section",
    "Contact page with inquiry form, email, and phone details",
    "Responsive glass navigation with section scrolling",
    "Static export ready for global edge delivery",
  ],
  deliverables: [
    "Next.js 16 App Router site with React 19 and TypeScript",
    "Landing experience for the M.I.A. methodology",
    "Contact and partnership inquiry page",
    "Generated visual set for mining, automation, growth, home care, and transformation",
    "Production build on Next.js 16.4.3",
    "Vercel production deployment",
  ],
  challenges: [
    "Replacing a heavy scroll animation with a sticky card stack that stays readable under the navbar",
    "Keeping long methodology copy inside full-viewport panels on desktop and phone",
    "Shipping a static export while moving off a Next.js release Vercel would not deploy",
  ],
  futurePlans: [
    "Connect the contact and newsletter forms to a real inbox",
    "Replace placeholder FAQ, footer, and contact details with final copy",
    "Add case-study pages for Home Care client acquisition results",
  ],
  tags: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
  ],
  liveUrl: "https://nxdi-mu.vercel.app/",
  githubUrl: "https://github.com/Ramjanict/NXDI-Digital-Process-Intelligence",
  timeline: "2025 - Present",
  role: "Frontend Engineer",
  teamMembers: [{ name: "Md Ramjan Ali", role: "Frontend Engineer" }],
};
