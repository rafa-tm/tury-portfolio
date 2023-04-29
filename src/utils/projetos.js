import ushare from "../assets/projetos/PrintUShareWeb.png";

const projetos = [
  {
    id: "0",
    title: "uShare",
    category: ["Front-End", "CSR"],
    description:
      "uShare é um sistema para universitários encontrarem e/ou compartilharem imóveis. Facilitando a vida de quem está procurando um lugar para morar, de quem está procurando alguém para dividir o aluguel ou proprietários/imobiliárias buscando divulgar melhor seus imóveis.",
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
      "LifeCare is a health care app that helps you to find the best doctors and book a doctor appointment online.",
    tecnologias: ["React JS", "TailwindCSS", "Axios", "Vite"],
    imagem: " ",
    imagemAlt: "Imagem do sistema LifeCare",
    linkAcesso: " ",
    github: "https://github.com/rafa-tm/Lifecare_frontend",
  },
  {
    id: "2",
    title: "LifeCare",
    category: ["Back-End", "API"],
    description:
      "LifeCare is a health care app that helps you to find the best doctors and book a doctor appointment online.",
    tecnologias: ["Node JS", "TypeScript", "Fastfy", "Zod", "SQLite", "Prisma"],
    imagem: " ",
    imagemAlt: "Imagem do sistema LifeCare",
    linkAcesso: " ",
    github: "https://github.com/rafa-tm/LifeCare_backend",
  },
  {
    id: "3",
    title: "LifeCare",
    category: ["Back-End", "Front-End", "API", "SSR"],
    description:
      "LifeCare is a health care app that helps you to find the best doctors and book a doctor appointment online.",
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
    imagem: " ",
    imagemAlt: "Imagem do sistema LifeCare",
    linkAcesso: " ",
    github: "https://github.com/rafa-tm/LifeCare-SSR",
  },
  {
    id: "4",
    title: "Trabalho DSW2",
    category: ["Front-End", "Static"],
    description:
      "Implementação de páginas estáticas apenas com HTML e CSS, realizado anteriormente ao LifeCare CSR.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagem: " ",
    imagemAlt: "Imagem do sistema LifeCare",
    linkAcesso: "https://rafa-tm.github.io/DSW2_trab/",
    github: "https://github.com/rafa-tm/DSW2_trab",
  },
  {
    id: "5",
    title: "Arquitetura-CSS",
    category: ["Front-End"],
    description:
      "Projeto de arquitetura CSS, com o intuito de mostrar a importância de uma boa arquitetura CSS. O projeto foi desenvolvido com HTML e CSS puro, com aplicação de metodologias como BEM e Atomic Design.",
    tecnologias: ["HTML", "CSS"],
    imagem: " ",
    imagemAlt: "Imagem do sistema LifeCare",
    linkAcesso: "https://rafa-tm.github.io/Arquitetura-CSS/",
    github: "https://github.com/rafa-tm/Arquitetura-CSS",
  },
  {
    id: "6",
    title: "Site Pessoal",
    category: ["Front-End"],
    description:
      "Este site foi desenvolvido com o intuito de mostrar meus projetos e habilidades. E também para servir como um portfólio.",
    tecnologias: ["React JS", "TailwindCSS", "Vite", "JavaScript"],
    imagem: " ",
    imagemAlt: "Imagem do sistema LifeCare",
    linkAcesso: "https://rafaeltury.netlify.app/",
    github: "https://github.com/rafa-tm/tury-portfolio",
  },
];

const projetosUI = [
  {
    id: "100",
    title: "uShare",
    category: ["UI/UX"],
    description:
      "uShare é um sistema para universitários encontrarem e/ou compartilharem imóveis. Facilitando a vida de quem está procurando um lugar para morar, de quem está procurando alguém para dividir o aluguel ou proprietários/imobiliárias buscando divulgar melhor seus imóveis.",
    tecnologias: ["Figma"],
    imagem: " ",
    imagemAlt: "Imagem do protótipo uShare",
    linkAcesso: "Projeto privado",
    github: " ",
  },
];

for (let index = 0; index < projetosUI.length; index++) {
  projetos.push(projetosUI[index]);
}

export default projetos;
