import React from "react";
import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  return (
    <div className="home">
      <h1 className="this">
        <span className="thiss">Invest in </span>
        <span className="red-text">Knowledge</span>
      </h1>
      <button className="waves-effect waves-black btn-large red">
        Shop now
      </button>
    </div>
  );
}

export default Home;
