import React, { useContext, useState } from "react";
import { cartContext } from "./CartContext";
import { getFirestore, serverStamp } from "../firebase/firebase";
import firebase from "firebase/app";

import CheckOutForm from "./CheckOutForm";

function CheckOut() {
  const { cart, totalPrice } = useContext(cartContext);
  const [userInfo, setUserInfo] = useState({});
  const [orderId, setOrderId] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    console.log(e);
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = getFirestore();
    const ordersRef = db.collection("orders");
    const date = serverStamp.now();
    const total = totalPrice();
    const batch = db.batch();
    const outOfStock = [];
    const stockUpdate = await db
      .collection("items")
      .where(
        firebase.firestore.FieldPath.documentId(),
        "in",
        cart.map((item) => item.detalles.id_operadora)
      )
      .get();

    stockUpdate.docs.forEach((docSnapshot, i) => {
      if (docSnapshot.data().stock >= cart[i].cantidad) {
        batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cart[i].cantidad });
      } else {
        outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
      }
    });

    if (!outOfStock.length)
      await batch
        .commit()
        .then(() => {
          ordersRef.add({ ...userInfo, cart, total, date }).then(({ id }) => {
            console.log("id del documento", id);
            setOrderId(id);
            e.target.reset();
            setShow(true);
          });
        })
        .catch((err) => {
          console.error(err);
        });
  };

  return (
    <>
      <CheckOutForm handleSubmit={handleSubmit} handleChange={handleChange} orderId={orderId} handleClose={handleClose} handleShow={handleShow} show={show} />
    </>
  );
}

export default CheckOut;
