import { Link } from "react-router-dom";

const Section = () => {
  return (
    <section className="flex flex-col gap-5 my-5 lg:mt-[100px]">
      <article className="flex flex-col gap-5 mx-5 justify-center lg:items-center sm:mx-[100px] lg:mx-[150px]">
        <h1 className="title text-2xl lg:text-3xl text-[#F04D79]">
          Découvrez le nouveau Body Milk de Sampling Innovations
        </h1>
        <p>
          La lotion corporelle innovante qui pénètre profondément dans la
          surface de la peau :
        </p>
        <ul className="list-inside pl-1 space-y-5">
          <li>
            💧 Apporte jusqu'à 48h d'hydratation grâce à sa texture fraîche et
            légère, tout en nourrissant et illuminant la peau.
          </li>
          <li>
            🍊 Formulé avec de la Vitamine C, l'ingrédient antioxydant le plus
            puissant.
          </li>
          <li>🌱 Produit végan et composé à 98% d'ingrédients naturels.</li>
        </ul>
        <p>
          Profitez de l'étreinte fruitée avec ce parfum TOUS Electro Touch avec
          vaporisateur de 100ml.
        </p>
      </article>

      <article className="flex flex-col gap-5 mx-5 justify-center lg:items-center sm:mx-[100px] lg:mx-[150px]">
        <h2 className="title text-2xl lg:text-3xl text-[#F04D79]">
          Gagnez un lot de produits gratuit !
        </h2>
        <p>
          Répondez à un bref questionnaire sur votre expérience avec le produit
          pour participer au tirage au sort d'un lot de produits Sampling
          Innovations.
        </p>
        <Link
          className="title-bold active-button w-full sm:w-auto bg-[#F04D79] rounded-md flex items-center shadow hover:shadow-md justify-center text-white font-semibold uppercase py-3 px-10 transition-shadow"
          to="/form"
        >
          Je veux participer
        </Link>
      </article>
    </section>
  );
};

export default Section;
