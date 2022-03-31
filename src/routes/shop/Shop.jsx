import React, { useContext } from "react";

import { ProductsContext } from "../../context/productsContext";
import ProductCard from "../../components/product-card/ProductCard";

import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
