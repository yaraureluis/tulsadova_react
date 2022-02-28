import React, { useContext } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cartContext } from "./CartContext";

function ContactModal({ show }) {
  const { clearCart } = useContext(cartContext);
  return (
    <>
      <Modal show={show}>
        <Modal.Body>
          <Card className="text-center py-3">
            <Card.Img variant="top" src=".\imagenes\message_icon.png" style={{ width: "100px", height: "100px" }} className="mx-auto" />
            <Card.Body>
              <Card.Title> ¡Muchas gracias por su consulta! </Card.Title>
              <Card.Text>
                <small>Será contactado en breve </small>
              </Card.Text>
              <Link to="/">
                <Button className="w-100" variant="danger" onClick={clearCart}>
                  <span className="bi bi-x-circle"> Cerrar</span>
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactModal;
