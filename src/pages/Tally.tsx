import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/css/global.css";
import BeatLoader from "react-spinners/BeatLoader";

const Tally = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="global-animation">
      <Link to="/" className="bg-white py-4 flex items-center justify-center">
        <img
          src="https://static.tous.com/21202/pub/directus/7f19acb0-66c5-4e91-90c7-1ad9b723d323.png"
          className="w-[150px]"
          alt="Tous"
        />
      </Link>
      <h1 className="title text-[#FE3D99] uppercase text-2xl mx-5 text-center">
        FORMULARIO DE VALORACIÓN de eau parfum tous electro touch
      </h1>
      <div className="flex flex-col">
        <div className="mx-3 md:mx-[20%]">
          {!isLoaded && (
            <div className="flex justify-center items-center h-[500px]">
              <BeatLoader color="#FE3D99" />
            </div>
          )}
          <iframe
            src="https://tally.so/embed/31JW2l?alignCenter=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="500"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Formulario de valoración"
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Tally;
