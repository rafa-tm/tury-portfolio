import PropTypes from "prop-types";
import { MdOpenInNew } from "react-icons/md";
import Button from "./Buttons/Button";
import { FaFigma, FaGithub, FaLock } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ProjectCard({ project }) {
  const id = project.id;
  const { t } = useTranslation();

  function handleButtonVisit() {
    if (project.accessLink && project.accessLink !== "Projeto privado") {
      return (
        <Button
          to={project.accessLink}
          className="flex gap-2 items-center px-4 py-2"
          type={"primary"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <span>{t("title.buttonVisit")}</span>
          <MdOpenInNew />
        </Button>
      );
    } else {
      return (
        <Button
          disable
          className="flex gap-2 items-center px-4 py-2"
          type={"primary"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <span>{t("title.buttonVisit")}</span>
          <MdOpenInNew />
        </Button>
      );
    }
  }

  function handleButtonGithubFigma() {
    if (project.github && project.github !== "Projeto privado") {
      return (
        <Button
          to={project.github}
          className="flex gap-2 items-center px-4 py-2"
          type={"secondary"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <span>{t("title.buttonGithub")}</span>
          <FaGithub />
        </Button>
      );
    } else if (project.figma && project.figma !== "Projeto privado") {
      return (
        <Button
          to={project.figma}
          className="flex gap-2 items-center px-4 py-2"
          type={"secondary"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <span>{t("title.buttonFigma")}</span>
          <FaFigma />
        </Button>
      );
    } else {
      return (
        <Button
          disable
          className="flex gap-2 items-center px-4 py-2"
          type={"tertiary"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <span>{t("title.buttonPrivate")}</span>
          <FaLock />
        </Button>
      );
    }
  }

  return (
    <div className="w-full flex flex-col shadow-lg rounded-xl border-slate-200 border-2 bg-lightBackground-100 dark:bg-darkBackground-100 overflow-hidden ">
      <div className="w-full relative">
        <img
          src={project.image}
          alt={project.imageAlt}
          width={770}
          height={420}
        />
        <div className="absolute bottom-0 right-0 flex gap-2 bg-lightBackground-100 dark:bg-darkBackground-100 px-4 py-2 items-center rounded-tl-lg ">
          {project.category.map((category, index) => (
            <span
              key={index}
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
            {t(`projects.items.${id}.description`)}
          </p>
        </div>
        <div className="grid grid-cols-3 w-full gap-2">
          {project.technologies?.map((category) => (
            <span
              key={category}
              className="bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText rounded-lg px-4 py-2 text-sm font-bold text-center items-center justify-center flex"
            >
              {category}
            </span>
          ))}
        </div>
        <div className="flex flex-col w-full gap-4">
          {handleButtonVisit()}
          {handleButtonGithubFigma()}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  projectImage: PropTypes.any,
  project: PropTypes.any,
};
