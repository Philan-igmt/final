import React, { useState, useContext } from "react";
import { ProductContext } from "../ProductContext";

import Card from "./Card";
import "./Card.css";

const Products = () => {
  const [products, setProducts] = useContext(ProductContext);
  const list = products.map((book) => (
    <div key={book.id}>
      <Card books={book} />
    </div>
  ));
  return (
    <div className="products">
      <div className="aboutdiv">
        <h1 className="thisabout center">Products </h1>
      </div>
      <div className="container">
        <div className="children center">{list}</div>
      </div>
    </div>
  );
};

export default Products;
