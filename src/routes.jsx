import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contato" element={<h1>Contato</h1>} />
          <Route path="/sobre" element={<h1>Sobre</h1>} />
        </Route>
        <Route path="/projetos/">
          <Route index element={<Projects />} />
          <Route path=":name" element={<h1>Projeto</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
