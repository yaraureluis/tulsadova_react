import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { cartContext } from "./CartContext";
import { getFirestore } from "../firebase/firebase";

function ItemDetailContainer() {
  const { addToCart } = useContext(cartContext);
  const { id_operadora } = useParams();
  const [detalle, setDetalle] = useState({});
  const [showCount, setShowCount] = useState([true]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setShowCount(true);
    setLoaded(false);

    const db = getFirestore();
    let itemRef = db.collection("items").doc(id_operadora);

    itemRef
      .get()
      .then((doc) => {
        if (!doc.exists) {
          return;
        }

        setDetalle({ doc_id: doc.id, ...doc.data() });
        setLoaded(true);
      })
      .catch((err) => {
        setDetalle(err);
      });
  }, [id_operadora]);

  const onAdd = (cantidad) => {
    setShowCount(false);
    addToCart(detalle, cantidad);
  };

  return (
    <>
      {loaded ? (
        <Container fluid="md">
          <ItemDetail prop={detalle} onAdd={onAdd} ocultarContador={showCount} />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default ItemDetailContainer;
