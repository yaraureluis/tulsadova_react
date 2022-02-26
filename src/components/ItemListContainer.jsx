import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { getFirestore } from "../firebase/firebase";

function ItemListContainer() {
  const { id_categoria } = useParams();
  const [prod, setProd] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    let itemCollection;
    if (id_categoria && id_categoria !== "todas") itemCollection = db.collection("items").where("categoria", "==", id_categoria);
    else itemCollection = db.collection("items").orderBy("categoria", "asc");

    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No hay items");
          return;
        }
        setProd(
          querySnapshot.docs.map((doc) => {
            return { doc_id: doc.id, ...doc.data() };
          })
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id_categoria]);

  return (
    <>
      {prod.length || !loading ? (
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
