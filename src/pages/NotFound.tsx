import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="global-animation flex flex-col w-screen">
      <Link
        to={`/${currentLang}`}
        className="bg-white py-4 items-center justify-center w-screen flex fixed z-4"
      >
        {/* ... resto del código ... */}
      </Link>
      {/* ... resto del código ... */}
    </div>
  );
};

export default NotFound;
