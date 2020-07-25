import React, { Component } from "react";
import { ProductContext } from "../ProductContext";
import { FaOpencart } from "react-icons/fa";

export class Products extends Component {
  static contextType = ProductContext;

  render() {
    const { products } = this.context;
    return (
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="card" style={{ width: "300px" }}>
            <div className="card-image">
              <img
                src={product.image}
                style={{ width: "100%", height: "200px" }}
              />
              <span className="card-title">{product.name}</span>
            </div>
            <div className="card-content">
              <p>{product.prize}</p>
            </div>
            <div>
              <button
                onClick={() => this.context.addCart(product.id)}
                className="btn"
              >
                add to cart <FaOpencart size="2rem" color="white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
