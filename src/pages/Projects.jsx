import { useEffect, useState } from "react";
import projetos from "../utils/projetos";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";

import Select from "../components/Select";

export default function Projects() {
  const [filtro, setFiltro] = useState(null);
  const [projetosFiltrados, setProjetosFiltrados] = useState([]);
  const {
    t,
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    if (filtro && filtro !== "Todos") {
      const projetosFiltrados = projetos.filter((projeto) => {
        return projeto.category.includes(filtro);
      });

      setProjetosFiltrados(projetosFiltrados);
    } else {
      setProjetosFiltrados(projetos);
    }
  }, [filtro]);

  const options = [
    { label: "Todos", value: "Todos" },
    { label: "UI/UX", value: "UI/UX" },
    { label: "Front-End", value: "Front-End" },
    { label: "Back-End", value: "Back-End" },
    { label: "Mobile", value: "Mobile" },
  ];

  const handleSelect = (option) => {
    setFiltro(option.label);
  };

  return (
    <main className="min-h-screen w-full flex flex-col bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <section className="w-full flex flex-col py-32 gap-16 justify-center items-center ">
        {/* Titulo e Filtro */}
        <div className="w-full flex flex-col  gap-8 items-start justify-between">
          {/* Titulo */}
          <div className="w-full bg-secondary skew-y-1 py-3 flex items-center justify-center shadow-lg mb-6">
            <div className="w-full bg-lightBackground-100 py-3 flex items-center justify-center shadow-lg">
              <h1 className="text-3xl text-center font-medium">
                {t("title.projects")}
              </h1>
            </div>
          </div>

          <div className="w-full flex flex-col py-8 justify-evenly items-center gap-4">
            <div className="flex justify-center items-center gap-6">
              <p className="text-lg font-medium">{t("title.filter")}</p>
              <Select options={options} onSelect={handleSelect} />
            </div>

            {filtro && (
              <p className=" text-lg font-medium bg-tertiary px-2 py-1">
                {t("title.filterBox", {
                  filter:
                    filtro === "UI/UX"
                      ? "UI ⁄ UX"
                      : filtro === "Todos" && language === "en"
                      ? "all"
                      : filtro === "Todos" && language === "pt"
                      ? "sem filtro"
                      : filtro,
                })}
              </p>
            )}
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 px-6 md:px-32 justify-center gap-12 lg:gap-20 xl:gap-24">
          {projetosFiltrados.map((projeto) => (
            <ProjectCard key={projeto.id} project={projeto} />
          ))}
        </div>
      </section>
    </main>
  );
}
