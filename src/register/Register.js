import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./Regiser.css";
import { Link } from "react-router-dom";

function Register() {
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });

  return (
    <div className="allform">
      <div className="form">
        <form>
          <fieldset>
            <legend>login as the admin</legend>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                className="validate"
                required
              />
              <label htmlFor="email">email address</label>
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                className="validate"
                required
              />
              <label htmlFor="password">password</label>
            </div>
            <button className="btn green" type="submit">
              login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Register;
