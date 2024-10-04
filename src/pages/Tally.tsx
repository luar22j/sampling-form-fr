import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/css/global.css";
import BeatLoader from "react-spinners/BeatLoader";

const Tally = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Nueva variable de estado

  return (
    <div className="global-animation">
      <Link to="/" className="active-button py-2 flex items-center gap-1 m-5">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <p>Volver</p>
      </Link>
      <div className="bg-white py-4 flex items-center justify-center -mt-8">
        {!isImageLoaded && !isLoaded && (
          <div className="flex justify-center items-center h-[150px] w-[150px]">
            <BeatLoader color="#FE3D99" speedMultiplier={0.5} />
          </div>
        )}
        <img
          src="https://static.tous.com/21202/pub/directus/7f19acb0-66c5-4e91-90c7-1ad9b723d323.png"
          className="w-[150px]"
          alt="Tous"
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      <h1 className="title text-[#FE3D99] uppercase text-2xl mx-5 text-center">
        FORMULARIO DE VALORACIÓN de eau parfum tous electro touch
      </h1>
      <div className="flex flex-col">
        <div className="mx-3 md:mx-[20%]">
          <iframe
            src="https://tally.so/embed/31JW2l?alignCenter=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="600"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Formulario de valoración"
            allowFullScreen
            onLoad={() => {
              setIsLoaded(true);
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Tally;
