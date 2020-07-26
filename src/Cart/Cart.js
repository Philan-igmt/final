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
            <h2 className="thisabout center">Cart</h2>
          </div>
          <h3 className="center">
            Cart is empty!!! <MdRemoveShoppingCart color="red" size="4rem" />
          </h3>
          <span className="buttonn">
            <Link to="/products">
              <button className="cartbtn">go back to shop</button>{" "}
            </Link>
          </span>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="aboutdiv">
            <h3 className="thisabout center">Cart</h3>
          </div>
          <div className="form">
            <div className="col s12 m4 offset-m1">
              <fieldset>
                <legend> Bill and delivery information </legend>
                <form action="">
                  <div>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="name">Full Name</label>
                  </div>
                  <div>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="name">Full Name</label>
                  </div>
                  <div>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="name">Full Name</label>
                  </div>
                  <div>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="name">Full Name</label>
                  </div>
                  <div>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="name">Full Name</label>
                  </div>
                  <div>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="name">Full Name</label>
                  </div>
                  <div>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="name">Full Name</label>
                  </div>
                  <div>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="name">Full Name</label>
                  </div>
                </form>
              </fieldset>
            </div>
          </div>

          <div className="col s12 m6 offset-m1">
            <div className="cart">
              {cart.map((product) => (
                <div key={product._id} className="card center">
                  <div className="card-image">
                    <img
                      src={product.image}
                      style={{ width: "100%", height: "200px" }}
                    />
                    <span className="card-title">{product.name}</span>
                  </div>
                  <div className="card-content">
                    <p>R{product.price * product.count}</p>
                  </div>
                  <div className="count">
                    <button
                      className="btn green"
                      onClick={() => minus(product._id)}
                    >
                      -
                    </button>
                    <span className="span">{product.count}</span>
                    <button
                      className="btn count"
                      onClick={() => add(product._id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(product._id)}
                    className="btn delete"
                  >
                    remove item
                  </button>
                </div>
              ))}
            </div>
            <div className="total">
              <h5>TOTAL:R{total}</h5>
              <button className="btn red">pay</button>
              <Link to="/products">
                <button className="btn green">go back to products</button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
