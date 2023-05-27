import React from "react";
import "./../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
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
            <b onClick={() => navigate("/")}>Home</b> <br />
            <b onClick={() => navigate("/")}>Product</b>
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
            <a href="https://wa.link/mv65zr">
              <FontAwesomeIcon
                icon={faWhatsappSquare}
                className="fa-brands fa-2x"
                style={{ color: "#00ff04" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
