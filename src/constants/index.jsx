import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage6 from "../assets/project6.jpeg";



import { FaChartBar  } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { BiBarChartSquare } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";




export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "SHREYANS SHAH",
  greet: "Hello there! ",
  description:
    "I'm an aspiring data scientist focused on transforming data into actionable insights. With a growing understanding of machine learning, statistical analysis, and data visualization, I aim to contribute to data-driven decision-making and improve business outcomes.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Algorithmic Trading Strategy",
    description:
      "Utilizes Python, Pandas, and machine learning to analyze historical market data, generate trading signals, and automate trades based on technical indicators like SMA for informed decision-making",
    image: projectImage1,
    githubLink: "https://github.com/Shreyansh055/Trading_Algorithm_055.git",
  },
  {
    id: 2,
    name: "Dynamic Pricing Strategy",
    description:
      "Uses machine learning algorithms in Python to optimize ride-sharing prices by analyzing real-time demand and supply. Leveraging historical Uber data, it adjusts prices dynamically to maximize revenue while enhancing customer satisfaction.",
    image: projectImage2,
    githubLink: "https://github.com/Shreyansh055/Dynamic_Pricing_Strategy_055.git",
  },
  
  {
    id: 6,
    name: "Time Series Forecasting",
    description:
      "Channels advanced methods like ARIMA, LSTM, and Prophet with Python and Pandas to predict future trends from historical data, ensuring scalable and precise forecasting for business and finance.",
    image: projectImage6,
    githubLink: "https://github.com/Shreyansh055/Time-Series-Forecasting_055.git",
  },
];


export const BIO = [
  <p key={0}>
    As a data scientist with a strong interest in finance, business, and tech, I leverage advanced analytics to extract actionable insights from complex data. Through data visualization, I aim to contribute to optimizing strategies, improving financial performance, and drive technological innovation.
</p>,
<p key={1}>
    Eager to push boundaries, I&apos;m expanding my focus towards quantitative engineering, captivated by its potential for innovation and lucrative opportunities in the data landscape.
</p>,
<p key={2}>
    When I&apos;m not immersed in data, you can find me cruising in my car, traveling to new destinations, or capturing nature&apos;s beauty through my lens. Catch a glimpse of my nature escapades <a href="https://in.pinterest.com/mister__dude/_created/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>. This diverse mix of interests fuels my creativity and enriches my approach to data science.
</p>

];


export const SKILLS = [
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
  {
    icon: <FaDatabase className="text-4xl text-lime-500 lg:text-5xl" />,
    name: "Big Data Technologies",
    experience: "0+ year",
  },
  {
    icon: <FaChartBar  className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Data Analysis",
    experience: "1+ year",
  },
  {
    icon: <BsGraphUp className="text-4xl text-green-500 lg:text-5xl" />,
    name: "Statistical Analysis",
    experience: "1+ year",
  },
  {
    icon: <AiOutlineRobot className="text-4xl text-teal-500 lg:text-5xl" />,
    name: "Machine Learning",
    experience: "1+ year",
  },
  {
    icon: <SiPython className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "Python",
    experience: "1+ year",
  },
  
  {
    icon: <BiBarChartSquare className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Data Visualization",
    experience: "1+ year",
  },
  
];

export const EXPERIENCES = [
  {
    title: "Network Data Analyst",
    company: "Indian Railways",
    duration: "June '24 - July '24",
    description:
      "As a Network Data Analyst Intern with Indian Railways’ Signal and Telecommunication Department, I focused on enhancing data-driven insights to improve network performance and communication efficiency. My responsibilities included collecting and analyzing network performance data, identifying patterns, and generating actionable insights for operational improvements. I supported efforts to streamline data workflows and assisted in diagnosing network issues through statistical analysis and visualization techniques, optimizing data reliability and accuracy. This role sharpened my analytical skills and deepened my understanding of data management and quality assurance within large-scale infrastructure networks.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Electronics & Communication Engineering",
    institution: "Motilal Nehru National Institute of Technology",
    duration: "November '22 - (Expected)  May '26",
    description:
  "Engaged in core subjects such as digital communication, signal processing, and microcontroller systems, with a strong emphasis on data-driven technologies. Actively involved in projects focused on data analytics, web development, and automation. As a member of the Electronics Society at MNNIT, I collaborated with peers on diverse initiatives, including IoT systems and interactive web applications, gaining practical experience in programming languages including Python and SQL to effectively tackle engineering challenges."
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/Shreyans_ifs",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Shreyansh055/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/shreyans-shah-a2707b261/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
 
];
