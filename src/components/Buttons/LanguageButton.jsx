import { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { BR, US } from "country-flag-icons/react/3x2";
import Button from "./Button";
import { FaLanguage } from "react-icons/fa";

export default function LanguageButton({ className }) {
  const {
    i18n: { changeLanguage },
    t,
  } = useTranslation();
  const [showOptions, setShowOptions] = useState(false);

  const handleChangeLanguage = (language) => {
    changeLanguage(language);
    setShowOptions(false);
  };

  return (
    <div className={`${className} flex flex-col items-center`}>
      <Button
        className={"flex gap-2 justify-center items-center"}
        type={"text"}
        action={() => setShowOptions(!showOptions)}
      >
        <FaLanguage className="w-8" />
        <span className="text-lg">{t("header.language")}</span>
      </Button>
      {showOptions && (
        <>
          <div
            className="fixed top-0 left-0 w-screen h-screen z-40"
            onClick={() => setShowOptions(false)}
          ></div>
          <div
            className="absolute mt-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-language"
          >
            <div className="py-1">
              <button
                onClick={() => handleChangeLanguage("en")}
                className="block w-full text-center px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >
                <div className="flex gap-2">
                  <US className="w-6" />
                  <span className="text-lg flex-grow">{t("en")}</span>
                </div>
              </button>
              <button
                onClick={() => handleChangeLanguage("pt")}
                className="block w-full text-center px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >
                <div className="flex gap-2">
                  <BR className="w-6" />
                  <span className="text-lg flex-grow">{t("pt")}</span>
                </div>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

LanguageButton.propTypes = {
  className: PropTypes.string,
};
