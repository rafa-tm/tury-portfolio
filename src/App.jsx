import { useTranslation } from "react-i18next";
import Rotas from "./routes";
import { useEffect } from "react";

export default function App() {
  const {
    i18n: { changeLanguage },
  } = useTranslation();
  useEffect(() => {
    function detectLanguage() {
      let language = navigator.language || navigator.userLanguage;
      language = language.slice(0, 2);
      if (language === "pt") {
        changeLanguage("pt");
      } else {
        changeLanguage("en");
      }
    }
    detectLanguage();
  }, [changeLanguage]);

  return <Rotas />;
}
