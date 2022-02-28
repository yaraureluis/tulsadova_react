import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer margenFooter">
        <Row className="py-2 mx-0 px-5 fondoFooter ">
          <Col md={4} className="mt-3 ">
            <Link className="linkPropio" to="/">
              <img src="https://yaraureluis.github.io/tusaldoVA/assets/imagenes/logo_blanco.svg" alt="logo_marca" height={"40px"} />
            </Link>
          </Col>
          <Col md={4} className="mt-3 ps-md-5">
            <ul className="text-muted py-0 ms-0">
              <Link to="/" className="linkFooter">
                <li>Inicio</li>
              </Link>
              <Link to="/preguntas" className="linkFooter">
                <li>Preguntas frecuentes</li>
              </Link>
              <Link to="categoria/todas" className="linkFooter">
                <li>Categorias</li>
              </Link>

              <Link to="/contacto" className="linkFooter">
                <li>Contacto</li>
              </Link>
            </ul>
          </Col>
          <Col md={4} className="text-white mt-1 ps-md-5">
            <ul>
              <li>
                <h5>Contacto</h5>
              </li>
              <li>
                <i className="bi bi-whatsapp"></i> +54 9 11 2397-2723
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i> tusaldova@gmail.com
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i> Almagro, C.A.B.A - Argentina
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="py-1 px-5 bg-light mx-0">
          <Col md={6} className="text-md-start text-center">
            <span className="text-muted small">Copyright © 2021 Tu Saldo VA - Todos los derechos reservados</span>
          </Col>
          <Col md={6} className="text-md-end text-center">
            <span className="text-muted small ">
              Sitio web desarrollado por:{" "}
              <a href="https://github.com/yaraureluis" target="_blank" rel="noopener noreferrer">
                Luis Yaraure
              </a>
            </span>
          </Col>
        </Row>
      </footer>
    </>
  );
}

export default Footer;
