import React, { useState, useEffect, useContext } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./Nav.css";
import { FaOpencart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FaShopify } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
// import Register from "../register/Register";
// import Products from "../products/Products";
import { ProductContext } from "../ProductContext";

const Nav = () => {
  const cart = useContext(ProductContext);

  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });

  const [log, setLog] = useState(false);
  return (
    <nav>
      <div className="nav-wrapper container black">
        <Link to="/" className="brand-logo ">
          <span>Books</span>
          <span className="library">Library</span>
        </Link>
        <a
          to="#"
          className="sidenav-trigger show-on-med-and-down"
          data-target="slide-out"
        >
          <i className="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down ">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Shop</Link>
          </li>
          <li>
            <Link className="modal-trigger" to="#modal1">
              {log ? (
                <div>
                  <span>logout</span>
                  <span className="btn btn-floating green">PS</span>
                </div>
              ) : (
                <span>login</span>
              )}
            </Link>
          </li>
          <li>
            <Link className="modal-trigger" to="#modal1">
              {log ? <span></span> : <span>Register</span>}
            </Link>
          </li>
          <li>
            <Link
              className="tooltipped"
              data-position="bottom"
              data-tooltip="cart"
              to="/cart"
            >
              cart
              <FaOpencart size="2rem" color="white" />
              <sup
                style={{ padding: "5px", borderRadius: "50%" }}
                className="new red badge"
              >
                {cart.length}
              </sup>
            </Link>
          </li>
        </ul>
      </div>

      {/* side nav */}
      <ul id="slide-out" className="sidenav">
        <li className="">
          <Link to="sass.html">
            <FaHome size="2rem" color="black" />
            Home
          </Link>
        </li>
        <li>
          <Link to="badges.html">
            <FaInfo size="2rem" color="black" />
            About
          </Link>
        </li>
        <li>
          <Link to="collapsible.html">
            <FaShopify size="2rem" color="black" />
            Shop
          </Link>
        </li>
        <li>
          <Link to="collapsible.html">
            {log ? (
              <span>
                <FaPowerOff size="2rem" color="black" />
                logout
              </span>
            ) : (
              <span>
                <FiLogIn size="2rem" color="black" />
                login
              </span>
            )}
          </Link>
        </li>
        <li>
          <a className="modal-trigger" href="#modal1">
            {log ? (
              <span></span>
            ) : (
              <span>
                <FiEdit size="2rem" color="black" />
                Register
              </span>
            )}
          </a>
        </li>
        <li>
          <Link
            className="tooltipped"
            data-position="bottom"
            data-tooltip="cart"
            to="/cart"
          >
            <FaOpencart size="2rem" color="black" />
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
