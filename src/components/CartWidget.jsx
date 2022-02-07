import React, { useContext } from "react";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { cartContext } from "./CartContext";

function CartWidget() {
  const { totalProducts } = useContext(cartContext);

  return <span className="bi bi-cart-fill"> ({totalProducts()}) Ver carrito</span>;
}

export default CartWidget;
