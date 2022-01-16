import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import ItemListContainer from "./components/ItemListContainer";

// import EjemploPromesa from "./components/EjemploPromesa";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />

      {/* <EjemploPromesa /> */}
    </>
  );
}

export default App;
