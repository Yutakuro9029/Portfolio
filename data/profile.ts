// data/profile.ts: edit your personal content here.

export const profile = {
  name: "Phuminan Kuroda",
  role: "AI / ML Engineer",
  tagline:
    "I build AI systems end to end, from retrieval and vision models to APIs that run in production.",
  intro:
    "Fourth-year Information Technology student at Thai-Nichi Institute of Technology with a 4.00 GPAX. I have built a hybrid RAG chatbot, a helmet-detection model served through a CI/CD-deployed FastAPI service, and a GPT-style transformer written from first principles. I also work as a teaching assistant, mentoring students in Java, C# and databases.",
  email: "yutakuroda9029@gmail.com",
  github: "https://github.com/Yutakuro9029",
  linkedin: "https://www.linkedin.com/in/yutakuroda",
  resume: "/Resume_Phuminan_Kuroda.pdf", // put the PDF in /public
  photo: "/profile.jpg", // lives in /public
};

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "4.00", label: "GPAX, B.Sc. Information Technology" },
  { value: "4", label: "AI/ML projects built end to end" },
  { value: "3×", label: "Academic Excellence award (2024–2026)" },
  { value: "30+", label: "Students mentored as a teaching assistant" },
];

export const facts = [
  { k: "Focus", v: "RAG pipelines, computer vision, transformers, model deployment (MLOps)" },
  { k: "Approach", v: "Implement the core idea from scratch, measure it, then ship it behind a tested API" },
  { k: "Languages", v: "Thai (native), English (TOEIC 775), Japanese (beginner)" },
  { k: "Also", v: "Dashboards and automation with Power BI, Looker Studio, Power Apps and Power Automate" },
];

export const skills = [
  { group: "AI, ML & LLMs", items: ["PyTorch", "Ultralytics YOLO", "RAG", "ChromaDB", "Ollama", "Prompt Engineering"] },
  { group: "Languages & Databases", items: ["Python", "C++", "C#", "Java", "JavaScript", "Oracle SQL", "MongoDB"] },
  { group: "Deployment", items: ["FastAPI", "Docker", "GitHub Actions", "Google Cloud", "Render", "Streamlit", "Git"] },
  { group: "Analytics & Automation", items: ["Power BI", "Looker Studio", "Power Apps", "Power Automate"] },
];

export const education = {
  school: "Thai-Nichi Institute of Technology",
  degree: "Bachelor of Science, Information Technology",
  period: "2023 – 2027 (expected)",
  gpax: "4.00 / 4.00",
  summary:
    "Fourth-year student with a perfect GPAX, and personal projects spanning retrieval, computer vision, deep learning and deployment.",
};

export const honors = [
  { title: "Certificate of Academic Excellence", note: "Awarded three consecutive years: 2024, 2025, 2026" },
  { title: "TCS Academic Interface Program (AIP)", note: "Artificial Intelligence & Cyber Security" },
  { title: "The Web Developer Bootcamp", note: "Full-stack web development course" },
];

export const teaching = {
  title: "Teaching Assistant",
  place: "Thai-Nichi Institute of Technology",
  points: [
    "Mentored 30+ students in Java OOP, C# and Database Systems labs",
    "Debugged student code and explained OOP principles and SQL queries",
    "Designed quizzes and midterm/final programming problems, and graded submissions alongside instructors",
  ],
};
