import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="global-animation flex flex-col w-full">
      <Link
        to={`/${currentLang}`}
        className="bg-white py-4 items-center justify-center w-full flex fixed z-4"
      >
        <img src="/img/sampling-logo.png" className="w-[150px]" alt="logo" />
      </Link>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="title text-[#F04D79] text-4xl font-bold">
          {t("common.notFound.title")}
        </h1>
        <p className="title text-lg">{t("common.notFound.description")}</p>

        <a
          href="https://goil-sampling-form.vercel.app/"
          className="active-button text-white bg-[#F04D79] px-4 py-2 rounded-md mt-5"
        >
          {t("common.notFound.cta")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
