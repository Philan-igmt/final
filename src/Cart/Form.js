import React, { Component } from "react";
import { ProductContext } from "../ProductContext";
import axios from "axios";

export class Form extends Component {
  static contextType = ProductContext;

  constructor(props) {
    super();
    this.state = {
      name: "",
      surname: "",
    };
  }

  handle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = (event) => {
    event.preventDefault();

    const info = {
      name: this.state.name,
      surname: this.state.surname,
    };

    console.log(info);

    // axios.post("/checkout", info).then((res) => console.log(res.data));

    this.setState({
      name: "",
      surname: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <fieldset>
            <legend>Delivery information</legend>
            <label htmlFor="name">first name</label>
            <input
              type="text"
              name="info"
              id="info"
              value={this.state.name}
              onChange={this.handle}
            />
            <label htmlFor="surname">last name</label>
            <input
              type="text"
              name="surname"
              id="surname"
              value={this.state.surname}
              onChange={this.handle}
            />
            {/*<label htmlFor="lastname">address</label>
            <input
              type="text"
              name="street"
              id="street"
              // value={street}
              onChange={this.handle}
            />
            <label htmlFor="lastname">town</label>
            <input
              type="text"
              name="town"
              id="town"
              // value={town}
              onChange={this.handle}
            />
            <label htmlFor="lastname">province</label>
            <input
              type="text"
              name="province"
              id="province"
              // value={province}
              onChange={this.handle}
            />
            <label htmlFor="lastname">zipcode</label>
            <input
              type="number"
              name="zipcode"
              id="zipcode"
              // value={zipcode}
              onChange={this.handle}
            />
            <label htmlFor="lastname">phonenumber</label>
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              // value={phonenumber}
              onChange={this.handle}
            /> */}

            <br />
            <button className="btn green" type="submit">
              submit
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
