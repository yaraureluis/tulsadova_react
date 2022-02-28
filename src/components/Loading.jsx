import React from "react";
import { Spinner, Container } from "react-bootstrap";

function Loading() {
  return (
    <>
      <Container className="text-center" style={{ height: "80vh", display: "flex", alignItems: "center" }}>
        <div className="mx-auto">
          <Spinner animation="border" variant="warning" />
          <span className="display-6"> LOADING...</span>
        </div>
      </Container>
    </>
  );
}
export default Loading;
