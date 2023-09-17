import Button from "../Buttons/Button";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import LanguageButton from "../Buttons/LanguageButton";

import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="h-[81px]"></div>
      <header className="fixed top-0 w-full text-gray-600 body-font bg-lightBackground z-[100]">
        <div className="container mx-auto flex p-5 md:flex-row justify-between items-center">
          <Button to={"/"} type={"text"} className={"text-lg"}>
            <div className="bg-gradient-to-tr from-primary to-secondary text-lightText px-4 py-1 -skew-y-1">
              <span className="text-2xl">Rafael Tury</span>
            </div>
          </Button>

          <nav className="hidden md:ml-auto md:mr-auto md:flex flex-wrap items-center gap-8 mt-4 md:mt-0 text-base justify-center">
            <Button
              to={"/"}
              type={"text"}
              className={"text-lg"}
              reloadDocument={true}
            >
              {t("header.home")}
            </Button>
            <Button to={"/projects"} type={"text"} className={"text-lg"}>
              {t("header.projects")}
            </Button>
            <Button to={"/aboutMe"} type={"text"} className={"text-lg"}>
              {t("header.about")}
            </Button>
            <Button to={"/resume"} type={"text"} className={"text-lg"}>
              {t("header.resume")}
            </Button>
          </nav>
          <LanguageButton className="hidden md:flex" />

          {/* Mobile Menu */}

          {isMenuOpen ? (
            <FiX
              className="md:hidden cursor-pointer"
              size={32}
              onClick={toggleMenu}
            />
          ) : (
            <>
              <FiMenu
                className="md:hidden cursor-pointer"
                size={32}
                onClick={toggleMenu}
              />
            </>
          )}

          {isMenuOpen && (
            <div className="absolute top-0 left-0 h-screen w-[80%] z-[150] bg-lightBackground transition-transform duration-300">
              <div className="w-full mx-auto flex flex-col items-center py-32 gap-8 h-full">
                <nav className="flex flex-col items-start gap-8 mt-4 md:mt-0 text-base justify-center">
                  <Button
                    to={"/"}
                    type={"text"}
                    className={"text-lg"}
                    reloadDocument={true}
                  >
                    {t("header.home")}
                  </Button>
                  <Button to={"/projects"} type={"text"} className={"text-lg"}>
                    {t("header.projects")}
                  </Button>
                  <Button to={"/aboutMe"} type={"text"} className={"text-lg"}>
                    {t("header.about")}
                  </Button>
                  <Button to={"/resume"} type={"text"} className={"text-lg"}>
                    {t("header.resume")}
                  </Button>
                </nav>
                <LanguageButton className="flex" />
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
