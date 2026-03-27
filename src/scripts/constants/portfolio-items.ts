import { PortfolioItem } from "../types/portfolio-item";

export const PORTFOLIO_ITEMS: Array<PortfolioItem> = [
  {
    description: "A catch-all project for practicing software engineering concepts. This includes solutions to Leetcode problems and technical assessments, self-contained learning exercises, and a bank of robust regular expressions.",
    external: true,
    label: "Algorithm Practice",
    path: "https://github.com/DAquilina/algorithm-practice",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Algorithm Design and Analysis",
      "Regular Expressions"
    ]
  },
  {
    description: "This project was designed specifically to be a portfolio piece showcasing how a game-like experience can be created without a canvas. The goal is to continue to expand it over time with new features and more insight into my diverse skillset.",
    external: true,
    label: "Resumé Adventure",
    path: "https://adventure.dominicaquilina.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "JQuery"
    ]
  },
  {
    description: `Given only the prompt of "build something interesting in angular" as part of a multi-step, story-driven application process, I came up with what I have lovingly dubbed "the shavening." It's a simple Angular animation powered by CSS and a basic RxJS interval which was built in about 50 minutes. All artwork is original.`,
    external: true,
    label: "The Shavening",
    path: "https://shavening.dominicaquilina.com",
    skills: [
      "HTML",
      "CSS",
      "TypeScript",
      "Angular"
    ]
  },
  {
    description: "My second attempt at a solution to the challenge of \"build something interesting in Angular.\" I wanted a way to highlight some of my CV's points of interest while paying homage to my love of video games. This could very easily be expanded into a cutscene engine for an angular-based browser game.",
    external: true,
    label: "CV: The Movie",
    path: "https://cv-movie.dominicaquilina.com",
    skills: [
      "HTML",
      "CSS",
      "TypeScript",
      "Angular"
    ]
  },
  {
    description: "A digital shadow play created as part of an anniversary gift for my wife. This was an exploration of both the power of CSS animation and the art of visual storytelling.",
    external: true,
    label: "Shadows",
    path: "https://shadows.dominicaquilina.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript"
    ]
  },
  {
    description: "Never one to pass on a good pun, this is a fun, literal interpretation of the classic menu icon that doubles as a bit of a tech demo for a rotary navigation pattern.",
    label: "Hamburger Menu",
    path: "portfolio/hamburger",
    skills: [
      "HTML",
      "CSS",
      "TypeScript",
      "SVG"
    ]
  },
  {
    description: "A CLI app developed in Python for a self-contained system driven by a Raspberry Pi; involved custom wiring and sewing a servo-controlled custom machined jaw into a hat enclosure and writing a Python service to ingest sound bytes and synchronise the jaw's movement as they played.",
    label: "Animatronic Sorting Hat",
    path: "portfolio/sorting-hat",
    skills: [
      "Raspberry Pi",
      "Python",
      "NumPy",
      "Mechanical Engineering",
      "Sewing"
    ]
  },
  {
    description: "",
    label: "Graphic Design Gallery",
    path: "portfolio/gallery",
    skills: [
      "Figma",
      "Photoshop",
      "Adobe XD",
      "SVG",
      "Wireframing"
    ]
  }
];
