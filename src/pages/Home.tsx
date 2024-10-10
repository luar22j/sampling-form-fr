import Section from "../components/home/Section";
import "../assets/css/global.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Video from "../components/home/Video";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="global-animation flex flex-col w-screen">
      <Link
        to="/"
        className={`bg-white py-4 items-center justify-center w-screen flex fixed z-40 ${
          isScrolled ? "shadow-md" : "transition-all duration-300"
        }`}
      >
        <img src="/img/sampling-logo.png" className="w-[150px]" alt="logo" />
      </Link>
      <div className="flex flex-col lg:flex-row">
        <Video />
        <Section />
      </div>
    </div>
  );
};

export default Home;
