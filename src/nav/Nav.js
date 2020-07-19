import React, { useState, useEffect } from "react";
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
import Register from "../register/Register";

const Nav = () => {
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });

  const [log, setLog] = useState(false);
  return (
    <nav>
      <div className="nav-wrapper container black">
        <a href="#" className="brand-logo ">
          <span>Books</span>
          <span className="library">Library</span>
        </a>
        <a
          href="#"
          className="sidenav-trigger show-on-med-and-down"
          data-target="slide-out"
        >
          <i className="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down ">
          <li className="">
            <a href="sass.html">Home</a>
          </li>
          <li>
            <a href="badges.html">About</a>
          </li>
          <li>
            <a href="collapsible.html">Shop</a>
          </li>
          <li>
            <a href="collapsible.html">
              {log ? (
                <div>
                  <span>logout</span>
                  <span className="btn btn-floating green">PS</span>
                </div>
              ) : (
                <span>login</span>
              )}
            </a>
          </li>
          <li>
            <a className="modal-trigger" href="#modal1">
              {log ? <span></span> : <span>Register</span>}
            </a>
          </li>
          <li>
            <a
              className="tooltipped"
              data-position="bottom"
              data-tooltip="cart"
              href="collapsible.html"
            >
              cart
              <FaOpencart size="2rem" color="white" />
            </a>
          </li>
        </ul>
      </div>

      {/* side nav */}
      <ul id="slide-out" className="sidenav">
        <li className="">
          <a href="sass.html">
            <FaHome size="2rem" color="black" />
            Home
          </a>
        </li>
        <li>
          <a href="badges.html">
            <FaInfo size="2rem" color="black" />
            About
          </a>
        </li>
        <li>
          <a href="collapsible.html">
            <FaShopify size="2rem" color="black" />
            Shop
          </a>
        </li>
        <li>
          <a href="collapsible.html">
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
          </a>
        </li>
        <li>
          <a href="register">
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
          <a
            className="tooltipped"
            data-position="bottom"
            data-tooltip="cart"
            href="collapsible.html"
          >
            <FaOpencart size="2rem" color="black" />
            Cart
          </a>
        </li>
      </ul>
      {/* register modal */}
      <div id="modal1" className="modal">
        <form style={{ width: "50%", color: "black" }} className="ml-2">
          <div className="input-field col s12 black-text">
            <input
              id="email"
              type="email"
              className="validate"
              style={{ borderBottom: "black 2px solid", marginLeft: "20px" }}
            />
            <label htmlFor="email">
              <i className="material-icons black-text left">email</i>Email
            </label>
          </div>
          <div className="input-field col s12 black-text">
            <input
              id="password"
              type="password"
              className="validate"
              style={{ borderBottom: "black 2px solid", marginLeft: "20px" }}
            />
            <label htmlFor="password">
              <i className="material-icons black-text left">lock</i>Password
            </label>
          </div>
          <button
            style={{ marginLeft: "20px" }}
            className="btn waves-effect waves-light black"
            type="submit"
            name="action"
          >
            Register
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Nav;
