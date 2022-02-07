import React, { useContext } from "react";
import { Button, Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { cartContext } from "./CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { cart, clearCart, totalPrice } = useContext(cartContext);
  return (
    <>
      {cart.length ? (
        <Container className="w-70">
          <h2>Articulos en el Carrito</h2>
          {cart.map((item) => (
            <CartItem key={item.detalles.id_operadora} producto={item} />
          ))}
          {/* ##### TOTAL DE LA COMPRA ###### */}
          <Alert variant="success">
            <Row>
              <Col xs="12" sm="8">
                <Alert.Heading>Total planes: {totalPrice()}Ars.</Alert.Heading>
              </Col>
              <Col xs="12" sm="4" className="d-flex justify-content-sm-end">
                <Button className="" variant="success" size="sm" onClick={() => alert("Compra exitosa!")}>
                  Realizar compra
                </Button>
              </Col>
            </Row>
          </Alert>
          <Row className=" my-3 justify-content-end">
            <Col xs="12" md="3" className="px-1">
              {/* ##############      VACIAR EL CARRITO ################ */}
              <Button onClick={() => clearCart()} variant="outline-primary" size="sm" className="w-100">
                Vaciar carrito
              </Button>
            </Col>
            <Col xs="12" md="3" className="px-1">
              <Link to="/">
                <Button variant="outline-primary" size="sm" className="w-100">
                  Seleccionar más planes
                </Button>
              </Link>
            </Col>
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
