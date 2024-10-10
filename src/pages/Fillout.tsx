import { FilloutStandardEmbed } from "@fillout/react";
import "@fillout/react/style.css";
import { Link } from "react-router-dom";

const Fillout = () => {
  return (
    <div className="global-animation">
      <Link to="/" className="bg-white py-2 flex items-center justify-center">
        <img
          src="https://static.tous.com/21202/pub/directus/7f19acb0-66c5-4e91-90c7-1ad9b723d323.png"
          className="w-[150px]"
          alt="Tous"
        />
      </Link>
      <h1 className="title text-[#F04D79] uppercase text-2xl mx-5 text-center">
        FORMULARIO DE VALORACIÓN de eau parfum tous electro touch
      </h1>
      <div className="w-full h-[400px] my-3">
        <FilloutStandardEmbed filloutId="7GzHyLHkXkus" inheritParameters />
      </div>
    </div>
  );
};

export default Fillout;
