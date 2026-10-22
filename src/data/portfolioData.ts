export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  skills: { name: string; tag?: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: 'AIML' | 'Web Development' | 'Creative';
  isPlaceholder: boolean;
  githubUrl?: string;
  liveUrl?: string;
  accentColor: string;
}

export const PERSONAL_INFO = {
  name: "Junaid Hashir",
  roleTitle: "AIML Engineering Student | Website Creator | Coding Enthusiast",
  bio: "Passionate about the intersection of Artificial Intelligence, Machine Learning, and modern web technologies. Dedicated to crafting responsive, user-friendly digital experiences and exploring smart algorithmic solutions.",
  aboutText: `I am an engineering student at AJ Institute of Engineering and Technology in Mangaluru, specializing in Computer Science Engineering (Artificial Intelligence and Machine Learning). 
  
My passion lies in bridging computational intelligence with intuitive digital solutions. Whether it's architecting modern, accessible websites, diving into algorithms, or editing creative audiovisual content, I am constantly learning, building, and refining practical skills for real-world impact.`,
  email: "junnijuniad3@gmail.com",
  linkedIn: "https://www.linkedin.com/in/junaid-hashir-127180446",
  github: "https://github.com", // Customizable
  location: "Mangaluru, Karnataka, India",
  college: "AJ Institute of Engineering and Technology, Mangaluru",
  course: "Computer Science Engineering – Artificial Intelligence and Machine Learning",
  resumeUrl: "/resume.pdf",
  status: "Open for Internships & Projects",
};

export const WHAT_I_DO = [
  {
    id: "web-creation",
    title: "Website Creation",
    subtitle: "Modern & Responsive Interfaces",
    description: "Designing and developing attractive, fast, and user-centric websites. Focused on clean layouts, modern glassmorphic aesthetics, and seamless experiences across all screen sizes.",
    icon: "Layout",
    tags: ["Responsive Design", "Modern UI/UX", "Clean Code", "Web Performance"],
    gradient: "from-blue-500/20 to-cyan-500/10",
    borderGlow: "group-hover:border-blue-500/50",
  },
  {
    id: "coding",
    title: "Coding & Logic",
    subtitle: "Practical Problem Solving",
    description: "Actively studying core programming languages, algorithms, and practical software development. Building clean, structured logic to solve real-world technical problems.",
    icon: "Code2",
    tags: ["Algorithmic Thinking", "Data Structures", "Clean Architecture", "Continuous Learning"],
    gradient: "from-indigo-500/20 to-purple-500/10",
    borderGlow: "group-hover:border-indigo-500/50",
  },
  {
    id: "creative-editing",
    title: "Creative Editing",
    subtitle: "Audio & Visual Content",
    description: "Crafting engaging multimedia through sound and video editing. Enhancing digital narratives with crisp pacing, clean transitions, and balanced audio production.",
    icon: "Film",
    tags: ["Video Editing", "Sound Design", "Audio Mixing", "Digital Storytelling"],
    gradient: "from-purple-500/20 to-pink-500/10",
    borderGlow: "group-hover:border-purple-500/50",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "aiml",
    title: "Artificial Intelligence & Machine Learning",
    description: "Foundational concepts, exploratory data analysis, neural networks, and model building principles.",
    icon: "BrainCircuit",
    gradient: "from-blue-500 to-indigo-600",
    skills: [
      { name: "Machine Learning Concepts" },
      { name: "Data Exploration & Analysis" },
      { name: "Python for AI" },
      { name: "Model Training Fundamentals" },
      { name: "AI Application Design" }
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Building modern frontend applications with scalable component architecture and responsive design.",
    icon: "Globe",
    gradient: "from-cyan-500 to-blue-600",
    skills: [
      { name: "React & Modern JavaScript" },
      { name: "Tailwind CSS Styling" },
      { name: "HTML5 Semantic Structure" },
      { name: "Responsive Mobile-First UI" },
      { name: "Vite & Modern Tooling" }
    ],
  },
  {
    id: "programming",
    title: "Programming and Coding",
    description: "Strengthening core programming fundamentals, data structures, and algorithmic logic.",
    icon: "Terminal",
    gradient: "from-indigo-500 to-purple-600",
    skills: [
      { name: "Core Programming Logic" },
      { name: "Object-Oriented Concepts" },
      { name: "Problem Solving" },
      { name: "Version Control (Git)" },
      { name: "Debugging & Optimization" }
    ],
  },
  {
    id: "web-creation",
    title: "Website Creation",
    description: "Transforming design ideas into elegant, user-friendly live web experiences.",
    icon: "Palette",
    gradient: "from-purple-500 to-pink-600",
    skills: [
      { name: "User Interface Design" },
      { name: "Glassmorphism & Dark Themes" },
      { name: "Typography & Layouts" },
      { name: "Component Hierarchy" },
      { name: "Site Deployment (Vercel/Netlify)" }
    ],
  },
  {
    id: "media-editing",
    title: "Sound and Video Editing",
    description: "Assembling engaging multimedia content with polished audio and video post-production.",
    icon: "Sparkles",
    gradient: "from-pink-500 to-rose-600",
    skills: [
      { name: "Video Post-Production" },
      { name: "Audio Track Balancing" },
      { name: "Pacing & Transition Sync" },
      { name: "Content Creation Workflows" },
      { name: "Digital Media Optimization" }
    ],
  },
];

export const EDUCATION_DATA = {
  institution: "AJ Institute of Engineering and Technology",
  location: "Mangaluru, Karnataka, India",
  degree: "Bachelor of Engineering (B.E.)",
  specialization: "Computer Science Engineering – Artificial Intelligence and Machine Learning",
  status: "Currently Pursuing",
  highlights: [
    "Comprehensive curriculum integrating Artificial Intelligence, Machine Learning algorithms, and core Computer Science.",
    "Hands-on exposure to programming paradigms, mathematics for machine learning, data structures, and database systems.",
    "Active participation in technical projects, engineering workshops, and emerging technology labs."
  ]
};

// Sample project placeholders clearly labeled to avoid inventing fake claims
export const SAMPLE_PROJECTS: ProjectItem[] = [
  {
    id: "project-1",
    title: "AI Image Classifier & Insights",
    subtitle: "Sample Machine Learning Placeholder",
    description: "A prototype machine learning project concept demonstrating image classification and predictive analysis using neural network architectures.",
    tags: ["Machine Learning", "Python", "Computer Vision", "AI Analytics"],
    category: "AIML",
    isPlaceholder: true,
    githubUrl: "https://github.com",
    liveUrl: "#projects",
    accentColor: "from-blue-500 to-indigo-600",
  },
  {
    id: "project-2",
    title: "Modern Interactive Portfolio",
    subtitle: "Live Web Application",
    description: "A fast, responsive personal portfolio built with React, Vite, and Tailwind CSS featuring dark glassmorphic styling, smooth navigation, and contact integration.",
    tags: ["React", "Vite", "Tailwind CSS", "Responsive UI"],
    category: "Web Development",
    isPlaceholder: false, // The current portfolio itself is real!
    githubUrl: "https://github.com",
    liveUrl: "#home",
    accentColor: "from-cyan-500 to-blue-500",
  },
  {
    id: "project-3",
    title: "Algorithmic Code Visualizer",
    subtitle: "Sample Programming Project Placeholder",
    description: "An educational concept project illustrating sorting, graph traversal, and search algorithms through dynamic visual step-by-step animations.",
    tags: ["Algorithms", "Data Structures", "Frontend Logic", "Visual Learning"],
    category: "Web Development",
    isPlaceholder: true,
    githubUrl: "https://github.com",
    liveUrl: "#projects",
    accentColor: "from-indigo-500 to-purple-600",
  },
  {
    id: "project-4",
    title: "Creative Multimedia Reel & Sound Sync",
    subtitle: "Sample Creative Editing Placeholder",
    description: "A showcase placeholder for digital sound design and high-energy video editing projects, highlighting rhythmic beat matching and color grading.",
    tags: ["Video Editing", "Sound Design", "Motion Sync", "Audio Mastering"],
    category: "Creative",
    isPlaceholder: true,
    githubUrl: "https://github.com",
    liveUrl: "#projects",
    accentColor: "from-purple-500 to-pink-600",
  },
];
