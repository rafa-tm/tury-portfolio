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
    description:
      "uShare is a system for university students to find and/or share properties, making it easier for those looking for a place to live, those looking for someone to share rent with, or landlords/real estate agents seeking to better promote their properties.",
    tecnologias: ["React JS", "TailwindCSS", "Axios", "Vite"],
    imagem: ushare,
    imagemAlt: "Imagem do site uShare",
    linkAcesso: "https://ushare.com.br",
    github: "Projeto privado",
  },
  {
    id: "1",
    title: "LifeCare",
    category: ["Front-End", "CSR"],
    description:
      "LifeCare is a web system project for scheduling appointments with registered professionals. It allows for the registration of users, professionals, and specialties. The system also enables searching for professionals by area and specialty.",
    tecnologias: ["React JS", "TailwindCSS", "Axios", "Vite"],
    imagem: lifecarefront,
    imagemAlt: "Imagem do sistema LifeCare",
    linkAcesso: " ",
    github: "https://github.com/rafa-tm/Lifecare_frontend",
  },
  {
    id: "2",
    title: "LifeCare",
    category: ["Back-End", "API"],
    description:
      "The back-end of the LifeCare system was developed with the purpose of serving as an API for the LifeCare front-end. It was developed using a function-based architecture or Function-as-a-Service (FaaS), with the Fastify framework.",
    tecnologias: ["Node JS", "TypeScript", "Fastfy", "Zod", "SQLite", "Prisma"],
    imagem: lifecareback,
    imagemAlt: "Imagem do sistema LifeCare",
    linkAcesso: " ",
    github: "https://github.com/rafa-tm/LifeCare_backend",
  },
  {
    id: "3",
    title: "LifeCare",
    category: ["Back-End", "Front-End", "API", "SSR"],
    description:
      "The LifeCare project was developed using the MVC architecture, initially using Java Servlet. A second implementation was done using the Spring Boot framework. The final implementation involved requests as an API for the LifeCare front-end.",
    tecnologias: [
      "Java",
      "Servlet",
      "CSS",
      "HTML",
      "Spring Boot",
      "JSP",
      "MySQL",
      "Thymeleaf",
    ],
    imagem: lifecaressr,
    imagemAlt: "Imagem do sistema LifeCare",
    linkAcesso: " ",
    github: "https://github.com/rafa-tm/LifeCare-SSR",
  },
  {
    id: "4",
    title: "Trabalho DSW2",
    category: ["Front-End", "Static"],
    description:
      "Implementation of static pages using only HTML, CSS, and JavaScript was carried out prior to LifeCare CSR. The project was developed with the purpose of showcasing the use of pure HTML, CSS, and JavaScript.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagem: lifecarestatic,
    imagemAlt: "Imagem do sistema LifeCare",
    linkAcesso: "https://rafa-tm.github.io/DSW2_trab/",
    github: "https://github.com/rafa-tm/DSW2_trab",
  },
  {
    id: "5",
    title: "Arquitetura-CSS",
    category: ["Front-End"],
    description:
      "A CSS architecture project was developed with the purpose of demonstrating the importance of good CSS architecture. The project was developed using pure HTML and CSS, with the application of methodologies such as BEM and Atomic Design.",
    tecnologias: ["HTML", "CSS"],
    imagem: arquiteturaCSS,
    imagemAlt: "Imagem do sistema LifeCare",
    linkAcesso: "https://rafa-tm.github.io/Arquitetura-CSS/",
    github: "https://github.com/rafa-tm/Arquitetura-CSS",
  },
  {
    id: "6",
    title: "Site Pessoal",
    category: ["Front-End"],
    description:
      "This website was developed with the purpose of showcasing my projects and skills. It also serves as a portfolio, so that people can learn a little more about me and my projects. The site is hosted on Netlify, through GitHub.",
    tecnologias: ["React JS", "TailwindCSS", "Vite", "JavaScript"],
    imagem: portfolio,
    imagemAlt: "Imagem do sistema LifeCare",
    linkAcesso: "https://rafaeltury.netlify.app/",
    github: "https://github.com/rafa-tm/tury-portfolio",
  },
  {
    id: "7",
    title: "OmniStack",
    category: ["Back-End", "Front-End", "Mobile", "API"],
    description:
      "The project was developed during the OmniStack 11.0 week with the aim of learning how to develop a complete application, including back-end, front-end, and mobile. The project consists of a system for NGOs to register cases and for people to contribute to these cases.",
    tecnologias: ["Node JS", "React JS", "React Native", "SQLite"],
    imagem: omniStack,
    imagemAlt: "Imagem do sistema LifeCare",
    linkAcesso: " ",
    github: "https://github.com/rafa-tm/OmniStack",

  },
  {
    id: "100",
    title: "uShare",
    category: ["UI/UX"],
    description:
      "uShare is a system designed for university students to find and/or share properties, making it easier for those who are searching for a place to live, those who are looking for someone to split the rent with, or for landlords/real estate agencies seeking to better promote their properties.",
    tecnologias: ["Figma"],
    imagem: usharePrototipo,
    imagemAlt: "Imagem do protótipo uShare",
    linkAcesso: "Projeto privado",
    github: " ",
    figma: "Projeto privado"
  },
  {
    id: "101",
    title: "SeAche",
    category: ["UI/UX"],
    description:
      "SeAche is an application designed to facilitate navigation within the university, with the aim of helping students find classrooms, food trailers, and the university restaurant.",
    tecnologias: ["Figma", "Adobe Illustrator"],
    imagem: seAchePrototipo,
    imagemAlt: "Imagem do protótipo SeAche",
    linkAcesso: "https://www.figma.com/proto/7qX6733HTS2o4yZq6LdDJc/Se-ache?page-id=5%3A47&node-id=5-76&viewport=346%2C356%2C0.1&scaling=scale-down&starting-point-node-id=5%3A76&show-proto-sidebar=1",
    github: " ",
    figma: "https://www.figma.com/file/7qX6733HTS2o4yZq6LdDJc/Se-ache?node-id=5%3A47&t=NxMreeU22a67baTm-1"
  },
  {
    id: "102",
    title: "ChecAPP",
    category: ["UI/UX"],
    description:
      "An application that allows anyone to save and share all of their medical exams with any professional registered in the system.",
    tecnologias: ["Figma", "AutoLayout"],
    imagem: checappPrototipo,
    imagemAlt: "Imagem do protótipo ChecAPP",
    linkAcesso: "",
    github: "",
    figma: "https://www.figma.com/file/2fKHZu8h5dotMaKMge2scJ/ChecApp?type=design&node-id=884%3A10035&t=qb9HuLEOuFajs3GN-1"
  },
  {
    id: "103",
    title: "Escavatto",
    category: ["UI/UX"],
    description:
      "A web system that allows clients to hire construction machinery and equipment from registered suppliers in the system.",
    tecnologias: ["Figma"],
    imagem: escavattoPrototipo,
    imagemAlt: "Imagem do protótipo Escavatto",
    linkAcesso: "https://escavatto.com.br/",
    github: " ",
    figma: "https://www.figma.com/file/cvci6O4jaAcqL2vN5KoShM/Escavatto?type=design&node-id=15%3A3&t=qDocTdjuTBsOluX2-1"

  },
  {
    id: "104",
    title: "LifeCare",
    category: ["UI/UX"],
    description:
      "LifeCare is a web-based system project for scheduling appointments with registered professionals. It allows for the registration of users, professionals, and specialties. The system also enables the search for professionals by area and specialty.",
    tecnologias: ["Figma"],
    imagem: lifecarefront,
    imagemAlt: "Imagem do sistema LifeCare",
    linkAcesso: "https://rafa-tm.github.io/DSW2_trab/",
    github: " ",
    figma: "https://www.figma.com/file/J2AhdrQ0wZtrrgIvMwA4hH/LifeCare?type=design&node-id=0%3A1&t=bC1ukKpS0L5FFict-1"
  }
];

export default projetos;
