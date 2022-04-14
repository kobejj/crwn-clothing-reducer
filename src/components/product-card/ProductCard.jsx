import React, { useContext } from "react";
import { ProductCardContainer } from "./ProductCard.styles.jsx";
import { CartContext } from "../../context/cartContext";
import Button, { buttonTypeClasses } from "../button/Button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <Button
        buttonType={buttonTypeClasses.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
