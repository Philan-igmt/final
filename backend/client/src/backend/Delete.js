import React from "react";
import { useForm, useRef } from "react-hook-form";

import axios from "axios";
import "./Backend.css";

function Delete() {
  const { register, handleSubmit } = useForm();
  // const textInput = React.useRef();
  // const clearInput = () => (textInput.current.value = ""); //trying to clear the input field

  const onSubmit = (data) => {
    const book = {
      name: data.name,
      price: data.price,
      image: data.imageURL,
    };
    console.log(data);
    axios
      .delete(`/products/${data.id}`, book)
      .then((res) => console.log(res.data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="delForm">
        <fieldset>
          <legend className="leg"> DELETE A BOOK </legend>
          <label htmlFor="id">BOOK ID</label>
          <input
            type="text"
            name="id"
            id="id"
            ref={register}
            // ref={textInput}
            onSubmit="value=''"
            placeholder="copy and paste the Book Id an paste it here"
          />
          <button type="submit" className="btn red">
            DELETE
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Delete;
