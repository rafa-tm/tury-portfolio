import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SobreMim from "./pages/SobreMim";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contato" element={<h1>Contato</h1>} />
          <Route path="/sobre" element={<SobreMim />} />
          <Route path="/projetos" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
