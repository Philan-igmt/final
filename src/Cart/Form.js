import React, { Component } from "react";
import { ProductContext } from "../ProductContext";
import axios from "axios";

export class Form extends Component {
  static contextType = ProductContext;
  constructor(props) {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      street: "",
      town: "",
      province: "",
      zipcode: "",
      phonenumber: "",
    };
  }

  handle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = (event) => {
    fetch("/checkout", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(this.state),
    }).then(function (response) {
      console.log(response);
      return response.json();
    });

    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const {
      firstname,
      lastname,
      street,
      town,
      province,
      zipcode,
      phonenumber,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            type="text"
            name="firstname"
            id="firstname"
            // value={firstname}
            onChange={this.handle}
          />
          <label htmlFor="firstname">first name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            // value={lastname}
            onChange={this.handle}
          />
          <label htmlFor="lastname">last name</label>
          <input
            type="text"
            name="street"
            id="street"
            // value={street}
            onChange={this.handle}
          />
          <label htmlFor="lastname">address</label>
          <input
            type="text"
            name="town"
            id="town"
            // value={town}
            onChange={this.handle}
          />
          <label htmlFor="lastname">town</label>
          <input
            type="text"
            name="province"
            id="province"
            // value={province}
            onChange={this.handle}
          />
          <label htmlFor="lastname">province</label>
          <input
            type="number"
            name="zipcode"
            id="zipcode"
            // value={zipcode}
            onChange={this.handle}
          />
          <label htmlFor="lastname">zipcode</label>
          <input
            type="number"
            name="phonenumber"
            id="phonenumber"
            // value={phonenumber}
            onChange={this.handle}
          />
          <label htmlFor="lastname">phonenumber</label>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
