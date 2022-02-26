import React, { useState, useEffect } from "react";
import { getFirestore, serverStamp } from "../firebase/firebase";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [userContact, setUserContact] = useState({});
  const [contactSent, setContactSent] = useState(false);

  const handleChange = (e) => {
    console.log(e);
    setUserContact({
      ...userContact,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const db = getFirestore();
    let ordersRef = db.collection("usersContacts");
    const date = serverStamp.now();
    ordersRef
      .add({ ...userContact, date })
      .then(({ id }) => {
        console.log("id de la consulta", id);
        setContactSent(true);
        e.target.reset();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleReset = () => {
    setUserContact({});
  };

  useEffect(() => {
    console.log("despues de borrar", userContact);
  }, [userContact]);
  return (
    <>
      <ContactForm handleSubmit={handleSubmit} handleReset={handleReset} handleChange={handleChange} contactSent={contactSent} />
    </>
  );
};

export default Contact;
