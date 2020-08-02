import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ProductContext } from "../ProductContext";

const Upadate = () => {
  const state = useContext(ProductContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const updated = {
      name: data.name,
      price: data.price,
      image: data.imageURL,
    };
    console.log(data);
    axios
      .delete(`/products/${data.id}`, updated)
      .then((res) => console.log(res.data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Update a book</legend>
          <label htmlFor="id">Book id</label>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="copy and past the book url and past it here"
            ref={register}
          />

          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" ref={register} />

          <label htmlFor="id">Price</label>
          <input type="text" name="price" id="price" ref={register} />

          <label htmlFor="id">ImageURL</label>
          <input type="text" name="imageURL" id="imageURL" ref={register} />

          <button type="submit" className="btn green">
            {" "}
            Update
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Upadate;
