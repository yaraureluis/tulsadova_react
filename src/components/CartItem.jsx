import React, { useContext } from "react";
import { cartContext } from "./CartContext";
import { Col, Row, Card, Button } from "react-bootstrap";

export default function CartItem({ producto }) {
  const { deleteItem } = useContext(cartContext);

  return (
    <>
      <Card className="my-2">
        <Row className="px-2">
          <Col sm={4} style={{ display: "flex", alignItems: "center" }}>
            <Card.Img variant="top" src={producto.detalles.logo} alt={`Imagen ${producto.detalles.operadora}`} style={{ maxHeight: "40px" }} />
          </Col>
          <Col sm={8}>
            <Card.Body>
              <Card.Text>
                <strong>Operadora: </strong> {producto.detalles.operadora}
              </Card.Text>
              <Card.Text>
                <strong>Cantidad:</strong> {producto.cantidad}
              </Card.Text>
              <Card.Text>
                <strong>Precio:</strong> ${producto.detalles.min_pesos}
              </Card.Text>
              <Button variant="primary" size="sm" onClick={() => deleteItem(producto.detalles.id_operadora)}>
                Quitar del carrito
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}
