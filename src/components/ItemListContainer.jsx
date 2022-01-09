import React from "react";

function ItemListContainer(props) {
  return (
    <p style={{ color: "grey", fontWeight: "bold", fontStyle: "italic" }} className={`display-1 ${props.alineacion}`}>
      {props.greeting} {props.nombre}
    </p>
  );
}

export default ItemListContainer;
