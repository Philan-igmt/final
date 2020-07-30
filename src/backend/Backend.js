import React, { useContext } from "react";
import "./Backend.css";
import { ProductContext } from "../ProductContext";

function Backend() {
  const state = useContext(ProductContext);
  const list = state.products.map((item) => (
    <div key={item._id}>
      <li className="grey">name:{item.name}</li>
      <li className="blue">price:R{item.price}</li>
      <li className="red">Image URL:{item.image}</li>
      <li className="green">book id:{item._id}</li>
    </div>
  ));

  return (
    <div className="backend">
      <h2>Hello admin</h2>
      <div className="allbackend center">
        <div className="list">
          <h5>The raw list of all products</h5>
          <ul>{list}</ul>
        </div>
        <div className="addproduct">
          <form>
            <fieldset>
              <legend>add a book</legend>
              <label htmlFor="price">price</label>
              <input type="number" name="price" id="price" />
              <label htmlFor="name">name</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="imageURL">imageURL</label>
              <input type="text" name="imageURL" id="imageURL" />
              <button className="btn green">Add</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Backend;
