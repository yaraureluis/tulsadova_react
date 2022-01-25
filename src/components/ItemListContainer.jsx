import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
function ItemListContainer() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const promesaProductos = new Promise((resolve, reject) => {
      fetch("./api_productos/planes.json")
        .then((response) => response.json())
        .then(function (res) {
          resolve(res);
        });
    });

    promesaProductos.then((res) => {
      console.log(promesaProductos);
      setProd(res);
    });
    promesaProductos.catch((err) => {
      setProd(err);
    });
  }, []);
  return (
    <>
      <Container fluid="md">
        <ItemList items={prod} />
      </Container>
    </>
  );
}

export default ItemListContainer;
