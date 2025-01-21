import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  simplePortfolio,
  spaceX,
  sidcup,
  Krist,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "React", icon: reactjs },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "JS", icon: javascript },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Full-Stack Web Development Intern",
    company_name: "Self-Directed | Personal Projects",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Built and deployed a responsive e-commerce website using the MERN stack, featuring secure user authentication, dynamic product pages, and a fully functional shopping cart.",
      "Designed RESTful APIs using Node.js and Express.js to handle CRUD operations, integrating MongoDB for database management.",
    ],
  },
  {
    title: "Web Development Trainee",
    company_name: "Online Learning Platform | Project-Based Learning",
    icon: mathwork,
    iconBg: "#161329",
    date: "May 2023 - Sep 2023",
    points: [
      "Developed a customer relationship management (CRM) tool using the MERN stack, enabling users to track leads, manage contacts, and generate reports.",
      "Implemented JWT-based authentication and role-based access control for secure and scalable application usage.",
      "Deployed the application on cloud platforms using Heroku and optimized database queries for faster load times.",
    ],
  },
  {
    title: "Frontend Development Contributor",
    company_name: "Open Source Project | GitHub",
    icon: edunet,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      "Contributed to the development of a collaborative task management system using React.js, implementing features like drag-and-drop task reordering and user role management.",
      "Optimized front-end components for better performance and responsiveness across various devices using Tailwind CSS and JavaScript ES6.",
      "Collaborated with a distributed team, actively participating in code reviews and improving the overall codebase quality.",
    ],
  },
];

export const projects = [
  {
    name: "Weather-App",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "React", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://rahimadnan01.github.io/weather-app/",
  },
  {
    name: " Portfolio Website",
    description:
      "A Portfolio website with dark and light Mode with different sections and fully responsive on mobile and tablets",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: simplePortfolio,
    source_code_link: "https://rococo-moxie-61b416.netlify.app/",
  },
  {
    name: "Space-x website clone",
    description:
      "Developed a responsive SpaceX website clone using HTML, CSS, and JavaScript, replicating the design and functionality of the official SpaceX site, including interactive elements and animations for an engaging user experience.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JS", color: "pink-text-gradient" },
    ],
    image: spaceX,
    source_code_link: "https://rahimadnan01.github.io/space-x-web/",
  },
  {
    name: "Sidcup Animated website",
    description:
      "An animated website created with GSAP showing my skill of making animated website",
    tags: [{ name: "GSAP", color: "blue-text-gradient" }],
    image: sidcup,
    source_code_link: "https://dulcet-naiad-9614d9.netlify.app/",
  },
  {
    name: "Music-app Backend",
    description:
      "I write Backend for Music app named Melodix made by Aftaab Asif Front-end developer.",
    tags: [
      { name: "Express", color: "blue-text-gradient" },
      { name: "MongoDb", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1678565999588-08fdd0b1410b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2VuZHxlbnwwfHwwfHx8MA%3D%3D",
    source_code_link: "https://github.com/rahimadnan01/melodix_musicapp",
  },
  {
    name: "Krist",
    description:
      "Krist is an e-commerce website i am creating with MERN stack.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "Git/GitHub", color: "green-text-gradient" },
    ],

    image: Krist,
    source_code_link: "https://github.com/rahimadnan01/Krist-e-commerce-Site-",
  },
];
