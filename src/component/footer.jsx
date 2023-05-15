import React from "react";
import "./../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <footer className="py-4 background">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <p>jl.jendral Sudirman no. 389</p>
            <p>Wonosari, Prabumulih</p>
            <p>0813-7325-2773</p>
          </div>
          <div className="col-lg-2 tinggi">
            <b>Home</b> <br />
            <b>Product</b>
          </div>
          <div className="col-lg-3">
            {/* Connect with us
            <i className="fa-brands fa-facebook fa-2x"></i>
            <i className="fa-brands fa-instagram-square fa-2x"></i>
            <i className="fa-brands fa-twitter-square fa-2x"></i>
            <i className="fa-solid fa-circle-envelope fa-2x"></i>
            <i className="fa-brands fa-twitch fa-2x"></i> */}
          </div>

          <div className="col-lg-2">
            <b>Hubungi sekarang</b>
            <br />
            <FontAwesomeIcon
              icon={faWhatsappSquare}
              className="fa-brands fa-2x"
              style={{ color: "#00ff04" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
