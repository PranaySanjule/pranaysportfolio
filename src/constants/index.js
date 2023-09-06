import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  php,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // docker,
  geogo,
  srs,
  sbm,
  portfolio,
  chatsync,
  java,
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
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "PHP / Wordpress Develper",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Core Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer ( Intern )",
    company_name: "SRS Infosystem pvt ltd",
    icon: srs,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using PHP and other related technologies.",
      "Worked with PHP and API using Postman to create backend for extracting image data and to post image to the MySQL database system.",
      "Added major functionalities to the front-end using HTML, CSS, JQuery - Ajax and Bootstrap",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Developer ( Intern )",
    company_name: "GEOGO TECHSOLUTIONS",
    icon: geogo,
    iconBg: "#ffffff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, NodeJS and other related technologies.",
      "Worked with NodeJS, ExpressJS, MongoDB Database on the backend side to create server and built a  RestAPI using POSTMAN.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "SBM",
    description:
      "Smart Bus Management System (SBM) is an analysis-based Web application that aims to provide easy facilities to Students and Parents. It is developed to provide Bus Services and track the live location of the bus which is created by using ReactJS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: sbm,
    source_code_link: "https://github.com/PranaySanjule/SBM-System",
  },
  {
    name: "Portfolio ",
    description:
      "The portfolio website, built with ReactJS, Tailwind CSS, and Framer Motion Library, is a dynamic and visually appealing platform showcasing my skills and accomplishments. The seamless animations and modern design give a fabulous look to the website.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/PranaySanjule/pranaysportfolio",
  },
  {
    name: "Chat Sync (Coming Soon)",
    description:
      "Chat Sync is a real-time chat application built with ReactJS for the frontend, NodeJS and ExpressJS for the backend, and MongoDB for the database, enabling seamless communication and messaging between users.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJS",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "chakra ui",
        color: "pink-text-gradient",
      },
    ],
    image: chatsync,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
