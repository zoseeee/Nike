import React from 'react'
import Header from './components/Header/Header'
import { Route, Routes } from "react-router-dom";
import "./css/app.scss"
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Carts from './components/Carts/Carts';
import New from './components/New/New';
import ProductDetail from './components/ProductDetail/ProductDetail';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/carts' element={<Carts />} />
        <Route path='/products/new' element={<New />} />
        <Route path='/products/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App