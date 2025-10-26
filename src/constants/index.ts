const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience in Web Dev" },
  { value: 40, suffix: "+", label: "Completed Projects" },
  { value: 4, suffix: "+", label: "Hackathons & Competitions" },
  { value: 100, suffix: "+", label: "Coding Challenges Solved" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Certified that Alan Saji has qualified for the degree of Bachelor of Technology, he/she having passed the above Degree Examination held in April 2025 with a Cumulative Grade Point Average(CGPA) of 8.27",
    imgPath: "/images/exp1.jpg",
    logoPath: "/images/logo1.png",
    title: "VIT Bhopal University",
    date: "2021 - 2025",
    responsibilities: [
      "Persued B.tech in Computer Science and Engineering with specialization in Gaming technology",
      "Capstone Project: Implemented an NPC using reinforcement learning to predict and counter player attack patterns.",
      "Leadership & Cultural Role: Served as the Onam Celebration Coordinator (2021), successfully organizing and managing one of the campus’s major cultural events.",
    ],
  },
  {
    review: "Certificate given to Alan Saji for successfully completing internship as Web Development Inter at Unified Mentor Pvt Ltd. During the internship, we found him consistant and hardworking.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Web Development Intern",
    date: "July 2024 - August 2024",
    responsibilities: [
      "Created a responsive web application using Firebase to manage and stream media content, improving playback latency by 20%.",
      "Developed an expense management platform with Next.js and Drizzle ORM, reducing database query times by 35%.",
      "Implemented secure authentication and role-based access control with Firebase Authentication, ensuring reliable data protection.",
    ],
  },
  {
    review: "Coming soon....",
    imgPath: "/images/exp3.jpg",
    logoPath: "/images/logo3.png",
    title: "University of Technology Sydney",
    date: "Feb 2026",
    responsibilities: [
      "Masters in Artificial Intelligence",
      "Coming soon....",
      "Coming soon....",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/imalansaji/",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/Alansaji2003",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/AlanSaji2003",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/alan-saji-b346091b6/",
  },
  {
    name: "LeetCode",
    imgPath: "/images/code.png",
    url: "https://leetcode.com/u/ALANSAJI/",
  },
];
export const reviews = [
  {
    name: "Chirag Aggarwal",
    username: "@ChiragAgg5k",
    body: "awesome stufff",
    img: "https://robohash.org/jack",
  },
  {
    name: "Tessa Mero",
    username: "@TessaMero",
    body: "🔥",
    img: "https://robohash.org/jill",
  },
  {
    name: "Arnab Chatterjee",
    username: "@arnabch20k",
    body: "Loved the ui",
    img: "https://robohash.org/john",
  },
  {
    name: "ICP Hub India - Crewsphere",
    username: "@icphub_IN",
    body: "keep building 👨‍💻",
    img: "https://robohash.org/alice",
  },
  {
    name: "Adeola",
    username: "@adeolacodes",
    body: "You’re halfway through 🫡Keep going bro🙌🏽",
    img: "https://robohash.org/bob",
  },
  {
    name: "Edward Kensington",
    username: "@EdwardKens50830",
    body: "Congrats on reaching day 36 of #100DayChallenge! Your Python project sounds amazing! Cant wait to check it out on GitHub! Keep up the great work! 💪🐍",
    img: "https://robohash.org/charlie",
  },
  {
    name: "RajeshChandak18",
    username: "@rajeshgajner21",
    body: "We are on the same track Alan bhai...",
    img: "https://robohash.org/dave",
  },
  
];

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const skills = [
  "auth0",
  "blazor",
  "cplusplus",
  "csharp",
  "css3",
  "dotnet",
  "dotnetcore",
  "git",
  "html5",
  "javascript",
  "microsoft",
  "react",
  "sqlite",
  "tailwindcss",
  "vitejs",
  "wordpress",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "MindMate – AI-Powered Real-Time Support Platform",
    description: "AI-powered platform providing real-time mental health support.",
    technologies: ["React", "Next.js", "TCSS", "Prisma ORM", "BetterAuth", "Resend"],
    image: "/assets/img/proj31.webp",
    liveUrl: "https://mind-mate.appwrite.network/",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Face Recognition Attendance System",
    description: "Automated attendance system using facial recognition.",
    technologies: ["C++", "OpenCV", "Java Swing"],
    image: "/assets/img/proj30.jpg",
    liveUrl: "",
    githubUrl: "https://github.com/Alansaji2003/face-recognition-attendance",
  },
  {
    id: 3,
    title: "Zonin - A social media website",
    description: "A full-stack social media app for sharing posts and connecting users.",
    technologies: ["React", "Next.js", "Drizzle ORM", "Clerk", "Cloudinary"],
    image: "/assets/img/proj29.webp",
    liveUrl: "https://zonin-social-media-alan-sajis-projects.vercel.app/",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Super Mall Management system - ZapShop",
    description: "Web application for managing mall operations efficiently.",
    technologies: ["React", "Tailwind", "Firebase"],
    image: "/assets/img/proj28.gif",
    liveUrl: "https://super-mall-management-app.vercel.app/",
    githubUrl: "",
  },
  {
    id: 5,
    title: "Expense Tracker - Bixpense",
    description: "Track and analyze personal expenses with authentication and charts.",
    technologies: ["Next.js", "Clerk", "Drizzle", "Tailwind CSS"],
    image: "/assets/img/proj27.gif",
    liveUrl: "https://expense-tracker-alan-saji.vercel.app/",
    githubUrl: "",
  },
  {
    id: 6,
    title: "Web Music Player",
    description: "A responsive music player with Firebase backend.",
    technologies: ["HTML", "CSS", "Firebase"],
    image: "/assets/img/proj26.gif",
    liveUrl: "https://symphonyplayer-alansaji.netlify.app/",
    githubUrl: "",
  },
  {
    id: 7,
    title: "Stock Price Prediction Website",
    description: "Predicts stock prices using ML models deployed via Streamlit.",
    technologies: ["Python", "Streamlit"],
    image: "/assets/img/proj25.gif",
    liveUrl: "",
    githubUrl: "https://github.com/Alansaji2003/stock-price-website",
  },
  {
    id: 8,
    title: "Real time chat App with socket.io",
    description: "Chat app built using WebSockets for real-time communication.",
    technologies: ["JavaScript", "Socket.IO", "HTML", "CSS"],
    image: "/assets/img/proj24.gif",
    liveUrl: "",
    githubUrl: "https://github.com/Alansaji2003/real-time-chat-apps/tree/main/WebSocketApp",
  },
  {
    id: 9,
    title: "Facial Beauty Prediction using neural network (alexnet)",
    description: "Predicts facial beauty scores using AlexNet CNN model.",
    technologies: ["JavaScript", "Python", "AI/ML", "Flask"],
    image: "/assets/img/proj23.gif",
    liveUrl: "",
    githubUrl: "https://github.com/Alansaji2003/Facial-Beauty-Prediction",
  },
  {
    id: 10,
    title: "Full-Stack Movie Website",
    description: "Complete movie app with React frontend and Java Spring backend.",
    technologies: ["React", "Java Spring Boot", "MongoDB"],
    image: "/assets/img/proj22.png",
    liveUrl: "",
    githubUrl: "https://github.com/Alansaji2003/100-days-of-code/tree/master/day96",
  },
  {
    id: 11,
    title: "NFT MarketPlace - Buy Sell and Mint NFT",
    description: "Blockchain-based NFT marketplace for minting and trading NFTs.",
    technologies: ["React", "ICP", "Motoko", "JavaScript"],
    image: "/assets/img/proj21.webp",
    liveUrl: "",
    githubUrl: "https://github.com/Alansaji2003/NFT_MarketPlace",
  },
  {
    id: 12,
    title: "Crypto Faucet for custom token (DLN)",
    description: "Decentralized faucet to distribute custom DLN tokens.",
    technologies: ["React", "ICP", "Motoko", "JavaScript"],
    image: "/assets/img/proj20.png",
    liveUrl: "",
    githubUrl: "https://github.com/Alansaji2003/DLN-TOKEN-FAUCET",
  },
  {
    id: 13,
    title: "Bowling ball and pins",
    description: "3D animation of bowling ball physics simulation.",
    technologies: ["Blender", "Bezier Curves"],
    image: "/assets/img/proj19.gif",
    liveUrl: "https://skfb.ly/oT8VV",
    githubUrl: "",
  },
  {
    id: 14,
    title: "Sclupting - Evil Face",
    description: "3D sculpting project focused on facial anatomy.",
    technologies: ["Blender"],
    image: "/assets/img/proj18.png",
    liveUrl: "https://skfb.ly/oSZqq",
    githubUrl: "",
  },
  {
    id: 15,
    title: "Animation - Walk cycle and Rigging Blob Man",
    description: "Animated character with rigging and walk cycle setup.",
    technologies: ["Blender"],
    image: "/assets/img/proj15.gif",
    liveUrl: "https://skfb.ly/oSNQT",
    githubUrl: "",
  },
  {
    id: 16,
    title: "Animation - Spitfire jet on top of buildings",
    description: "3D animation of a Spitfire jet flying over city buildings.",
    technologies: ["Blender"],
    image: "/assets/img/proj13.gif",
    liveUrl: "https://skfb.ly/oSJq7",
    githubUrl: "",
  },
  {
    id: 17,
    title: "Basic Defi App on ICP blockchain",
    description: "A decentralized finance app built using Motoko and ICP.",
    technologies: ["HTML", "CSS", "Motoko", "JavaScript", "ICP Blockchain"],
    image: "/assets/img/proj14.png",
    liveUrl: "",
    githubUrl: "https://github.com/Alansaji2003/Vbank-ICP",
  },
  {
    id: 18,
    title: "Quiz App (Gamified) with React (desktop)",
    description: "Interactive quiz application with gamification.",
    technologies: ["React", "MUI", "JavaScript"],
    image: "/assets/img/proj12.png",
    liveUrl: "",
    githubUrl: "https://github.com/Alansaji2003/100-days-of-code/tree/master/day91",
  },
  {
    id: 19,
    title: "Dinosaur Low Poly 3D model",
    description: "Low poly dinosaur model made in Blender.",
    technologies: ["Blender"],
    image: "/assets/img/proj11.png",
    liveUrl: "https://skfb.ly/oSrMS",
    githubUrl: "",
  },
  {
    id: 20,
    title: "KeepiT | A notes app",
    description: "Simple note-taking app built using React and GitHub Pages.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "GitHub Pages"],
    image: "/assets/img/proj10.png",
    liveUrl: "https://alansaji2003.github.io/KeepiT-app/",
    githubUrl: "",
  },
  {
    id: 21,
    title: "Light House 3D model (Lowpoly)",
    description: "Low poly lighthouse 3D model design.",
    technologies: ["Blender", "3D Modeling"],
    image: "/assets/img/proj8.png",
    liveUrl: "https://skfb.ly/oRSKP",
    githubUrl: "",
  },
  {
    id: 22,
    title: "Modular dungeon 3D model (Lowpoly)",
    description: "Low poly dungeon environment made in Blender.",
    technologies: ["Blender", "3D Modeling"],
    image: "/assets/img/proj9.png",
    liveUrl: "https://skfb.ly/oRW78",
    githubUrl: "",
  },
  {
    id: 23,
    title: "Transport Service Website",
    description: "Web app for managing transport services with live maps.",
    technologies: ["Node", "Express", "MongoDB", "Mapbox API", "Bootstrap"],
    image: "/assets/img/proj1.png",
    liveUrl: "",
    githubUrl: "https://github.com/EPICS-UTS/UTS",
  },
  {
    id: 24,
    title: "Anime Info Website",
    description: "Fetches anime data via AniList API and displays details.",
    technologies: ["HTML", "CSS", "JavaScript", "AniList API", "GraphQL"],
    image: "/assets/img/proj2.png",
    liveUrl: "",
    githubUrl: "https://github.com/Alansaji2003/AnimeFacts",
  },
  {
    id: 25,
    title: "Recipe Web App",
    description: "Recipe app integrating Edamam API with jQuery frontend.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Edamam API"],
    image: "/assets/img/proj3.png",
    liveUrl: "",
    githubUrl: "https://github.com/Alansaji2003/Recipe-web-app",
  },
  {
    id: 26,
    title: "Amazon clone",
    description: "Static clone of Amazon homepage.",
    technologies: ["HTML", "CSS"],
    image: "/assets/img/proj4.png",
    liveUrl: "",
    githubUrl: "https://github.com/Alansaji2003/100-days-of-code/tree/master/day62",
  },
  {
    id: 27,
    title: "Netflix clone",
    description: "Responsive Netflix landing page clone.",
    technologies: ["HTML", "CSS"],
    image: "/assets/img/proj5.png",
    liveUrl: "",
    githubUrl: "https://github.com/Alansaji2003/100-days-of-code/tree/master/day63",
  },
  {
    id: 28,
    title: "Family Travel Tracker",
    description: "App to record and visualize travel history for families.",
    technologies: ["Node.js", "Postgres", "HTML", "CSS", "JavaScript"],
    image: "/assets/img/proj6.png",
    liveUrl: "",
    githubUrl: "https://github.com/Alansaji2003/100-days-of-code/tree/master/day59",
  },
  {
    id: 29,
    title: "Shadow Dog Game (JAVASCRIPT)",
    description: "2D side-scrolling game built with OOP principles in JS.",
    technologies: ["JavaScript", "Game Development", "OOP"],
    image: "/assets/img/proj7.png",
    liveUrl: "https://alansaji2003.github.io/javascript-game/",
    githubUrl: "",
  },
  {
    id: 30,
    title: "100 Days of Python Projects",
    description: "A compilation of daily Python learning and projects.",
    technologies: ["Python", "Flask", "Django"],
    image: "/assets/img/proj16.jpg",
    liveUrl: "",
    githubUrl: "https://github.com/Alansaji2003/100daysofpython",
  },
  {
    id: 31,
    title: "100 Days of Code on Web Development",
    description: "Journey of 100 web development projects and experiments.",
    technologies: ["HTML", "CSS", "JavaScript", "Node", "MongoDB", "React", "Blockchain"],
    image: "/assets/img/proj17.jpg",
    liveUrl: "",
    githubUrl: "https://github.com/Alansaji2003/100-days-of-code",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  
};
