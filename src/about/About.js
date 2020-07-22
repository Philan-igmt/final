import React from "react";
import "./About.css";
import Footer from "../footer/Footer";

function About() {
  return (
    <div className="allabout">
      <div className="aboutdiv">
        <h1 className="thisabout">About</h1>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13245.569786467735!2d18.5888977!3d-33.9052978!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33631bba9afc7c03!2sToplin%20House%20contact!5e0!3m2!1saf!2sza!4v1595108591316!5m2!1saf!2sza"
        style={{ width: "100%", height: "400px" }}
      ></iframe>
      <h4>Our Mission</h4>
      <div className="container">
        <p>
          Our mission is to provide quality but affordable books for education,
          entertainment, self-development and self-fulfillment; to all when the
          need arises by providing a wide range of books to satisfy our
          students,Making our books accessible in the market.
        </p>
        <h4>Our Vision</h4>
        <p>
          Our vision is to become the largest and leading book distributor in
          South Africa and around the world when time goes by. And providing
          consultancy services to local and underground publishers who want to
          expand their services to other booksellers.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
