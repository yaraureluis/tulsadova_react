import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from "./Loading";

function ItemListContainer() {
  const { id_categoria } = useParams();
  const [prod, setProd] = useState({});

  useEffect(() => {
    const promesaProductos = new Promise((resolve, reject) => {
      fetch("/api_productos/planes.json")
        .then((response) => response.json())
        .then(function (res) {
          resolve(res);
        });
    });

    promesaProductos.then((res) => {
      if (id_categoria) res = res.filter((ele) => ele.categoria === id_categoria);
      console.log(res);
      console.log(promesaProductos);
      setProd(res);
    });
    promesaProductos.catch((err) => {
      setProd(err);
    });
  }, [id_categoria]);
  return (
    <>
      {prod.length ? (
        <Container fluid="md">
          <ItemList items={prod} />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ItemListContainer;
