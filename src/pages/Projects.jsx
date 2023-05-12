import { useEffect, useState } from "react";
import projetos from "../utils/projetos";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [filtro, setFiltro] = useState("Nenhum");
  const [projetosFiltrados, setProjetosFiltrados] = useState([]);

  useEffect(() => {
    let projetosFiltrados = [];
    function filterProjetos() {
      if (filtro === "Nenhum") {
        projetosFiltrados = projetos;
      } else {
        for (let i = 0; i < projetos.length; i++) {
          if (projetos[i].category.includes(filtro)) {
            projetosFiltrados.push(projetos[i]);
          }
        }
      }
      setProjetosFiltrados(projetosFiltrados);
    }
    filterProjetos();
  }, [filtro]);

  return (
    <main className=" w-full flex flex-col bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <section className="w-full flex flex-col px-4 lg:px-20 py-40 gap-16 justify-center items-center ">
        <div className="w-[95%] flex flex-col  gap-8 items-start justify-between">
          <h1 className="text-4xl font-medium">My Projects</h1>

          <div className="relative w-full flex flex-col justify-between items-end gap-4 mb-8">
            <div className="flex items-center justify-center gap-8">
              <p className="text-base font-medium">Filter by area:</p>
              <select
                name="areaProjetos"
                id="areaProjetos"
                className="border-2 bg-lightBackground dark:bg-darkBackground border-lightText dark:border-darkText rounded-lg px-2 py-1"
                onChange={(e) => setFiltro(e.target.value)}
              >
                <option value="Nenhum">No filter</option>
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
                <option value="Mobile">Mobile</option>
                <option value="UI/UX">UI/UX</option>
              </select>
            </div>

            {filtro !== "Nenhum" ? (
              <p className="absolute -bottom-12 text-base font-medium bg-tertiary px-2 py-1">
                Projects in {filtro}
              </p>
            ) : null}
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-12 lg:gap-20 xl:gap-24">
          {projetosFiltrados.map((projeto) => (
            <ProjectCard key={projeto.id} project={projeto} />
          ))}
        </div>
      </section>
    </main>
  );
}
