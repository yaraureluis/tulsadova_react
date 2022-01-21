import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
function ItemListContainer() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const productos = [
      { id: 1, title: "Manzana", price: "200", pictureUrl: "https://laviejaaldea.com/wp-content/uploads/2020/09/Manzana-deliciosa-300x300.jpg", origen: "Argentina", stock: 16 },
      { id: 1, title: "Pera", price: "180", pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsM7WpVz1vhRW0ZKX8JjEUlrtK3o1Z8AeBZnDXuxIeMnSA0nWUu-H0OBmiCpL03HVGLZM&usqp=CAU", origen: "Argentina", stock: 3 },
      { id: 1, title: "Mango", price: "600", pictureUrl: "https://indicepolitico.com/wp-content/uploads/2021/07/tommymango-300x300-png-1-jpg.jpg", origen: "Colombia", stock: 0 },
      { id: 1, title: "Banana", price: "300", pictureUrl: "https://images-na.ssl-images-amazon.com/images/I/41XbQ%2BZVgxL._SX300_SY300_QL70_ML2_.jpg", origen: "Ecuador", stock: 10 },
    ];
    const promesaProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
    promesaProductos.then((res) => {
      console.log(promesaProductos);
      setProd(res);
    });
    promesaProductos.catch((err) => {
      setProd(err);
    });
  }, []);
  return (
    <>
      <Container fluid="md">
        <ItemList items={prod} />
      </Container>
    </>
  );
}

export default ItemListContainer;
