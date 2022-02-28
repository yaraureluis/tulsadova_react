import React, { useContext } from "react";
import { Modal, Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cartContext } from "./CartContext";

function OrderModal({ show, orderId }) {
  const { clearCart } = useContext(cartContext);
  return (
    <>
      <Modal show={show}>
        <Modal.Body>
          <Card className="text-center py-3">
            <Card.Img variant="top" src=".\imagenes\success_icon.png" style={{ width: "100px", height: "100px" }} className="mx-auto" />
            <Card.Body>
              <Card.Title> ¡Muchas gracias por su compra! </Card.Title>
              <Card.Text>
                <small>Su recarga será acreditada en breve. Puede hacer seguimiento o consultar el estado de su recarga utilizando el siguiente código. </small>
              </Card.Text>
              <Card.Text className="border border-success rounded">
                <strong>${orderId}</strong>
              </Card.Text>
              <Row className="justify-content-end">
                <Col xs={12} className="mb-1">
                  <a href={`https://wa.me/5491123972723?text=Hola,%20quisiera%20saber%20el%20estado%20de%20mi%20recarga.%20Mi%20Código%20de%20confirmación%20es%20${orderId}`} target="_blank" rel="noopener noreferrer">
                    <Button className="w-100" variant="primary" onClick={clearCart}>
                      <span className="bi bi-whatsapp"> Seguimiento</span>
                    </Button>
                  </a>
                </Col>
                <Col xs={12}>
                  <Link to="/carrito">
                    <Button className="w-100" variant="danger" onClick={clearCart}>
                      <span className="bi bi-x-circle"> Cerrar</span>
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OrderModal;
