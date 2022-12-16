import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import "./css/app.scss";
import Home from "./components/Home/Home";
import Carts from "./components/Carts/Carts";
import New from "./components/NewProduct/NewProduct";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { AuthContextProvider } from "./components/context/AuthContext";
import AllProducts from "./components/AllProducts/AllProducts";

const App = () => {
  return (
    <AuthContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/carts" element={<Carts />} />
        <Route
          path="/products/new"
          element={
            <ProtectedRoute requireAdmin>
              <New />
            </ProtectedRoute>
          }
        />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
