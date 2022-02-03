import React, { useContext } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { cartContext } from "./CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { cart, setCart } = useContext(cartContext);
  return (
    <>
      {cart.length ? (
        <Container className="w-70">
          <h2>Articulos en el Carrito</h2>
          {cart.map((item) => (
            <CartItem key={item.detalles.id_operadora} producto={item} />
          ))}

          <Row className=" my-3">
            <Col md={4}>
              {/* ##############      VACIAR EL CARRITO ################ */}
              <Button onClick={() => setCart([])} variant="danger" size="sm">
                Vaciar carrito
              </Button>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <Link to="/">
                <Button variant="primary" size="sm">
                  Seleccionar más planes
                </Button>
              </Link>{" "}
              <Button variant="success" size="sm" onClick={() => alert("Compra exitosa!")}>
                Realizar compra
              </Button>{" "}
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
