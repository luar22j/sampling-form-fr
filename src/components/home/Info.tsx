import { useState } from "react";
import ThanksModal from "./ThanksModal";
import Home from "../../pages/Home";
import { Link } from "react-router-dom";

const Info = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Home />
      {!showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="z-50 w-[90%] sm:w-[400px] rounded-md bg-white flex flex-col items-center justify-center gap-5 py-5 px-7 email-animation">
            <div className="w-full flex justify-end">
              <Link
                className="active-button cursor-pointer transition-all z-50"
                to={"/"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex flex-col items-center gap-5 -mt-10">
              <img
                src="https://static.tous.com/21202/pub/directus/7f19acb0-66c5-4e91-90c7-1ad9b723d323.png"
                className="w-[100px]"
                alt="Tous"
              />
              <h1 className="title text-[#FE3D99] uppercase text-2xl mx-5 text-center">
                Solo te falta un último paso para poder conseguir el descuento
              </h1>
              <div className="w-full flex flex-col gap-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre"
                  className="email-input w-full h-[37px] p-3 bg-[#fe3d9a11] rounded-md outline-none focus:ring-2 focus:ring-[#FE3D99] transition-all"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Correo electrónico"
                  className="email-input w-full h-[37px] p-3 bg-[#fe3d9a11] rounded-md outline-none focus:ring-2 focus:ring-[#FE3D99] transition-all"
                />
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Código postal"
                  className="number-input w-full h-[37px] p-3 bg-[#fe3d9a11] rounded-md outline-none focus:ring-2 focus:ring-[#FE3D99] transition-all"
                  style={{
                    appearance: "textfield",
                  }}
                />
              </div>
              <button
                onClick={handleShowModal}
                className="active-button w-full bg-[#FE3D99] rounded-md flex items-center shadow hover:shadow-md justify-center text-white font-semibold uppercase py-3 px-10 transition-shadow"
              >
                Conseguir mi descuento
              </button>
            </div>
          </div>
        </div>
      )}
      {showModal && <ThanksModal />}
    </>
  );
};

export default Info;
