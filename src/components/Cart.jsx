import React, { useContext, useState } from "react";
import { Button, Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { cartContext } from "./CartContext";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";

function Cart() {
  const { cart, clearCart, totalPrice } = useContext(cartContext);
  const [checkOut, setCheckOut] = useState(false);

  return (
    <>
      {cart.length ? (
        <Container className="w-70 py-2 mt-2" style={{ marginBottom: "100px" }}>
          <Row>
            <Col>
              <h3>Planes seleccionados</h3>
              <Row>
                <Col xs="12">
                  {cart.map((item) => (
                    <CartItem key={item.detalles.id_operadora} producto={item} />
                  ))}
                </Col>
                <Col className="text-center text-md-end mb-2">
                  {/* ##############      VACIAR EL CARRITO ################ */}
                  <Button onClick={() => clearCart()} variant="outline-primary" size="sm" className="m-1">
                    Vaciar carrito
                  </Button>

                  <Link to="/categoria/todas">
                    <Button variant="outline-primary" size="sm" className="m-1">
                      Seleccionar más planes
                    </Button>
                  </Link>
                </Col>
              </Row>
              {/* ##### TOTAL DE LA COMPRA ###### */}
              <Col>
                <Alert variant="success">
                  <Row>
                    <Col xs="12" sm="8" className="text-center text-md-start">
                      <Alert.Heading>Total planes: {totalPrice()}Ars.</Alert.Heading>
                    </Col>
                    <Col xs="12" sm="4" className="text-center text-md-end">
                      {!checkOut && (
                        <Button className="" variant="success" size="sm" onClick={() => setCheckOut(true)}>
                          Confirmar pedido
                        </Button>
                      )}
                    </Col>
                  </Row>
                </Alert>
              </Col>
            </Col>
            {checkOut && (
              <Col md="6">
                <h3>Finaliza tu compra</h3>
                <CheckOut />
              </Col>
            )}
          </Row>
        </Container>
      ) : (
        <Container className="text-center  mt-4" style={{ height: "100vh" }}>
          <h2>Carrito vacio</h2>
          <Link to="/">
            <Button size="sm" variant="warning">
              Volver a comprar!
            </Button>
          </Link>
        </Container>
      )}
    </>
  );
}

export default Cart;
