import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "../../api/firebase";

const Products = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getProducts);
  return <div>Products</div>;
};

export default Products;
