import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { cartContext } from "./CartContext";

export default function ItemDetailContainer() {
  const { addToCart } = useContext(cartContext);
  const { id_operadora } = useParams();
  const [detalle, setDetalle] = useState({});
  const [verCount, setVerCount] = useState([true]);
  const [promesaCumplida, setPromesaCumplida] = useState(false);

  useEffect(() => {
    let montado = true;
    setVerCount(true);
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
      console.log(prodFiltrado);
      if (montado) {
        prodFiltrado ? setDetalle(prodFiltrado) : setDetalle({});
        setPromesaCumplida(true);
      }
    });
    GetItem.catch((err) => {
      setDetalle(err);
    });

    return () => (montado = false);
  }, [id_operadora]);

  const onAdd = (cantidad) => {
    alert("Agregaste " + cantidad + " plan(es) " + detalle.operadora + " al carrito.");
    setVerCount(false);
    addToCart(detalle, cantidad);
  };

  return (
    <>
      {detalle && promesaCumplida ? (
        <Container fluid="md">
          <ItemDetail prop={detalle} onAdd={onAdd} ocultarContador={verCount} />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
