import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

const MyForm = (props) => {
  const { values, handleChange, handleBlur, handleSubmit, handleReset } = props;
  return (
    <>
      <section className="container">
        <div className="row my-3">
          <h3>Comunícate con nosotros</h3>
          <div className="col">
            <form onSubmit={handleSubmit}>
              <label htmlFor="nombre" className="form-label">
                Nombre y Apellido:
              </label>
              <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.nombre} name="nombre" required className="form-control" />
              <label htmlFor="correo" className="form-label">
                Correo electrónico:
              </label>
              <input type="email" onChange={handleChange} onBlur={handleBlur} value={values.correo} name="correo" placeholder="usuario@dominio.com" required className="form-control" />
              <label htmlFor="telefono" className="form-label">
                Número de teléfono:
              </label>
              <input type="tel" onChange={handleChange} onBlur={handleBlur} value={values.telefono} name="telefono" placeholder="11-12345678" required className="form-control" />
              <label htmlFor="seleccion" className="form-label">
                ¿Qué tienes en mente?:
              </label>
              <select onChange={handleChange} onBlur={handleBlur} value={values.seleccion} name="seleccion" required className="form-select">
                <option value="" hidden>
                  Seleccionar
                </option>
                <option value="Recargar">Recargar</option>
                <option value="Aliado">Ser aliado comercial</option>
              </select>
              <label htmlFor="caja" className="form-label">
                Cuéntanos mas:
              </label>
              <textarea rows="6" cols="40" onChange={handleChange} onBlur={handleBlur} value={values.caja} name="caja" className="form-control mb-2"></textarea>
              <div>
                <input type="reset" onClick={handleReset} className="btn btn-outline-danger me-1" value="Reset" />
                <input type="submit" className="btn btn-outline-primary ms-1" value="Enviar" />
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <img src="https://yaraureluis.github.io/tusaldoVA/assets/imagenes/abrazo.jpg" alt="Personas abrazadas emotivamente" />
          </div>
        </div>
      </section>
    </>
  );
};

const Contacto = withFormik({
  mapPropsToValues: () => ({ nombre: "", correo: "", telefono: "", seleccion: "", caja: "" }),

  validationSchema: Yup.object().shape({
    nombre: Yup.string().min(5),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm",
})(MyForm);

export default Contacto;
