import React from "react";
import { Row, Col, Figure, Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ItemCount from "./ItemCount.jsx";

function ItemDetail({ prop, onAdd, ocultarContador }) {
  return (
    <>
      <h2>Planes {prop.operadora}</h2>
      <Row>
        <Col sm={6} lg={8}>
          <Figure>
            <Figure.Image width="100%" alt={`logo ${prop.operadora}`} src={prop.imagen} />
            <Figure.Caption>Planes {prop.operadora} vigentes desde el 20/01/2022</Figure.Caption>
          </Figure>
        </Col>
        <Col sm={6} lg={4}>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Text>
                <img src={prop.logo} height={"50px"} alt={`logo ${prop.operadora}`} />
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

              <h4>PRECIOS</h4>
              <ListGroup>
                {prop.planes.map((plan, i) => {
                  return (
                    <ListGroup.Item action key={i}>
                      <strong>
                        Plan {plan.plan}:<span className="text-primary"> {plan.precio_pesos}Ars</span>
                      </strong>
                      → Recibe {plan.precio_bs}Bs.
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>

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
                  <Link to="/carrito">
                    <Button variant="primary" className="mt-3 w-100">
                      <span className="bi bi-cart-fill"> Ir al carrito</span>
                    </Button>
                  </Link>
                )}
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: "100%", marginTop: "12px" }} className="mb-4">
            <Card.Body>
              <Card.Text style={{ fontSize: "12px", textAlign: "justify", fontWeight: "bold" }} className="mb-1 pb-0">
                VERSIÓN BETA, SOLO DIPONIBLE PLAN BRONCE.
              </Card.Text>
              <Card.Text style={{ fontSize: "12px", textAlign: "justify", borderTop: "solid 1px grey" }} className="mt-1 pt-0">
                Su recarga será procesada de forma automática al realizar el pago, recibirá un comprobante de recarga con un código generado por la operadora. Si tiene dudas pudede acceder a nuestra sección preguntas frecuentes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default ItemDetail;
