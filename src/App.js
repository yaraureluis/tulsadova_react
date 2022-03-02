import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
import CarouselSection from "./components/CarouselSection";
import Spacer from "./components/Spacer";
import PaymentMethods from "./components/PaymentMethods";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <NavBar />
          <Switch>
            <Route exact path="/">
              <CarouselSection />
              <Spacer texto="¿Qué puedes recargar?" />
              <ItemListContainer />
              <Spacer texto="¿Cómo puedo pagar?" />
              <PaymentMethods />
            </Route>
            <Route path="/categoria/:id_categoria">
              <Spacer texto="Planes Disponibles" />
              <ItemListContainer />
            </Route>
            <Route path="/operadora/:id_operadora">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/contacto">
              <Contact />
            </Route>
            <Route exact path="/preguntas">
              <Spacer texto="Preguntas Frecuentes" />
              <Questions />
            </Route>
            <Route exact path="/carrito">
              <Cart />
            </Route>
          </Switch>
          <WhatsAppButton />
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
