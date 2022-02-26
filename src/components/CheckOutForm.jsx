import React from "react";
import MyModal from "./MyModal";

function CheckOutForm({ handleSubmit, handleChange, orderId, show, handleShow, handleClose }) {
  return (
    <>
      <section className="container alert alert-light">
        <form className="row mx-md-2" onSubmit={handleSubmit}>
          <div className="col-6">
            <label htmlFor="nombre" className="form-label">
              Nombre:
            </label>
            <input type="text" name="nombre" className="form-control" onChange={handleChange} required />
          </div>
          <div className="col-6">
            <label htmlFor="telefono" className="form-label">
              Teléfono:
            </label>
            <input type="tel" name="telefono" className="form-control" onChange={handleChange} required />
          </div>
          <div className="col">
            <label htmlFor="correo" className="form-label">
              Correo electrónico:
            </label>
            <input type="email" name="correo" placeholder="usuario@dominio.com" className="form-control" onChange={handleChange} required />
          </div>
          <div className="text-center">
            <hr />
            <input type="submit" className="btn btn-success btn-sm w-100" value="FINALIZAR COMPRA" />
          </div>
        </form>

        {orderId && (
          <>
            <MyModal handleClose={handleClose} handleShow={handleShow} show={show} orderId={orderId} />
          </>
        )}
      </section>
    </>
  );
}

export default CheckOutForm;
