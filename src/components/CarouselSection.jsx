import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselSection() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://yaraureluis.github.io/tusaldoVA/assets/imagenes/prueba.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://yaraureluis.github.io/tusaldoVA/assets/imagenes/prueba2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://yaraureluis.github.io/tusaldoVA/assets/imagenes/prueba3.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;
