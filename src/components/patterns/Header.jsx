import Button from "../Button";
// import { FiMenu, FiX } from "react-icons/fi";
//import { useState } from "react";
import LanguageButton from "../LanguageButton";

import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // function toggleMenu() {
  //   setIsMenuOpen(!isMenuOpen);
  // }

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Button to={"/"} type={"text"} className={"text-lg"}>
          <div className="bg-gradient-to-tr from-primary to-secondary text-lightText px-4 py-1 -skew-y-1">
            <span className="text-2xl">Tury</span>
            <span className="text-sm">.dev</span>
          </div>
        </Button>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center gap-8 mt-4 md:mt-0 text-base justify-center">
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
        <LanguageButton />
      </div>
    </header>
  );
}
