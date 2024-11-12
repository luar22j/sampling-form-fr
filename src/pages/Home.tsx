import Section from "../components/home/Section";
import "../assets/css/global.css";
import { useEffect, useState } from "react";
import Video from "../components/home/Video";
import LanguageSelector from "../components/LanguageSelector";

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
    <div className="global-animation flex flex-col w-full">
      <div
        className={`bg-white py-4 px-5 items-center md:justify-center justify-between w-full flex fixed z-40 ${
          isScrolled ? "shadow-md" : "transition-all duration-300"
        }`}
      >
        <img src="/img/sampling-logo.png" className="w-[150px]" alt="logo" />
        <div className="md:absolute md:right-10 flex items-center">
          <LanguageSelector />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <Video />
        <Section />
      </div>
    </div>
  );
};

export default Home;
