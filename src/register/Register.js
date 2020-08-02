import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./Regiser.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="allform">
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>login as the admin</legend>
            <div>
              <input
                id="username"
                name="username"
                type="text"
                className="validate"
                required
                ref={register}
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
                ref={register}
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
