import { Link } from "react-router-dom";

const Section = () => {
  return (
    <section className="flex flex-col gap-5 my-5 sm:mt-[80px]">
      <article className="flex flex-col gap-5 mx-5 justify-center lg:items-center sm:mx-[100px] lg:mx-[150px]">
        <h1 className="title text-2xl lg:text-3xl text-[#FE3D99] uppercase">
          Todo sobre Eau de parfum TOUS Electro Touch, de Fabrice Pellegrin.
        </h1>
        <p className="text-xs lg:text-sm">
          Esta fragancia vegana, ambarada y floral, acompaña la fuerza innata y
          la alegría de una mujer que se sabe el centro de atención por la
          energía que desprende.
        </p>
        <ul className="text-xs lg:text-sm list-disc list-inside pl-1 space-y-1">
          <li>Una chispante fusión de pera, pomelo y arándano.</li>
          <li>
            Corazón floral a base de jazmón y azahar con un toque de chantilly.
          </li>
          <li>
            Notas amaderadas de sándalo y del acorde Dreamwood se entremezclan
            con la vainilla y el praliné creando un magnetismo irresistible.
          </li>
        </ul>
        <p className="text-xs lg:text-sm">
          Disfruta del abrazo afrutado con este perfume TOUS Electro Touch con
          vaporizador de 100ml.
        </p>
      </article>

      <article className="flex flex-col gap-5 mx-5 justify-center lg:items-center sm:mx-[100px] lg:mx-[150px]">
        <h2 className="title text-2xl lg:text-3xl text-[#FE3D99]">
          ¡CONSIGUE UN 20% DE DESCUENTO PARA TOUS ONLINE CON TU OPINIÓN!
        </h2>
        <p className="text-xs lg:text-sm">
          Tu opinión es muy importante para nosotros. Por eso, si respondes este
          breve formulario podrás obtener un descuento del 20% en cualquier
          producto de TOUS.
        </p>
        <Link
          className="active-button w-full sm:w-auto bg-[#FE3D99] rounded-md flex items-center shadow hover:shadow-md justify-center text-white font-semibold uppercase py-3 px-10 transition-shadow"
          to="/form"
        >
          Quiero mi recompensa
        </Link>
      </article>
    </section>
  );
};

export default Section;
