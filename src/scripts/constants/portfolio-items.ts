import { LinkType } from "../enums/link-type";
import { PortfolioItem } from "../types/portfolio-item";

export const PORTFOLIO_ITEMS: Array<PortfolioItem> = [
  {
    altText: "See the code for this very site on GitHub!",
    description: "My personal website (see: this one) was a project built from the ground up in a custom JavaScript MVC framework that I designed. No fancy third-[arty libraries, no AI assistance. Just pure drive for self improvement and a desire to build something extraordinary.",
    label: "DominicAquilina.com",
    path: "https://github.com/DAquilina/dominicaquilina.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript"
    ],
    type: LinkType.External
  },
  {
    altText: "See the code for the algorithm practice repo on GitHub!",
    description: "A catch-all project for practicing software engineering concepts. This includes solutions to Leetcode problems and technical assessments, self-contained learning exercises, and a bank of robust regular expressions.",
    label: "Algorithm Practice",
    path: "https://github.com/DAquilina/algorithm-practice",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Algorithm Design and Analysis",
      "Regular Expressions"
    ],
    type: LinkType.External
  },
  {
    altText: "Click here to experience the adventure for yourself!",
    description: "This project was designed specifically to be a portfolio piece showcasing how a game-like experience can be created without a canvas. The goal is to continue to expand it over time with new features and more insight into my diverse skillset.",
    label: "Resumé Adventure",
    path: "https://adventure.dominicaquilina.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "JQuery"
    ],
    type: LinkType.External
  },
  {
    altText: "Click here to watch the animation in action!",
    description: `Given only the prompt of "build something interesting in angular" as part of a multi-step, story-driven application process, I came up with what I have lovingly dubbed "the shavening." It's a simple Angular animation powered by CSS and a basic RxJS interval which was built in about 50 minutes. All artwork is original.`,
    label: "The Shavening",
    path: "https://shavening.dominicaquilina.com",
    skills: [
      "HTML",
      "CSS",
      "TypeScript",
      "Angular"
    ],
    type: LinkType.External
  },
  {
    altText: "Click here to watch it for yourself!",
    description: "My second attempt at a solution to the challenge of \"build something interesting in Angular.\" I wanted a way to highlight some of my CV's points of interest while paying homage to my love of video games. This could very easily be expanded into a cutscene engine for an angular-based browser game.",
    label: "CV: The Movie",
    path: "https://cv-movie.dominicaquilina.com",
    skills: [
      "HTML",
      "CSS",
      "TypeScript",
      "Angular"
    ],
    type: LinkType.External
  },
  {
    altText: "Experience the magic now!",
    description: "A digital shadow play created as part of an anniversary gift for my wife. This was an exploration of both the power of CSS animation and the art of visual storytelling.",
    label: "Shadows",
    path: "https://shadows.dominicaquilina.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    type: LinkType.External
  },
  {
    altText: "Want a bite? Click here!",
    description: "Never one to pass on a good pun, this is a fun, literal interpretation of the classic menu icon that doubles as a bit of a tech demo for a rotary navigation pattern.",
    label: "Hamburger Menu",
    path: "portfolio/hamburger",
    skills: [
      "HTML",
      "CSS",
      "TypeScript",
      "SVG"
    ],
    type: LinkType.Internal
  },
  {
    altText: "See the case study for this project (work in progress)",
    description: "A CLI app developed in Python for a self-contained system driven by a Raspberry Pi; involved custom wiring and sewing a servo-controlled custom machined jaw into a hat enclosure and writing a Python service to ingest sound bytes and synchronise the jaw's movement as they played.",
    label: "Animatronic Sorting Hat",
    path: "portfolio/sorting-hat",
    skills: [
      "Raspberry Pi",
      "Python",
      "NumPy",
      "RPi.GPIO",
      "Mechanical Engineering",
      "Animatronics",
      "Sewing"
    ],
    type: LinkType.Internal
  },
  {
    altText: "Click here to browse the gallery!",
    description: "Throughout my career and personal life I have also taken on the role of a graphic or web designer. This is a gallery of some examples that I'm proud of.",
    label: "Graphic Design Gallery",
    path: "portfolio/gallery",
    skills: [
      "Figma",
      "Photoshop",
      "Adobe XD",
      "SVG",
      "Wireframing"
    ],
    type: LinkType.Internal
  },
  {
    altText: "Click here to download the Adobe flash file. Note that it is not optimised for accessibility.",
    description: "Developed in collaboration with Brittany Devoe and Christine Garinger with art by Sylvia Pozeg, MindGame is a trivia bingo game intended to reduce the stigma associated with mental illness.",
    label: "MindGame",
    path: "/downloads/MindGame.swf",
    skills: [
      "Flash",
      "XML"
    ],
    type: LinkType.Download
  }
];
