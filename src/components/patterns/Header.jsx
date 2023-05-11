import ThemeButton from "../ThemeButton";
import Button from "../Button";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header
      className={
        "w-full fixed top-0 z-50 flex justify-between items-center px-12 lg:px-40 py-6 bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText"
      }
    >
      <Button
        to={"/"}
        action={() => scrollToTop()}
        type={"text"}
        className={"text-lg"}
      >
        <div className="bg-gradient-to-tr from-primary to-secondary text-lightText px-4 py-1 -skew-y-1">
          <span className="text-2xl">Tury</span>
          <span className="text-sm">.dev</span>
        </div>
      </Button>

      <Button className={"lg:hidden"} type={"text"} action={() => toggleMenu()}>
        {isMenuOpen ? (
          <FiX className={"text-2xl"} />
        ) : (
          <FiMenu className={"text-2xl"} />
        )}
      </Button>

      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen"
          onClick={() => toggleMenu()}
        >
          <div className="absolute top-24 w-full h-full bg-lightBackground dark:bg-darkBackground">
            <nav className="flex flex-col gap-12 py-8 items-center ">
              <Button
                to={"/"}
                type={"text"}
                className={"text-lg"}
                reloadDocument={true}
              >
                Início
              </Button>
              <Button to={"/projetos"} type={"text"} className={"text-lg"}>
                Projetos
              </Button>
              <Button to={"/sobre"} type={"text"} className={"text-lg"}>
                Sobre mim
              </Button>
              <Button to={"/"} type={"primary"} className={"px-3 py-1 text-lg"}>
                Contato
              </Button>

              <ThemeButton />
            </nav>
          </div>
        </div>
      )}

      <nav className="hidden lg:flex gap-12 items-center ">
        <Button
          to={"/"}
          type={"text"}
          className={"text-lg"}
          reloadDocument={true}
        >
          Início
        </Button>
        <Button to={"/projetos"} type={"text"} className={"text-lg"}>
          Projetos
        </Button>
        <Button to={"/sobre"} type={"text"} className={"text-lg"}>
          Sobre mim
        </Button>
        <Button
          to={"/contato"}
          type={"primary"}
          className={"px-3 py-1 text-lg"}
        >
          Contato
        </Button>

        <ThemeButton />
      </nav>
    </header>
  );
}
