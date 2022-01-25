import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#16254f" }} expand="lg" variant={"dark"}>
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img src="https://yaraureluis.github.io/tusaldoVA/assets/imagenes/logo_blanco.svg" alt="logo_marca" height={"40px"} />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#preguntas">Preguntas Frecuentes</Nav.Link>
              <NavDropdown title="Planes" id="basic-nav-dropdown">
                <NavDropdown.Item href="#Telefonia">Telefonia</NavDropdown.Item>
                <NavDropdown.Item href="#Televisión">Televisión</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#carrito">
                <CartWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
