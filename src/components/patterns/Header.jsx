import { Link } from "react-router-dom";
import ThemeButton from "../ThemeButton";

export default function Header() {
  return (
    <header
      className={
        "w-full flex justify-between items-center px-40 py-4 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText"
      }
    >
      <Link to="/" className="hover:scale-110 text-lg font-semibold">
        Inicio
      </Link>
      <nav className="flex gap-12 items-center ">
        <Link to="/projects" className="hover:scale-110 text-lg font-semibold">
          Projetos
        </Link>
        <Link
          to="/contact"
          className="bg-primary font-bold rounded-lg py-2 px-4 text-lightText shadow-lg hover:scale-110 transition-transform"
        >
          Contato
        </Link>
        <ThemeButton />
      </nav>
    </header>
  );
}
