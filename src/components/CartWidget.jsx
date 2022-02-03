import React, { useContext, useEffect } from "react";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { cartContext } from "./CartContext";

function CartWidget() {
  const { cart } = useContext(cartContext);
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return <span className="bi bi-cart-fill"> ({cart.length}) Ver carrito</span>;
}

export default CartWidget;
