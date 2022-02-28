import React, { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (detalle, cantidad) => {
    if (isInCart(detalle.id_operadora)) {
      // ### Agrego cantidad a cada item existente del carrito ###
      const indexItem = cart.findIndex((item) => item.detalles.id_operadora === detalle.id_operadora);
      cart[indexItem].cantidad = cart[indexItem].cantidad + cantidad;
      cart[indexItem].subtotal = cart[indexItem].cantidad * cart[indexItem].detalles.min_pesos;
      setCart([...cart]);
    } else {
      setCart([...cart, { detalles: detalle, cantidad, subtotal: cantidad * detalle.min_pesos }]);
    }
  };

  const deleteItem = (id_operadora) => {
    const cartUpdated = cart.filter((item) => item.detalles.id_operadora !== id_operadora);
    setCart(cartUpdated);
  };

  const isInCart = (id_operadora) => {
    return cart.some((item) => item.detalles.id_operadora === id_operadora);
  };

  const clearCart = () => setCart([]);

  const totalPrice = () => cart.reduce((sum, producto) => sum + producto.subtotal, 0);

  const totalProducts = () => cart.reduce((sum, producto) => sum + producto.cantidad, 0);

  return <cartContext.Provider value={{ cart, addToCart, deleteItem, setCart, clearCart, totalPrice, totalProducts }}>{children}</cartContext.Provider>;
}
