import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Portfolio } from "../pages/Portfolio/Portfolio";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}
