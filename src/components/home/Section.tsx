import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Section = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <section className="flex flex-col gap-5 my-5 lg:mt-[100px]">
      <article className="flex flex-col gap-5 mx-5 justify-center lg:items-center sm:mx-[100px] lg:mx-[150px]">
        <h1 className="title text-2xl lg:text-3xl text-[#F04D79]">
          {t("home.title")}
        </h1>
        <p>{t("home.description")}</p>
        <ul className="list-inside pl-1 space-y-5">
          <li>{t("home.benefits.hydration")}</li>
          <li>{t("home.benefits.vitamin")}</li>
          <li>{t("home.benefits.vegan")}</li>
        </ul>
        <p>{t("home.perfume")}</p>
      </article>

      <article className="flex flex-col gap-5 mx-5 justify-center lg:items-center sm:mx-[100px] lg:mx-[150px]">
        <h2 className="title text-2xl lg:text-3xl text-[#F04D79]">
          {t("home.win.title")}
        </h2>
        <p>{t("home.win.description")}</p>
        <Link
          className="title-bold active-button w-full sm:w-auto bg-[#F04D79] rounded-md flex items-center shadow hover:shadow-md justify-center text-white font-semibold uppercase py-3 px-10 transition-shadow"
          to={`/${currentLang}/form`}
        >
          {t("home.win.cta")}
        </Link>
      </article>
    </section>
  );
};

export default Section;
