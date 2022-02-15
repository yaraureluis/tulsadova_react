import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { cartContext } from "./CartContext";
import { getFirestore } from "../firebase/firebase";

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

    const db = getFirestore();
    let itemRef = db.collection("items").doc(id_operadora);

    itemRef
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("No existen datos de la operadora seleccionada");
          return;
        }

        if (montado) {
          setDetalle({ doc_id: doc.id, ...doc.data() });
          setPromesaCumplida(true);
        }
      })
      .catch((err) => {
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
      {promesaCumplida ? (
        <Container fluid="md">
          <ItemDetail prop={detalle} onAdd={onAdd} ocultarContador={verCount} />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
