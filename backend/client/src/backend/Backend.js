import React, { useContext } from "react";
import "./Backend.css";
import { ProductContext } from "../ProductContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import Upadate from "./Upadate";
import Delete from "./Delete";
import Footer from "../footer/Footer";

const Backend = () => {
  const state = useContext(ProductContext);
  const list = state.products.map((item) => (
    <div key={item._id} className="bcard">
      <div className="theInside">
        <div className="name">name:{item.name}</div>
        <div className="price">price:R{item.price}</div>
        <div className="image">Image URL:{item.image}</div>
        <div className="id">book id:{item._id}</div>
      </div>
    </div>
  ));

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const book = {
      name: data.name,
      price: data.price,
      image: data.imageURL,
    };
    console.log(book);
    axios.post("/products", book).then((res) => console.log(res.data));
  };

  return (
    <div>
      <div className="backend">
        <h2>Hello admin</h2>
        <div className="allbackend center">
          <div className="list">
            <h5>The raw list of all products</h5>
            <div className="bookComing">{list}</div>
          </div>
          <div className="addproduct">
            <form onSubmit={handleSubmit(onSubmit)} className="delForm ">
              <fieldset>
                <legend className="leg">ADD A BOOK</legend>
                <label htmlFor="price">price</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="e.g 500"
                  ref={register}
                />
                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" ref={register} />
                <label htmlFor="imageURL">imageURL</label>
                <input
                  type="text"
                  name="imageURL"
                  id="imageURL"
                  placeholder='this take the URL without "inverted commas" e.g https://imageUrl '
                  ref={register}
                />
                <button className="btn green">Add</button>
              </fieldset>
            </form>
          </div>
          <Upadate />
          <Delete />
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
};

export default Backend;
