import React, { useContext } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { cartContext } from "./CartContext";

function NavBar() {
  const { cart } = useContext(cartContext);

  return (
    <>
      <Navbar style={{ backgroundColor: "#16254f", borderBottom: "3px solid orange" }} expand="lg" variant={"dark"}>
        <Container>
          <Navbar.Brand>
            <NavLink activeClassName="linkActivo" className="linkPropio" to="/">
              <img src="/imagenes/logo_blanco.svg" alt="logo_marca" height={"40px"} />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink activeClassName="linkActivo" className="linkPropio paddingNav" to="/preguntas">
                Preguntas Frecuentes
              </NavLink>
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink activeClassName="linkActivo" className="linkPropio" to="/categoria/telefonia">
                    Telefonia
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink activeClassName="linkActivo" className="linkPropio" to="/categoria/television">
                    Televisión
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink activeClassName="linkActivo" className="linkPropio" exact to="/categoria/todas">
                    Ver todas
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Operadoras" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink activeClassName="linkActivo" className="linkPropio" to="/operadora/digitel">
                    Digitel
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink activeClassName="linkActivo" className="linkPropio" to="/operadora/movistar">
                    Movistar
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink activeClassName="linkActivo" className="linkPropio" exact to="/operadora/movilnet">
                    Movilnet
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink activeClassName="linkActivo" className="linkPropio" to="/operadora/inter">
                    Inter
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink activeClassName="linkActivo" className="linkPropio" to="/operadora/simple_tv">
                    Simple TV
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink activeClassName="linkActivo" className="linkPropio" exact to="/operadora/movistar_tv">
                    Movistar TV
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink activeClassName="linkActivo" className="linkPropio paddingNav" to="/contacto">
                Contacto
              </NavLink>
            </Nav>
            <Nav>
              <NavLink activeClassName="linkActivo" className="linkPropio paddingNav" to="/carrito">
                {cart.length > 0 && <CartWidget />}
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
