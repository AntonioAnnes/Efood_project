import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
// import Categories from './pages/Categories'
// import Product from './pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
    {/* <Route path="/product/:id" element={<Product />} /> */}
  </Routes>
)

export default Rotas
