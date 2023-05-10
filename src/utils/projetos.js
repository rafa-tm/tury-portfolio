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
      "LifeCare é um projeto de sistema web para o agendamento de consultas com profissionais cadastrados. Permitindo cadastramento de usuários, profissionais e especialidades. O sistema também permite a busca de profissionais por area e especialidade.",
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
      "Back-end do sistema LifeCare, desenvolvido com o intuito de servir para API para o LifeCare Front-End. Desenvolvido utilizando arquitetura de funções ou Function-as-a-Service (FaaS), com o framework Fastfy. ",
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
      "Desenvolvimento do projeto LifeCare usando arquitetura MVC, inicialmente utilizando Java Servlet. Uma segunda implementação com o framework Spring Boot. E a implementação final, possuindo requisições como API para o LifeCare Front-End.",
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
      "Implementação de páginas estáticas apenas com HTML, CSS e JavaScript, realizado anteriormente ao LifeCare CSR. O projeto foi desenvolvido com o intuito de mostrar o uso de HTML, CSS e JavaScript puro.",
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
      "Projeto de arquitetura CSS, com o intuito de mostrar a importância de uma boa arquitetura CSS. O projeto foi desenvolvido com HTML e CSS puro, com aplicação de metodologias como BEM e Atomic Design.",
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
      "Este site foi desenvolvido com o intuito de mostrar meus projetos e habilidades. E também para servir como um portfólio, para que pessoas possam conhecer um pouco mais sobre mim e meus projetos. Site hospedado na Netlify, através do GitHub.",
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
      "Projeto desenvolvido durante a semana OmniStack 11.0, com o intuito de aprender a desenvolver uma aplicação completa, com back-end, front-end e mobile. O projeto consiste em um sistema para ONGs cadastrarem casos e pessoas poderem contribuir com os casos.",
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
      "uShare é um sistema para universitários encontrarem e/ou compartilharem imóveis. Facilitando a vida de quem está procurando um lugar para morar, de quem está procurando alguém para dividir o aluguel ou proprietários/imobiliárias buscando divulgar melhor seus imóveis.",
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
      "SeAche é um aplicativo para facilitar a localização dentro da universidade, com o intuito de ajudar os alunos a encontrarem salas, trailers de alimentação e o restaurante universitário.",
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
      "Aplicativo para que qualquer pessoa possa realizar o salvamento de todos seus exames e compartilhamento destes com qualquer profissional cadastrado no sistema.",
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
      "Sistema web que possibilita que clientes façam a contratação de máquinas e implementos de obras de fornecedores cadastrados no sistema.",
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
      "LifeCare é um projeto de sistema web para o agendamento de consultas com profissionais cadastrados. Permitindo cadastramento de usuários, profissionais e especialidades. O sistema também permite a busca de profissionais por area e especialidade.",
    tecnologias: ["Figma"],
    imagem: lifecarefront,
    imagemAlt: "Imagem do sistema LifeCare",
    linkAcesso: "https://rafa-tm.github.io/DSW2_trab/",
    github: " ",
    figma: "https://www.figma.com/file/J2AhdrQ0wZtrrgIvMwA4hH/LifeCare?type=design&node-id=0%3A1&t=bC1ukKpS0L5FFict-1"
  }
];

export default projetos;
