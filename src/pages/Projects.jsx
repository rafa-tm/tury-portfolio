import { useState } from "react";
import Header from "../components/patterns/Header";
import Footer from "../components/patterns/Footer";

export default function Projects() {
  const [filtro, setFiltro] = useState("");

  return (
    <>
      <Header />
      <main className="w-full flex flex-col bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
        <section className="w-full flex flex-col lg:flex-row px-20 py-36 gap-24 justify-center items-center ">
          <div className="w-[90%] flex items-center justify-between">
            <h1 className="text-4xl font-medium">Meus Projetos</h1>
            <div className="flex items-center gap-4">
              <p className="text-base font-light">Filtre por area:</p>
              <select
                name="areaProjetos"
                id="areaProjetos"
                className="border-2 bg-lightBackground dark:bg-darkBackground border-lightText dark:border-darkText rounded-lg px-2 py-1"
                onChange={(e) => setFiltro(e.target.value)}
              >
                <option value="Todos">Todos</option>
                <option value="FrontEnd">Front-end</option>
                <option value="BackEnd">Back-end</option>
                <option value="Mobile">Mobile</option>
                <option value="UI/UX">UI/UX</option>
              </select>
            </div>
          </div>
          <div>{filtro}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
