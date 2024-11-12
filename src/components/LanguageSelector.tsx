import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = {
    es: "ES",
    en: "EN",
    fr: "FR",
  };

  let languageText = languages[i18n.language as keyof typeof languages];

  if (i18n.language === "es") {
    languageText = "Español";
  } else if (i18n.language === "en") {
    languageText = "English";
  } else if (i18n.language === "fr") {
    languageText = "Français";
  }

  const changeLanguage = (lang: string) => {
    const currentPath = location.pathname;
    const newPath = currentPath.replace(/^\/(es|en|fr)/, `/${lang}`);
    navigate(newPath);
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 px-3 py-1 border rounded-md"
      >
        {languageText}{" "}
        <img
          className="w-7 h-4 rounded-sm"
          src={`/img/${i18n.language}.jpg`}
          alt=""
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-white border rounded-md shadow-lg">
          {Object.entries(languages).map(([code, languageText]) => {
            if (languageText === "ES") {
              languageText = "Español";
            } else if (languageText === "EN") {
              languageText = "English";
            } else if (languageText === "FR") {
              languageText = "Français";
            }

            return (
              <button
                key={code}
                onClick={() => changeLanguage(code)}
                className="w-full flex items-center justify-between flex-wrap px-3 py-2 hover:bg-gray-100"
              >
                {languageText}
                <img
                  src={`/img/${code}.jpg`}
                  className="w-7 h-4 rounded-sm"
                  alt={code}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
