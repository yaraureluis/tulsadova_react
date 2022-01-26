import React from "react";
import { Row, Col, Figure, Card, Button, ListGroup } from "react-bootstrap";
import ItemCount from "./ItemCount.jsx";

export default function ItemDetail({ operadora, logo, imagen, min, max, planes, tipo, stock }) {
  const onAdd = (cantidad) => alert("Se agregaron " + cantidad + " items al carrito.");
  return (
    <>
      <h1>Planes Telefonía</h1>
      <Row>
        <Col sm={6} lg={8}>
          <Figure>
            <Figure.Image width="100%" alt="171x180" src={imagen} />
            <Figure.Caption>Planes {operadora} Vigentes desde el 20/01/2022</Figure.Caption>
          </Figure>
        </Col>
        <Col sm={6} lg={4}>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <img src={logo} height={"50px"} />
              <Card.Text>
                <strong>Tipo de servicio:</strong> {tipo}
              </Card.Text>
              <Card.Text>
                <strong>Recarga mínima:</strong> {min}Ars.
              </Card.Text>
              <Card.Text>
                <strong>Recarga máxima:</strong> {max}Ars.
              </Card.Text>

              <Card.Text>
                <h4>PLANES DISPONIBLES</h4>
                <ListGroup defaultActiveKey="">
                  {planes.map((plan) => {
                    return (
                      <ListGroup.Item action href={`#${plan.plan}`}>
                        <strong>{plan.plan}: </strong> envía {plan.precio_pesos}Ars, recibe {plan.precio_bs}Bs.
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
                {stock}
              </Card.Text>
              <div className="d-grid gap-2, text-center">
                <ItemCount stock={stock} inicia="1" onAdd={onAdd} />
                <Button variant="primary" className="mt-3 ">
                  Comprar ahora
                </Button>
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
