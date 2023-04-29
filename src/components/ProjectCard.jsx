import PropTypes from "prop-types";
import { MdOpenInNew } from "react-icons/md";
import Button from "./Button";

export default function ProjectCard({ project }) {
  function getLink() {
    let link = project.github;
    if (
      project.github === " " ||
      project.github === "" ||
      project.github === "Projeto privado"
    ) {
      link = project.linkAcesso;
    } else {
      link = project.github;
    }
    return link;
  }

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
        <div className="flex flex-col w-full gap-4">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <p className="text-base font-light text-justify">
            {project.description}
          </p>
        </div>

        <Button
          to={getLink()}
          className="flex gap-2 items-center px-4 py-2"
          type={"primary"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <span>Ver mais</span>
          <MdOpenInNew />
        </Button>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.objectOf(PropTypes.any).isRequired,
};
