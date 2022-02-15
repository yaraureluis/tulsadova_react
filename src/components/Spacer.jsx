import React from "react";
import { Alert } from "react-bootstrap";

function Spacer({ texto }) {
  return (
    <Alert className="mt-5 text-center" variant="light">
      <h3 className="azulOscuro">{texto}</h3>
    </Alert>
  );
}

export default Spacer;
