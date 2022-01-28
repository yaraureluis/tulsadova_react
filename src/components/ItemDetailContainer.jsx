import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

export default function ItemDetailContainer() {
  const { id_operadora } = useParams();
  const [detalle, setDetalle] = useState({});
  const [promesaCumplida, setPromesaCumplida] = useState("false");
  useEffect(() => {
    setPromesaCumplida(false);
    const GetItem = new Promise((resolve, reject) => {
      //montaje async con fetch, llamando al json local
      fetch("/api_productos/planes.json")
        .then((response) => response.json())
        .then(function (res) {
          console.log(res);
          resolve(res);
        });
    });

    GetItem.then((res) => {
      console.log(res);
      // Utilizo el find para obtener de mi Json unicamente los planes Digitel en este caso.
      let prodFiltrado = res.find((ele) => ele.id_operadora === id_operadora);
      setDetalle([prodFiltrado]);
      console.log(detalle);
      setPromesaCumplida(true);
    });
    GetItem.catch((err) => {
      setDetalle(err);
    });
  }, [id_operadora]);

  return (
    <>
      {detalle.length && promesaCumplida ? (
        <Container fluid="md">
          {detalle.map((item) => {
            return (
              <>
                <ItemDetail prop={item} />;
              </>
            );
          })}
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
