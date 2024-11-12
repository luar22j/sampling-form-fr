import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Form from "./pages/Tally";
import Home from "./pages/Home";
import ThanksModal from "./components/home/ThanksModal";
import { useEffect, useState } from "react";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react";
import "./i18n/i18n";
import { useTranslation } from "react-i18next";

function App() {
  const location = useLocation();
  const [showThanksModal, setShowThanksModal] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("success") === "1") {
      setShowThanksModal(true);
    } else {
      setShowThanksModal(false);
    }

    // Detectar el idioma desde la URL
    const pathSegments = location.pathname.split("/");
    const langFromUrl = pathSegments[1];
    if (["es", "en", "fr"].includes(langFromUrl)) {
      i18n.changeLanguage(langFromUrl);
    } else {
      const currentPath = location.pathname === "/" ? "" : location.pathname;
      window.location.replace(`/es${currentPath}`);
    }

    window.scrollTo(0, 0);
  }, [location, i18n]);

  return (
    <>
      {showThanksModal && <ThanksModal />}
      <Routes>
        <Route path="/:lang" element={<Home />} />
        <Route path="/:lang/form" element={<Form />} />
        <Route path="/:lang/*" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/es" replace />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
      <Analytics />
    </Router>
  );
}
