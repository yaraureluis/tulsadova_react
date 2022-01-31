import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/categoria/:id_categoria">
            <ItemListContainer />
          </Route>
          <Route path="/operadora/:id_operadora">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/contacto">
            Contactos
          </Route>
          <Route exact path="/preguntas">
            Seccion Preguntas
          </Route>
          <Route exact path="/carrito">
            Carrito de prueba
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
