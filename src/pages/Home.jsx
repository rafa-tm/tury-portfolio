/* eslint-disable react/no-unescaped-entities */
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
      <section className="w-full min-h-screen flex flex-col lg:flex-row py-32 px-10 gap-24 justify-center items-center ">
        <div className="w-[90%] lg:w-[50%] text-center text-xl flex flex-col gap-6 items-center">
          <p className="text-2xl font-medium"> Hi, my name is </p>
          <h1 className="text-5xl font-black text-primary">
            Rafael Tury Minatel
          </h1>
          <p className="text-2xl font-medium">
            Full Stack Developer and UI/UX Designer
          </p>
          <div className="flex flex-col text-xl font-light gap-2">
            <p>
              I'm passionate about technology and creating solutions that
              improve people's lives. I have been working on high-quality web
              applications for over {anos} years.
            </p>
            <p>
              My skills range from designing intuitive and appealing user
              interfaces to developing robust and scalable code. If you are
              looking for a highly skilled professional for your team or
              project, do not hesitate to contact me.
            </p>
          </div>
          <Button
            to={"/contato"}
            type={"primary"}
            className="p-4 max-w-xs mt-8"
          >
            Get in touch!
          </Button>
        </div>
        <img
          src={HandCoding}
          alt="Mão humana programando"
          width={448}
          height={448}
          className="max-w-xs lg:max-w-md animate-scale"
        />
      </section>

      <div className="w-full h-24 my-24 sm:flex items-center hidden relative bg-gradient-to-r from-primary to-secondary overflow-x-clip">
        <div className="flex gap-4 h-16 font-bold absolute bottom-12 -skew-y-1 antialiased bg-darkBackground text-darkText  dark:bg-lightBackground dark:text-lightText">
          {softSkills.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <p className="min-w-max text-xl">{item.palavra} </p>
              <MdStar className="text-tertiary" />
            </div>
          ))}
        </div>
      </div>

      <section className="w-full flex px-10 py-32 gap-24 justify-center items-center ">
        <div className="w-[90%] flex flex-col items-center justify-between gap-24">
          <h1 className="w-full text-4xl font-medium">Recent Projects</h1>
          <div className="flex flex-col md:flex-wrap lg:flex-row gap-10 lg:gap-24 justify-center">
            <ProjectCard project={projetos[0]} />
            <ProjectCard project={projetos[1]} />
            <ProjectCard project={projetos[3]} />
          </div>
          <Button to={"/projetos"} type={"gradient"} className={"px-8 py-6 "}>
            See all projects
          </Button>
        </div>
      </section>

      <section className="w-full flex flex-col lg:flex-row px-10 py-36 gap-24 justify-center items-center ">
        <div className="w-[90%] flex flex-col items-center justify-between gap-24">
          <h1 className="w-full text-4xl font-medium">
            Skills, Technologies and Tools
          </h1>
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-24 gap-x-8 xl:gap-x-24 ">
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
                <p className="text-center text-lg font-semibold">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
