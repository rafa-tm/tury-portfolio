import ushare from "../assets/projetos/PrintUShareWeb.png";
import lifecarefront from "../assets/projetos/LifeCareFront.png";
import lifecarestatic from "../assets/projetos/LifeCareStatic.png";
import lifecareback from "../assets/projetos/LifeCareBack.png";
import lifecaressr from "../assets/projetos/LifeCareSSR.png";
import arquiteturaCSS from "../assets/projetos/ArquiteturaCss.png"
import portfolio from "../assets/projetos/Portfolio.png"
import omniStack from "../assets/projetos/omniStack.webp"

//ui/ux
import usharePrototipo from "../assets/projetos/ushareProtot.png";
import seAchePrototipo from "../assets/projetos/seAcheProtot.png";
import checappPrototipo from "../assets/projetos/checappProtot.png";
import escavattoPrototipo from "../assets/projetos/escavattoProtot.png";

const projetos = [
  {
    id: "0",
    title: "uShare",
    category: ["Front-End", "CSR"],
    technologies: ["React JS", "TailwindCSS", "Axios", "Vite"],
    image: ushare,
    accessLink: "https://ushare.com.br",
    github: "Projeto privado",
  },
  {
    id: "1",
    title: "LifeCare",
    category: ["Front-End", "CSR"],
    technologies: ["React JS", "TailwindCSS", "Axios", "Vite"],
    image: lifecarefront,
    accessLink: null,
    github: "https://github.com/rafa-tm/Lifecare_frontend",
  },
  {
    id: "2",
    title: "LifeCare",
    category: ["Back-End", "API"],
    technologies: ["Node JS", "TypeScript", "Fastfy", "Zod", "SQLite", "Prisma"],
    image: lifecareback,
    accessLink: null,
    github: "https://github.com/rafa-tm/LifeCare_backend",
  },
  {
    id: "3",
    title: "LifeCare",
    category: ["Back-End", "Front-End", "API", "SSR"],
    technologies: [
      "Java",
      "Servlet",
      "CSS",
      "HTML",
      "Spring Boot",
      "JSP",
      "MySQL",
      "Thymeleaf",
    ],
    image: lifecaressr,
    accessLink: null,
    github: "https://github.com/rafa-tm/LifeCare-SSR",
  },
  {
    id: "4",
    title: "Trabalho DSW2",
    category: ["Front-End", "Static"],
    technologies: ["HTML", "CSS", "JavaScript"],
    image: lifecarestatic,
    accessLink: "https://rafa-tm.github.io/DSW2_trab/",
    github: "https://github.com/rafa-tm/DSW2_trab",
  },
  {
    id: "5",
    title: "Arquitetura-CSS",
    category: ["Front-End"],
    technologies: ["HTML", "CSS"],
    image: arquiteturaCSS,
    accessLink: "https://rafa-tm.github.io/Arquitetura-CSS/",
    github: "https://github.com/rafa-tm/Arquitetura-CSS",
  },
  {
    id: "6",
    title: "Site Pessoal",
    category: ["Front-End"],
    technologies: ["React JS", "TailwindCSS", "Vite", "JavaScript"],
    image: portfolio,
    accessLink: "https://rafaeltury.netlify.app/",
    github: "https://github.com/rafa-tm/tury-portfolio",
  },
  {
    id: "7",
    title: "OmniStack",
    category: ["Back-End", "Front-End", "Mobile", "API"],
    technologies: ["Node JS", "React JS", "React Native", "SQLite"],
    image: omniStack,
    accessLink: null,
    github: "https://github.com/rafa-tm/OmniStack",

  },
  {
    id: "8",
    title: "uShare",
    category: ["UI/UX"],
    technologies: ["Figma"],
    image: usharePrototipo,
    accessLink: "Projeto privado",
    github: null,
    figma: "Projeto privado"
  },
  {
    id: "9",
    title: "SeAche",
    category: ["UI/UX"],
    technologies: ["Figma", "Adobe Illustrator"],
    image: seAchePrototipo,
    accessLink: "https://www.figma.com/proto/7qX6733HTS2o4yZq6LdDJc/Se-ache?page-id=5%3A47&node-id=5-76&viewport=346%2C356%2C0.1&scaling=scale-down&starting-point-node-id=5%3A76&show-proto-sidebar=1",
    github: null,
    figma: "https://www.figma.com/file/7qX6733HTS2o4yZq6LdDJc/Se-ache?node-id=5%3A47&t=NxMreeU22a67baTm-1"
  },
  {
    id: "10",
    title: "ChecAPP",
    category: ["UI/UX"],
    technologies: ["Figma", "AutoLayout"],
    image: checappPrototipo,
    accessLink: null,
    github: null,
    figma: "https://www.figma.com/file/2fKHZu8h5dotMaKMge2scJ/ChecApp?type=design&node-id=884%3A10035&t=qb9HuLEOuFajs3GN-1"
  },
  {
    id: "11",
    title: "Escavatto",
    category: ["UI/UX"],
    technologies: ["Figma"],
    image: escavattoPrototipo,
    accessLink: "https://escavatto.com.br/",
    github: null,
    figma: "https://www.figma.com/file/cvci6O4jaAcqL2vN5KoShM/Escavatto?type=design&node-id=15%3A3&t=qDocTdjuTBsOluX2-1"

  },
  {
    id: "12",
    title: "LifeCare",
    category: ["UI/UX"],
    technologies: ["Figma"],
    image: lifecarefront,
    accessLink: "https://rafa-tm.github.io/DSW2_trab/",
    github: null,
    figma: "https://www.figma.com/file/J2AhdrQ0wZtrrgIvMwA4hH/LifeCare?type=design&node-id=0%3A1&t=bC1ukKpS0L5FFict-1"
  }
];

export default projetos;
