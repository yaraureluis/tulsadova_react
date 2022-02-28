import React from "react";

function WhatsAppButton() {
  return (
    <>
      <a href="https://wa.me/5491123972723?text=Estoy%20interesado%20en%20recibir%20información%20sobre%20las%20recargas%20hacia%20Venezuela" className="float" target="_blank" rel="noopener noreferrer">
        <picture>
          <source media="(max-width:768px)" srcSet="https://raw.githubusercontent.com/yaraureluis/tusaldoVA/c7dafb7e8bb483e5589dd829706238aa9dc979a9/assets/imagenes/wsBtn2.svg" />
          <img src="https://raw.githubusercontent.com/yaraureluis/tusaldoVA/c7dafb7e8bb483e5589dd829706238aa9dc979a9/assets/imagenes/wsBtn.svg" alt="Enlace hacia Whatsapp" />
        </picture>
      </a>
    </>
  );
}

export default WhatsAppButton;
