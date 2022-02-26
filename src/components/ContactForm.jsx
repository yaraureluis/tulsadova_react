import React from "react";

const ContactForm = ({ handleSubmit, handleReset, handleChange, contactSent }) => {
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
                <input type="reset" onClick={handleReset} className="btn btn-outline-danger me-1" value="Reset" />
                <input type="submit" className="btn btn-outline-primary ms-1" value="Enviar" />
              </div>
            </form>

            {contactSent && (
              <div>
                <p>Su consulta ha sido enviada, será contactado en breve...¡Gracias!</p>
              </div>
            )}
          </div>
          <div className="col-md-6">
            <img src="https://yaraureluis.github.io/tusaldoVA/assets/imagenes/abrazo.jpg" alt="Personas abrazadas emotivamente" width="100%" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
