import React from "react";
import { Row, Col, Figure, Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ItemCount from "./ItemCount.jsx";

export default function ItemDetail({ prop, onAdd, ocultarContador }) {
  return (
    <>
      <h1>Planes {prop.operadora}</h1>
      <Row>
        <Col sm={6} lg={8}>
          <Figure>
            <Figure.Image width="100%" alt="171x180" src={prop.imagen} />
            <Figure.Caption>Planes {prop.operadora} vigentes desde el 20/01/2022</Figure.Caption>
          </Figure>
        </Col>
        <Col sm={6} lg={4}>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Text>
                <img src={prop.logo} height={"50px"} />
              </Card.Text>
              <Card.Text>
                <strong>Tipo de servicio:</strong> {prop.categoria}
              </Card.Text>
              <Card.Text>
                <strong>Recarga mínima:</strong> {prop.min_pesos}Ars.
              </Card.Text>
              <Card.Text>
                <strong>Recarga máxima:</strong> {prop.max_pesos}Ars.
              </Card.Text>

              <Card.Text>
                <h4>PRECIOS</h4>
                <ListGroup>
                  {prop.planes.map((plan) => {
                    return (
                      <ListGroup.Item action>
                        <strong>
                          Plan {plan.plan}:<span className="text-primary"> {plan.precio_pesos}Ars</span>
                        </strong>
                        → Recibe {plan.precio_bs}Bs.
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Card.Text>
              <Card.Text style={{ textAlign: "justify" }}>
                Selecciona el plan que necesites, recuerda que el pago se realiza siempre en <strong>PESOS ARGENTINOS.</strong>
              </Card.Text>
              <Card.Text style={{ textAlign: "justify" }}>
                <strong>Stock disponible: </strong>
                {prop.stock}
              </Card.Text>
              <div className="d-grid gap-2, text-center">
                {ocultarContador ? (
                  <ItemCount stock={prop.stock} inicia="1" onAdd={onAdd} />
                ) : (
                  <Link to="/cart">
                    <Button variant="primary" className="mt-3 w-100">
                      Ir al carrito
                    </Button>
                  </Link>
                )}
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: "100%", marginTop: "15px" }}>
            <Card.Body>
              <h6>IMPORTANTE</h6>
              <Card.Text style={{ fontSize: "12px", textAlign: "justify" }}>
                Su recarga será procesada de forma automática al realizar el pago, recibirá un comprobante de recarga con un código generado por la operadora. Si tiene dudas pudede acceder a nuestra sección <a href="#preguntas"> preguntas frecuentes.</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
