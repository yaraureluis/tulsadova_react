import React, { useState } from "react";
import { Button, InputGroup, FormControl, Container, Col, Row } from "react-bootstrap";

function ItemCount({ stock, inicia, onAdd }) {
  let inactivo;
  let textoBtnAgregarProd = "Agregar al carrito";
  if (stock <= 0) {
    inicia = 0;
    inactivo = "disabled";
    textoBtnAgregarProd = "Producto sin stock";
  }

  const [count, setCount] = useState(+inicia);

  return (
    <>
      <Container className="text-center m-4" fluid="sm">
        <Row className=" justify-content-center">
          <Col xs={3}>
            <InputGroup className="mb-3">
              <Button size="sm" variant="outline-secondary" id="btn-resta" onClick={() => count > inicia && setCount(count - 1)}>
                -
              </Button>
              <FormControl size="sm" aria-label="Example text with button addon" aria-describedby="basic-addon1" placeholder={count} className="text-center bg-white" disabled />
              <Button size="sm" variant="outline-secondary" id="btn-suma" onClick={() => count < stock && setCount(count + 1)}>
                +
              </Button>
            </InputGroup>
            <Button className={inactivo} size="sm" variant="outline-secondary" id="btn-agregar" onClick={() => onAdd(count)}>
              {textoBtnAgregarProd}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default ItemCount;
