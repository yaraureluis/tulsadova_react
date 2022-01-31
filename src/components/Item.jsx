import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Item({ prop }) {
  return (
    <>
      <Col>
        <Card sm="4" className="text-center">
          <Link to={`/operadora/${prop.id_operadora}`}>
            <Card.Img variant="top" src={prop.logo} style={{ maxHeight: "35px" }} className="mt-3" />
          </Link>
          <Card.Body>
            <Card.Title>{prop.operadora}</Card.Title>
            <Card.Text>
              <strong>Precio:</strong> {prop.min_pesos} Ars.
            </Card.Text>
            <Card.Text>
              <strong>Stock:</strong> {prop.stock}
            </Card.Text>
            <Link to={`/operadora/${prop.id_operadora}`}>
              <Button size="sm" variant="outline-primary" className="mt-2 w-100">
                Ver más planes {prop.operadora}
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
