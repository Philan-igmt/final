import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
// import Aos from "aos";
import "aos/dist/aos.css";

import "./App.css";
import Nav from "./nav/Nav";
import Home from "./home/Home";
import Cart from "./Cart/Cart";
import Products from "./products/Products";
import About from "./about/About";
import { ProductProvider } from "./ProductContext";

const App = () => {
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });
  return (
    <ProductProvider>
      <div className="App">
        <Nav />
        <Home />
        <About />
        <Cart />
        <Products />
      </div>
    </ProductProvider>
  );
};

export default App;
