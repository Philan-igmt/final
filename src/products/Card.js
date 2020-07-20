import React from "react";
import "./Card.css";
import { FaOpencart } from "react-icons/fa";

const Card = ({ books }) => {
  return (
    <div>
      <div className="card" style={{ width: "300px" }}>
        <div className="card-image">
          <img src={books.image} style={{ width: "100%", height: "200px" }} />
          <span className="card-title">{books.name}</span>
        </div>
        <div className="card-content">
          <p>{books.prize}</p>
        </div>
        <div>
          <button className="btn">
            add to cart <FaOpencart size="2rem" color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
