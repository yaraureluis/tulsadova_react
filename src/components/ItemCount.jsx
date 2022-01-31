import React, { useState } from "react";
import { Button, InputGroup, FormControl, Col, Row } from "react-bootstrap";

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
      <Row className=" justify-content-center px-2">
        <Col xs={5} className="px-1">
          <InputGroup className="w-100 mx-auto">
            <Button size="sm" variant="outline-secondary" id="btn-resta" onClick={() => count > inicia && setCount(count - 1)}>
              -
            </Button>
            <FormControl size="sm" aria-label="Example text with button addon" aria-describedby="basic-addon1" placeholder={count} className="text-center bg-white" disabled />
            <Button size="sm" variant="outline-secondary" id="btn-suma" onClick={() => count < stock && setCount(count + 1)}>
              +
            </Button>
          </InputGroup>
        </Col>
        <Col className="px-1">
          <Button className={`${inactivo} w-100 `} size="sm" variant="outline-secondary" id="btn-agregar" onClick={() => onAdd(count)}>
            {textoBtnAgregarProd}
          </Button>
        </Col>
      </Row>
    </>
  );
}
export default ItemCount;
