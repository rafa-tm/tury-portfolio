import { Link } from "react-router-dom";
import HandCoding from "../assets/HandCoding.svg";
import { MdStar } from "react-icons/md";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import { habilidades } from "../utils/habilidades";
import projetos from "../utils/projetos";

const softSkills = [
  { id: 1, palavra: "Pensamento crítico" },
  { id: 2, palavra: "Trabalho em equipe" },
  { id: 3, palavra: "Resolução de problemas" },
  { id: 4, palavra: "Liderança" },
  { id: 5, palavra: "Comunicação" },
  { id: 6, palavra: "Adaptabilidade" },
  { id: 7, palavra: "Iniciativa" },
  { id: 8, palavra: "Criatividade" },
  { id: 9, palavra: "Capacidade de aprender rapidamente" },
  { id: 10, palavra: "Atenção aos detalhes" },
  { id: 11, palavra: "Organização" },
  { id: 12, palavra: "Resiliência" },
  { id: 13, palavra: "Colaboração" },
  { id: 14, palavra: "Empatia" },
  { id: 15, palavra: "Flexibilidade" },
  { id: 16, palavra: "Gerenciamento de tempo" },
  { id: 17, palavra: "Capacidade de seguir instruções" },
  { id: 18, palavra: "Compreensão de requisitos de negócios" },
  { id: 19, palavra: "Senso de responsabilidade" },
  { id: 20, palavra: "Capacidade de lidar com pressão" },
  { id: 21, palavra: "Proatividade" },
  { id: 22, palavra: "Autodisciplina" },
  { id: 23, palavra: "Compreensão de processos" },
  { id: 24, palavra: "Capacidade de trabalhar sob supervisão" },
  { id: 25, palavra: "Compreensão de tecnologia" },
];

export default function Home() {
  const anos = new Date().getFullYear() - 2020;

  return (
    <main className="w-full bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <section className="w-full min-h-screen flex flex-col lg:flex-row py-40 px-10 gap-24 justify-center items-center ">
        <div className="w-[90%] lg:w-[50%] text-center text-xl flex flex-col gap-6 items-center ">
          <p className="text-2xl font-medium"> Olá, meu nome é </p>
          <h1 className="text-5xl font-black text-primary">
            Rafael Tury Minatel
          </h1>
          <p className="text-2xl font-medium">
            Desenvolvedor Full Stack e Designer UI/UX
          </p>
          <div className="flex flex-col text-base font-light text-center gap-2">
            <p>
              Sou apaixonado por tecnologia e pela criação de soluções para
              melhorar a vida das pessoas, tenho trabalhado no desenvolvimento
              de aplicações web de alta qualidade há mais de {anos} anos.
            </p>
            <p>
              Minhas habilidades abrangem desde a concepção de interfaces de
              usuário intuitivas e atraentes até o desenvolvimento de código
              robusto e escalável. Se você está procurando um profissional
              altamente qualificado para sua equipe ou projeto, não hesite em
              entrar em contato comigo.
            </p>
          </div>
          <Link
            to={"/contato"}
            className="bg-primary font-bold text-lg rounded-lg py-2 px-4 text-lightText shadow-lg hover:scale-110 transition-transform"
          >
            Entre em contato
          </Link>
        </div>
        <img
          src={HandCoding}
          alt="Mão humana programando"
          width={448}
          height={448}
          className="max-w-xs lg:max-w-md animate-scale"
        />
      </section>

      <div className="w-full h-24 my-32 sm:flex items-center hidden relative bg-gradient-to-r from-primary to-secondary overflow-x-clip">
        <div className="flex gap-4 h-16 font-bold absolute bottom-12 -skew-y-1 antialiased bg-darkBackground text-darkText  dark:bg-lightBackground dark:text-lightText">
          {softSkills.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <p className="min-w-max text-xl">{item.palavra} </p>
              <MdStar className="text-tertiary" />
            </div>
          ))}
        </div>
      </div>

      <section className="w-full flex px-10 pb-36 gap-24 justify-center items-center ">
        <div className="w-[90%] flex flex-col items-center justify-between gap-24">
          <h1 className="w-full text-4xl font-medium">Projetos recentes</h1>
          <div className="flex flex-col md:flex-wrap lg:flex-row gap-10 justify-center">
            <ProjectCard project={projetos[0]} />
            <ProjectCard project={projetos[1]} />
            <ProjectCard project={projetos[3]} />
          </div>
          <Button to={"/projetos"} type={"gradient"} className={"px-8 py-6 "}>
            Ver todos os projetos
          </Button>
        </div>
      </section>

      <section className="w-full flex flex-col lg:flex-row px-10 pb-36 gap-24 justify-center items-center ">
        <div className="w-[90%] flex flex-col items-center justify-between gap-24">
          <h1 className="w-full text-4xl font-medium">
            Habilidades, Tecnologias e Ferramentas
          </h1>
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-24 gap-x-8">
            {habilidades.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-8 justify-between items-center hover:scale-105"
              >
                <img
                  src={item.img}
                  alt={item.nome + " logo"}
                  className="min-h-[100px] max-h-[100px]"
                />
                <p className="text-center text-lg">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
