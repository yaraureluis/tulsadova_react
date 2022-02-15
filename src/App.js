import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from "./components/Contacto";
import Cart from "./components/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import CheckOut from "./components/CheckOut";
import CarouselSection from "./components/CarouselSection";
import Spacer from "./components/Spacer";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <CarouselSection />
              <Spacer texto="PLANES DISPONIBLES" />
              <ItemListContainer />
            </Route>
            <Route path="/categoria/:id_categoria">
              <ItemListContainer />
            </Route>
            <Route path="/operadora/:id_operadora">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/planes">
              <ItemListContainer />
            </Route>
            <Route exact path="/contacto">
              <Contacto />
            </Route>
            <Route exact path="/preguntas">
              <CheckOut />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
