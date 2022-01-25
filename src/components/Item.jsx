import React from "react";
import { Card, Col } from "react-bootstrap";
import ItemCount from "./ItemCount.jsx";

export default function Item({ id, title, precio, pictureUrl, stock }) {
  const onAdd = (cantidad) => alert("Se agregaron " + cantidad + " items al carrito.");
  return (
    <>
      <Col>
        <Card sm="4" className="text-center">
          <Card.Img variant="top" src={pictureUrl} id={id} style={{ maxHeight: "35px" }} className="mt-3" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <strong>Precio:</strong> {precio}Ars.
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
