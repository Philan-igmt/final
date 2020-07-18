import React, { useEffect } from "react";
import Nav from "../nav/Nav";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

function Register() {
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });

  return (
    <div id="modal1" className="modal">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Agree
        </a>
      </div>
    </div>
  );
}

export default Register;
