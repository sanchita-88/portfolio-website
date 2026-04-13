export const navLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "Skills", href: "#skills" },
  { id: 3, name: "Education", href: "#experience" },
  { id: 4, name: "Projects", href: "#projects" },
  { id: 5, name: "Contact", href: "#contact" },
];

const svgLogo = (bg: string, text: string, textColor: string = "white") =>
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' rx='16' fill='${encodeURIComponent(bg)}'/%3E%3Ctext x='60' y='68' font-family='Arial' font-size='26' font-weight='bold' fill='${encodeURIComponent(textColor)}' text-anchor='middle'%3E${text}%3C/text%3E%3C/svg%3E`;

const svgIcon = (bg: string, text: string) =>
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' rx='12' fill='${encodeURIComponent(bg)}'/%3E%3Ctext x='40' y='46' font-family='Arial' font-size='18' font-weight='bold' fill='white' text-anchor='middle'%3E${text}%3C/text%3E%3C/svg%3E`;

export const myProjects = [
  {
    title: "AI Web Crawler – Dark Pattern Detector",
    desc: "An AI-powered web crawler that detects 9 types of deceptive UI tricks in websites using NLP, ML classification and Computer Vision.",
    subdesc:
      "Implemented semantic focused crawling with Sentence-BERT embeddings, hybrid detection combining rule-based matching with DistilBERT sentiment analysis, and OpenCV screenshot analysis. Built a React dashboard with live progress tracking, interactive site graph and pattern alerts with confidence scoring.",
    href: "https://github.com/SarthaK122112",
    source: "https://github.com/SarthaK122112",
    logo: svgLogo("#7C3AED", "AI\nCrawl"),
    logoStyle: {
      backgroundColor: "#b18eff",
      background:
        "linear-gradient(0deg, #B18EFF50, #B18EFF50), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(177, 142, 255, 1)",
      boxShadow: "0px 0px 60px 0px rgba(177, 142, 255, 0.3)",
    },
    tags: [
      { id: 1, name: "Python", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { id: 2, name: "React.js", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { id: 3, name: "FastAPI", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { id: 4, name: "OpenCV", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { id: 5, name: "Redis", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    ],
  },
  {
    title: "Intrusion Detection System",
    desc: "A machine learning based IDS to classify IoT network traffic from Philips as normal or malicious based on protocol and behavioral patterns.",
    subdesc:
      "Performed data cleaning, label encoding, and feature engineering to extract meaningful attributes from packet data. Applied supervised learning algorithms including Random Forest, SVM, Logistic Regression and Neural Networks for network anomaly classification.",
    href: "https://github.com/SarthaK122112",
    source: "https://github.com/SarthaK122112",
    logo: svgLogo("#0369A1", "IDS"),
    logoStyle: {
      backgroundColor: "#4FC3F7",
      background:
        "linear-gradient(0deg, #4FC3F750, #4FC3F750), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(79, 195, 247, 1)",
      boxShadow: "0px 0px 60px 0px rgba(79, 195, 247, 0.3)",
    },
    tags: [
      { id: 1, name: "Python", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { id: 2, name: "Scikit-learn", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { id: 3, name: "XGBoost", path: "https://cdn.simpleicons.org/xgboost/189AB4" },
      { id: 4, name: "Pandas", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { id: 5, name: "NumPy", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    ],
  },
  {
    title: "DeepFake Detection System",
    desc: "A deep learning based Deepfake Detection System using Transfer Learning with EfficientNetB4 CNN architecture.",
    subdesc:
      "Classifies images as 'Real' or 'Fake' by incorporating robust Data Augmentation and strategic callbacks (ModelCheckpoints / EarlyStopping) to prevent overfitting, resulting in a highly accurate binary classification solution.",
    href: "https://github.com/SarthaK122112",
    source: "https://github.com/SarthaK122112",
    logo: svgLogo("#166534", "DFDS"),
    logoStyle: {
      backgroundColor: "#A0F0BC",
      background:
        "linear-gradient(0deg, #A0F0BC50, #A0F0BC50), linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(208, 213, 221, 0.85) 100%)",
      border: "0.2px solid rgba(160, 240, 188, 1)",
      boxShadow: "0px 0px 60px 0px rgba(135, 234, 174, 0.4)",
    },
    tags: [
      { id: 1, name: "TensorFlow", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { id: 2, name: "Keras", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
      { id: 3, name: "Python", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { id: 4, name: "OpenCV", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { id: 5, name: "NumPy", path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    company: "Manipal University Jaipur",
    position: "B.Tech – Computer Science & Engineering (Data Science)",
    duration: "2023 – 2027",
    icon: svgIcon("#1E40AF", "MUJ"),
    technologies: [
      "Python", "Java", "C", "SQL",
      "Machine Learning", "Deep Learning",
      "Data Structures & Algorithms",
      "Operating Systems", "OOPs", "RDBMS", "Computer Networks",
    ],
    projects: [
      { name: "CGPA: 8.02", description: "", link: "" },
      { name: "Jaipur, Rajasthan", description: "", link: "" },
    ],
  },
  {
    id: 2,
    company: "Google · Stanford Online · (ISC)²",
    position: "Certifications",
    duration: "2023 – Present",
    icon: svgIcon("#EA4335", "CERT"),
    technologies: ["Cybersecurity", "Network Security", "Machine Learning", "Cryptography"],
    projects: [
      { name: "Foundations of Cybersecurity – Google", description: "", link: "" },
      { name: "Play It Safe: Manage Security Risks – Google", description: "", link: "" },
      { name: "Connect and Protect: Networks – Google", description: "", link: "" },
      { name: "Machine Learning Specialization – Stanford / DeepLearning.AI", description: "", link: "" },
      { name: "Cryptography – (ISC)²", description: "", link: "" },
    ],
  },
  {
    id: 3,
    company: "Hackathons & Competitions",
    position: "Achievements",
    duration: "2023 – 2025",
    icon: svgIcon("#B45309", "ACH"),
    technologies: ["MUN", "Hackathon", "Cybersecurity", "AI/ML"],
    projects: [
      { name: "🥈 TECH TORNADO 2.0 – 2nd Place (Cypher Club, MUJ)", description: "", link: "" },
      { name: "🏆 SIH 2025 – Top 10 Internal Round (Smart India Hackathon)", description: "", link: "" },
      { name: "📜 IMUN 194.0 – Appreciation Letter (MUN Debate)", description: "", link: "" },
    ],
  },
];

export const socialLinks = [
  { url: "https://github.com/SarthaK122112" },
  { url: "https://linkedin.com/in/sarthak-khare-093599296" },
];

export const skills = [
  "Python", "Java", "C", "SQL",
  "TensorFlow", "Keras", "Scikit-learn", "OpenCV",
  "Pandas", "NumPy", "XGBoost",
  "Machine Learning", "Deep Learning", "Computer Vision", "NLP",
  "Cybersecurity", "Intrusion Detection",
  "FastAPI", "React", "Selenium", "Celery", "Redis",
  "Git", "Linux", "VS Code", "Anaconda", "Wireshark", "N-Map",
  "Feature Engineering", "Transfer Learning", "Classification",
  "Model Evaluation", "DistilBERT", "Sentence-BERT",
];