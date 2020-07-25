import React, { Component } from "react";
import { ProductContext } from "../ProductContext";
import Products from "../products/Products";

export class Cart extends Component {
  static contextType = ProductContext;

  render() {
    const { cart, add, minus, removeItem } = this.context;

    return (
      <div className="cart">
        {cart.map((product) => (
          <div
            key={product.id}
            className="card center"
            style={{ width: "300px" }}
          >
            <div className="card-image">
              <img
                src={product.image}
                style={{ width: "100%", height: "200px" }}
              />
              <span className="card-title">{product.name}</span>
            </div>
            <div className="card-content">
              <p>R{product.prize}</p>
            </div>
            <div className="count">
              <button className="count" onClick={() => minus(product.id)}>
                -
              </button>
              <span>{product.count}</span>
              <button className="count" onClick={() => add(product.id)}>
                +
              </button>
            </div>
            <button onClick={() => removeItem(product.id)} className="delete">
              remove item
            </button>
          </div>
        ))}
        <div className="total">
          <h5>TOTAL:0</h5>
          <button>pay</button>
        </div>
      </div>
    );
  }
}

export default Cart;
