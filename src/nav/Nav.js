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
        <a href="#" className="brand-logo">
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
              {log ? <span>logout</span> : <span>login</span>}
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
          <a href="collapsible.html">
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
    </nav>
  );
};

export default Nav;
