import React from "react";
import { Card, Col } from "react-bootstrap";
import ItemCount from "./ItemCount.jsx";

export default function Item({ id, title, price, pictureUrl, stock, origen }) {
  const onAdd = (cantidad) => alert("Se agregaron " + cantidad + " items al carrito.");
  return (
    <>
      <Col>
        <Card sm="4" className="text-center">
          <Card.Img variant="top" src={pictureUrl} id={id} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <strong>Precio:</strong> ${price}
            </Card.Text>
            <Card.Text>
              <strong>Origen:</strong> {origen}
            </Card.Text>
            <Card.Text>
              <strong>Stock:</strong> {stock}
            </Card.Text>
            <ItemCount stock={stock} inicia="1" onAdd={onAdd} />
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
