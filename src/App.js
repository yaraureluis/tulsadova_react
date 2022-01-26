import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
// import EjemploClase from "./components/EjemploClase";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      {/* <EjemploClase /> */}
    </>
  );
}

export default App;
