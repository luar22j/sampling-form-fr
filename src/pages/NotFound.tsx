import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="global-animation flex flex-col w-screen">
    <Link
      to="/"
      className="bg-white py-4 items-center justify-center w-screen flex fixed z-4"
    >
      <img src="/img/sampling-logo.png" className="w-[150px]" alt="logo" />
    </Link>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="title text-[#F04D79] text-4xl font-bold">404</h1>
      <p className="title text-lg">Página no encontrada</p>

      <a
        href="https://sampling-innovations.com/"
        className="active-button text-white bg-[#F04D79] px-4 py-2 rounded-md mt-5"
      >
        Ir a la página principal
      </a>
    </div>
  </div>
);
export default NotFound;
