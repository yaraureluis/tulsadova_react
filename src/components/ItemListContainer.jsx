import React from "react";
import ItemCount from "./ItemCount.jsx";

function ItemListContainer() {
  const onAdd = (cantidad) => alert("Se agregaron " + cantidad + " items al carrito.");

  return <ItemCount stock="5" inicia="1" onAdd={onAdd} />;
}

export default ItemListContainer;
