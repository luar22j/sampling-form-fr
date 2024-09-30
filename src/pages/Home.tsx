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
        className={`bg-white py-4 items-center justify-center w-screen flex fixed lg:relative z-50 ${
          isScrolled
            ? "shadow-md sm:shadow-none"
            : "transition-all duration-300"
        }`}
      >
        <img
          src="https://static.tous.com/21202/pub/directus/7f19acb0-66c5-4e91-90c7-1ad9b723d323.png"
          className="w-[150px]"
          alt=""
        />
      </Link>
      <div className="flex flex-col lg:flex-row">
        <Video />
        <Section />
      </div>
    </div>
  );
};

export default Home;
