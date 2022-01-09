import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Tu Saldo VA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Preguntas Frecuentes</Nav.Link>
              <NavDropdown title="Planes" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Telefonia</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Televisión</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">
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
