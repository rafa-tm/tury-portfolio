import PropTypes from "prop-types";
import { MdOpenInNew } from "react-icons/md";
import Button from "./Button";
import { FaFigma, FaGithub, FaLock } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="max-w-[25rem] flex flex-col shadow-lg rounded-xl bg-lightBackground-100 dark:bg-darkBackground-100 overflow-hidden ">
      <div className="min-h-[16rem] w-full relative">
        <img
          src={project.imagem}
          alt={project.imagemAlt}
          width={400}
          height={226}
        />
        <div className="absolute bottom-0 right-0 flex gap-2 bg-lightBackground-100 dark:bg-darkBackground-100 px-4 py-2 items-center rounded-tl-lg ">
          {project.category.map((category) => (
            <span
              key={category}
              className="bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText rounded-lg px-4 py-2 text-sm font-bold"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-12 justify-between h-full px-6 pb-8 pt-4">
        <div className="flex flex-col w-full gap-2">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <p className="text-lg font-normal text-justify">
            {project.description}
          </p>
        </div>
        <div className="grid grid-cols-3 w-full gap-2">
          {project.tecnologias.map((category) => (
            <span
              key={category}
              className="bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText rounded-lg px-4 py-2 text-sm font-bold text-center items-center justify-center flex"
            >
              {category}
            </span>
          ))}
        </div>
        <div className="flex flex-col w-full gap-4">
          {project.linkAcesso === " " ||
          project.linkAcesso === "" ||
          project.linkAcesso === "Projeto privado" ? (
            <Button
              disable
              className="flex gap-2 items-center px-4 py-2"
              type={"primary"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <span>Visit</span>
              <MdOpenInNew />
            </Button>
          ) : (
            <Button
              to={project.linkAcesso}
              className="flex gap-2 items-center px-4 py-2"
              type={"primary"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <span>Visit</span>
              <MdOpenInNew />
            </Button>
          )}

          {project.github === " " ||
          project.github === "" ||
          project.github === "Projeto privado" ? (
            project.figma !== "Projeto privado" &&
            project.category[0] === "UI/UX" ? (
              <Button
                to={project.figma}
                className="flex gap-2 items-center px-4 py-2"
                type={"secondary"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <span>Figma</span>
                <FaFigma />
              </Button>
            ) : (
              <Button
                disable
                className="flex gap-2 items-center px-4 py-2"
                type={"tertiary"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <span>Private project</span>
                <FaLock />
              </Button>
            )
          ) : (
            <Button
              to={project.github}
              className="flex gap-2 items-center px-4 py-2"
              type={"secondary"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <span>GitHub</span>
              <FaGithub />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.objectOf(PropTypes.any).isRequired,
};
