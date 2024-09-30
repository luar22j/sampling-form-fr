import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./pages/Tally";
import Home from "./pages/Home";
import Info from "./components/home/Info";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}
