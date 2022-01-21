import React from "react";
import { Row } from "react-bootstrap";
import Item from "./Item";
export default function ItemList({ items }) {
  return (
    <>
      <Row xs={1} md={2} lg={4} className="g-4 m-4">
        {items.map((item) => {
          return <Item id="01" title={item.title} price={item.price} pictureUrl={item.pictureUrl} stock={item.stock} origen={item.origen} />;
        })}
      </Row>
    </>
  );
}
