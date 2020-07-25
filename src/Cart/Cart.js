import React, { Component } from "react";
import { ProductContext } from "../ProductContext";
import { Link } from "react-router-dom";
import { MdRemoveShoppingCart } from "react-icons/md";
import "./Cart.css";
export class Cart extends Component {
  static contextType = ProductContext;

  componentDidMount() {
    this.context.addTotal();
  }

  render() {
    const { cart, total, add, minus, removeItem } = this.context;
    if (cart.length === 0) {
      return (
        <div>
          <div className="aboutdiv">
            <h3 className="thisabout center">Cart</h3>
          </div>
          <h3 className="center">
            the cart is empty <MdRemoveShoppingCart color="red" size="4rem" />
          </h3>
          <Link to="/products">
            <button className="cartbtn">go back to shop</button>{" "}
          </Link>
        </div>
      );
    } else {
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
                <p>R{product.prize * product.count}</p>
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
            <h5>TOTAL:R{total}</h5>
            <button>pay</button>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
