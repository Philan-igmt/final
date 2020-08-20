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
import { ProductContext } from "../ProductContext";

const Nav = () => {
  const state = useContext(ProductContext);

  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });


  const [log, setLog] = useState(false);
  return (
    <div>
      <nav className="nav-wrapper nav-fixed black">
        <Link to="/" className='brand-logo'>
          <span>Book</span>
          <span className="library">Library</span>
        </Link>
        <div className="container">
          <Link smooth="true" duration={1000} to="home">
            {/* <img src='https://qph.fs.quoracdn.net/main-qimg-134e3bf89fff27bf56bdbd04e7dbaedf.webp' alt="" /> */}
          </Link>
          <a
          to="#"
          className="sidenav-trigger"
          data-target="mobile"
        >
          <i className="material-icons">menu</i>
        </a>
        
          <ul
            className="right hide-on-med-and-down"
            style={{ marginLeft: "200px" }}
          >
            <li>
              <Link smooth="true" duration={1000} to="">
                Home
              </Link>
            </li>
            <li>
              <Link smooth="true" duration={1000} to="about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link smooth="true" duration={1000} to="products">
                Shop
              </Link>
            </li>
            <li>
              <Link smooth="true" duration={1000} to="admin">
                Admin
              </Link>
            </li>
            <li>
              <Link smooth="true" duration={1000} to="cart">
                Cart
              </Link>
            </li>
            
            <li>
              <Link smooth="true" duration={1000} to="!"></Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* side nav */}
      <ul className="sidenav black-text" id="mobile">
        <li>
          <div className="user-view">
            <div className="background">
              <img src='https://static.timesofisrael.com/blogs/uploads/2020/04/start-book-club.jpg' />
            </div>
            <a smooth="true" duration={1000}>
              <img className="circle" src='https://static.timesofisrael.com/blogs/uploads/2020/04/start-book-club.jpg' />
            </a>
            <a smooth="true" duration={1000}>
              <span className="name red-text">Philani Sithembiso Ndhlela</span>
            </a>
            <a smooth="true" duration={1000} to="email">
              <span className="red-text email">
                philanisithembiso@gmail.com
              </span>
            </a>
          </div>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/products">Shop</a>
        </li>
        <li>
          <a href="/admin">Admin</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
        
        <li>
          <a href="#!"></a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
