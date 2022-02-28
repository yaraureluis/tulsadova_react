import React from "react";
import { Accordion, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Questions() {
  return (
    <>
      <Container className="altoContenido">
        <Row className="mb-4">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <strong className="azulOscuro">¿Cómo recargo?</strong>
              </Accordion.Header>
              <Accordion.Body>
                <ol>
                  <li>
                    Selecciona uno o más <Link to="planes.html">planes</Link> disponibles.
                  </li>
                  <li>
                    Comunícate a través de Whatsapp o por la opción <Link to="/contacto">contacto</Link> de nuestra página web, para ser atendido por nuestro equipo.
                  </li>
                  <li>Elije el medio de pago de tu preferencia; sea por transferencia bancaria o Mercadopago (opción eviar dinero).</li>
                  <li>Realiza el pago e informa el mismo enviando una caputra de pantalla del comprobante junto con el número de teléfono o servicio a recargar.</li>
                  <li>Listo, tu recarga será realizada en los próximos minutos y recibirás un comprobante de la misma.</li>
                </ol>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <strong className="azulOscuro">¿Cuáles son los métodos de pago?</strong>
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Transferencia Bancaria: <Link to="contacto.html">comunícate</Link> con nostros para saber con que bancos trabajamos.
                  </li>
                  <li>Mercadopago: a través de la opción "enviar dinero".</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <strong className="azulOscuro">¿Puedo pagar en efectivo?</strong>
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Es posible, siempre que te encuentres en el área de atención "face to face", puedes conocer las zonas disponibles haciendo clic <Link to="contacto.html"> aquí.</Link>
                  </li>
                  <li>Siempre recomendamos utilizar los canales virtuales, pagar por transferencia bancaria o mercadopago, sin embargo, esta alternativa puede ser utilizada a conveniencia de las partes, sin que sea una obligación para "Tu Saldo VA" estar disponible en todo momento.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <strong className="azulOscuro">¿Cuánto tarda la recarga?</strong>
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>El tiempo promedio es 5min en condiciones habituales.</li>
                  <li>De existir algun retraso será informado en todas nuestras redes sociales.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
    </>
  );
}

export default Questions;
