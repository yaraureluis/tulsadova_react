import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (detalle, cantidad) => {
    if (isInCart(detalle.id_operadora)) {
      // funcion agregar cantidad al carrito
      const indexItem = cart.findIndex((item) => item.detalles.id_operadora === detalle.id_operadora);
      cart[indexItem].cantidad = cart[indexItem].cantidad + cantidad;
      setCart([...cart]);
      console.log("funcion agregar cantidad");
    } else {
      console.log(cart);
      setCart([...cart, { detalles: detalle, cantidad }]);
    }
  };

  // función para quitar elementos del carrito
  const deleteItem = (id_operadora) => {
    const cartUpdated = cart.filter((item) => item.detalles.id_operadora !== id_operadora);
    setCart(cartUpdated);
  };
  // funcion para vaciar el carrito
  const clearCart = () => setCart([]);

  // funcion para verificar si el producto existe ####
  const isInCart = (id_operadora) => {
    return cart.some((item) => item.detalles.id_operadora === id_operadora);
  };

  // funcion para vaciar el carrito

  return <cartContext.Provider value={{ cart, addToCart, deleteItem, setCart }}>{children}</cartContext.Provider>;
}
