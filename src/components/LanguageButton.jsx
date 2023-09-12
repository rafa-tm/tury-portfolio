import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BR, US } from "country-flag-icons/react/3x2";
import Button from "./Button";

export default function LanguageButton() {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  return (
    <div>
      <Button type={"text"} action={handleChangeLanguage}>
        {currentLanguage === "en" ? (
          <div className="flex gap-2">
            <US className="w-6" />
            <span className="text-lg">English</span>
          </div>
        ) : (
          <div className="flex gap-2">
            <BR className="w-6" />
            <span className="text-lg">Português</span>
          </div>
        )}
      </Button>
    </div>
  );
}
