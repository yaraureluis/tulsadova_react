import React from "react";
import { Row, Col } from "react-bootstrap";

function PaymentMethods() {
  return (
    <>
      <Row className="w-75 mx-auto mb-4">
        <Col md={6}>
          <div className=" mx-auto mb-2 text-center bg-white container rounded" style={{ borderBottom: "solid 3px orange" }}>
            <p className="m-0 py-1 text-primary">Transferencia bancaria</p>
          </div>
          <div>
            <iframe className="rounded" width="100%" height="400" src="https://www.youtube.com/embed/x2Sl0kvF95w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Col>
        <Col md={6}>
          <div className=" mx-auto mb-2 text-center bg-white container rounded" style={{ borderBottom: "solid 3px orange" }}>
            <p className="m-0 py-1 text-primary">Mercadopago</p>
          </div>
          <div>
            <iframe className="rounded" width="100%" height="400" src="https://www.youtube.com/embed/o8F8nD3G4ro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default PaymentMethods;
