import React, { useContext } from "react";
import { cartContext } from "./CartContext";
import { Col, Row, Card, Button } from "react-bootstrap";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

function CartItem({ producto }) {
  const { deleteItem } = useContext(cartContext);

  return (
    <>
      <Card className="border-light mb-2 py-2">
        <Row className="px-2">
          <Col sm={4} style={{ display: "flex", alignItems: "center" }}>
            <Card.Img variant="top" src={producto.detalles.logo} alt={`Imagen ${producto.detalles.operadora}`} style={{ maxHeight: "40px" }} />
          </Col>
          <Col sm={8}>
            <Card.Body className="py-1">
              <Card.Text className="mb-1">
                <strong>Operadora: </strong> {producto.detalles.operadora}
              </Card.Text>
              <Card.Text className="mb-1">
                <strong>Cantidad:</strong> {producto.cantidad}
              </Card.Text>
              <Card.Text className="mb-1">
                <strong>Precio:</strong> ${producto.detalles.min_pesos}
              </Card.Text>
              <Card.Text className="text-primary mb-1">
                <strong>Subtotal: ${producto.subtotal} </strong>
              </Card.Text>
              <Button variant="outline-danger" size="sm" onClick={() => deleteItem(producto.detalles.id_operadora)}>
                <span className="bi bi-trash"> Quitar del carrito</span>
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default CartItem;
