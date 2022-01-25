import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(params) {
  //   const { prodId } = useParams();
  const [detalle, setDetalle] = useState([]);

  useEffect(() => {
    const GetItem = new Promise((resolve, reject) => {
      //montaje async con fetch, llamando al json local
      fetch("./api_productos/planes.json")
        .then((response) => response.json())
        .then(function (res) {
          console.log(res);
          resolve(res);
        });
    });

    GetItem.then((res) => {
      console.log(res);
      // Utilizo el find para obtener de mi Json unicamente los planes Digitel en este caso.
      let prodFiltrado = res.find((ele) => ele.operadora === "Digitel");
      setDetalle([prodFiltrado]);
      console.log(detalle);
    });
    GetItem.catch((err) => {
      setDetalle(err);
    });
  }, []);

  return (
    <>
      <Container fluid="md">
        {detalle.map((item) => {
          return <ItemDetail operadora={item.operadora} logo={item.logo} imagen={item.imagen} min={item.min_pesos} max={item.max_pesos} stock={item.stock} tipo={item.categoria} planes={item.planes} />;
        })}
      </Container>
    </>
  );
}
