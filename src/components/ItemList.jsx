import React from "react";
import { Row } from "react-bootstrap";
import Item from "./Item";
export default function ItemList({ items }) {
  return (
    <>
      <Row xs={1} md={2} lg={3} className="g-4 mx-4 mb-4 ">
        {items.map((item, i) => {
          return <Item key={i} prop={item} />;
        })}
      </Row>
    </>
  );
}
