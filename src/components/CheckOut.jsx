import React, { useContext, useState } from "react";
import { cartContext } from "./CartContext";
import { getFirestore, serverStamp } from "../firebase/firebase";

function CheckOut() {
  const { cart, totalPrice } = useContext(cartContext);
  const [userInfo, setUserInfo] = useState({});
  const [orderId, setOrderId] = useState();

  const handleChange = (e) => {
    console.log(e);
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const db = getFirestore();
    let ordersRef = db.collection("orders");
    const date = serverStamp.now();
    const total = totalPrice();
    ordersRef
      .add({ ...userInfo, cart, total, date })
      .then(({ id }) => {
        console.log("id del documento", id);
        setOrderId(id);
        e.target.reset();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <section className="container alert alert-light">
        <form className="row mx-md-2" onSubmit={handleSubmit}>
          <div className="col-6">
            <label htmlFor="nombre" className="form-label">
              Nombre:
            </label>
            <input type="text" name="nombre" required className="form-control" onChange={handleChange} />
          </div>
          <div className="col-6">
            <label htmlFor="telefono" className="form-label">
              Teléfono:
            </label>
            <input type="tel" name="telefono" required className="form-control" onChange={handleChange} />
          </div>
          <div className="col">
            <label htmlFor="correo" className="form-label">
              Correo electrónico:
            </label>
            <input type="email" name="correo" placeholder="usuario@dominio.com" required className="form-control" onChange={handleChange} />
          </div>
          <div className="text-center">
            <hr />
            <input type="submit" className="btn btn-success btn-sm w-100" value="FINALIZAR COMPRA" />
          </div>
        </form>

        {orderId && (
          <div>
            <p>Su numero de orden es {orderId}</p>
          </div>
        )}
      </section>
    </>
  );
}

export default CheckOut;
