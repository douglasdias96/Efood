import { Route, Routes } from "react-router-dom"
import PaginaHome from './Pages/Home'
import Cardapio from "./Pages/Cardapio"


const Rotas = () => (
  <Routes>
    <Route path="/" element={<PaginaHome />} />
    <Route path="/restaurantes" element={<Cardapio />} />
  </Routes>

)


export default Rotas