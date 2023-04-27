import PropTypes from "prop-types";
import { MdOpenInNew } from "react-icons/md";
import Button from "./Button";

export default function ProjectCard({ project }) {
  return (
    <div className="w-full shadow-lg rounded-xl bg-lightBackground-100 dark:bg-darkBackground-100 overflow-hidden ">
      <div className="relative">
        <img src={project.imagem} alt={project.imagemAlt} />
        <div className="absolute bottom-0 right-0 flex gap-2 bg-lightBackground-100 dark:bg-darkBackground-100 px-4 py-2 items-center rounded-tl-lg ">
          {project.tipos.map((tipo) => (
            <span
              key={tipo}
              className="bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText rounded-lg px-4 py-2 text-sm font-bold"
            >
              {tipo}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-12 px-6 pb-8 pt-4">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-2xl font-bold">{project.nome}</h1>
          <p className="text-base font-light">{project.descricao}</p>
        </div>

        <Button
          to={`/projetos/${project.nome}`}
          className="flex gap-2 items-center px-4 py-2"
          type={"primary"}
        >
          <span>Ver mais</span>
          <MdOpenInNew />
        </Button>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.objectOf(PropTypes.string).isRequired,
};
