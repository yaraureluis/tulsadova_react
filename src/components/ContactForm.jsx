import React from "react";
import ContactModal from "./ContactModal";

function ContactForm({ handleSubmit, handleReset, handleChange, contactSent, show }) {
  return (
    <>
      <section className="container">
        <div className="row my-3">
          <h3>Comunícate con nosotros</h3>
          <div className="col mb-2">
            <form onSubmit={handleSubmit}>
              <label htmlFor="nombre" className="form-label">
                Nombre y Apellido:
              </label>
              <input type="text" onChange={handleChange} name="nombre" required className="form-control" />
              <label htmlFor="correo" className="form-label">
                Correo electrónico:
              </label>
              <input type="email" onChange={handleChange} name="correo" placeholder="usuario@dominio.com" required className="form-control" />
              <label htmlFor="telefono" className="form-label">
                Número de teléfono:
              </label>
              <input type="tel" onChange={handleChange} name="telefono" placeholder="11-12345678" required className="form-control" />
              <label htmlFor="seleccion" className="form-label">
                ¿Qué tienes en mente?:
              </label>
              <select onChange={handleChange} name="seleccion" required className="form-select">
                <option value="" hidden>
                  Seleccionar
                </option>
                <option value="Recargar">Recargar</option>
                <option value="Aliado">Ser aliado comercial</option>
              </select>
              <label htmlFor="caja" className="form-label">
                Cuéntanos mas:
              </label>
              <textarea rows="6" cols="40" onChange={handleChange} name="caja" className="form-control mb-2"></textarea>
              <div>
                <button type="reset" onClick={handleReset} className="btn btn-outline-danger me-1">
                  Reset
                </button>
                <button type="submit" className="btn btn-outline-primary ms-1" id="btn_enviar">
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <img src="/imagenes/abrazo.jpg" alt="Personas abrazadas emotivamente" width="100%" />
          </div>
        </div>

        {contactSent && <ContactModal show={show} />}
      </section>
    </>
  );
}

export default ContactForm;
