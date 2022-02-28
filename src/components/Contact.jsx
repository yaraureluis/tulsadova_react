import React, { useState, useEffect } from "react";
import { getFirestore, serverStamp } from "../firebase/firebase";
import ContactForm from "./ContactForm";

function Contact() {
  const [userContact, setUserContact] = useState({});
  const [contactSent, setContactSent] = useState(false);
  const [show, setShow] = useState(false);

  // Funciones asociadas al modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Funciones asociadas al botón enviar
  const sendingMessage = () => {
    let btn_finalizar = document.getElementById("btn_enviar");
    btn_finalizar.disabled = true;
    btn_finalizar.innerHTML = `<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>`;
  };

  const handleChange = (e) => {
    setUserContact({
      ...userContact,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendingMessage();

    const db = getFirestore();
    let ordersRef = db.collection("usersContacts");
    const date = serverStamp.now();
    ordersRef
      .add({ ...userContact, date })
      .then(({ id }) => {
        setContactSent(true);
        e.target.reset();
        setShow(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleReset = () => {
    setUserContact({});
  };

  useEffect(() => {}, [userContact]);
  return (
    <>
      <ContactForm handleSubmit={handleSubmit} handleReset={handleReset} handleChange={handleChange} contactSent={contactSent} handleClose={handleClose} handleShow={handleShow} show={show} />
    </>
  );
}

export default Contact;
