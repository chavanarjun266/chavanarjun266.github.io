import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
import deepanshu from "../../img/deepanshu.jpg";
const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="n-wrapper"
      id="Navbar"
      style={{
        background: darkMode
          ? "linear-gradient(180deg, black, transparent)"
          : "",
        color: darkMode ? "white" : "",
      }}
    >
      {/* <div className="n-wrapper" id="Navbar"       style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}> */}
      {/* left */}
      <div className="n-left">
        <a
          href="https://www.instagram.com/arjunchavan_ac/"
          target="__blank"
          style={{ color: darkMode ? "white" : "black" }}
        >
          <img src={deepanshu} />
          <div className="n-name">@arjunchavan_ac</div>
        </a>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Start" spy={true} smooth={true}  style={{color: darkMode ? "white" : "black" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}  style={{color: darkMode ? "white" : "black" }}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="presentation" spy={true} smooth={true}  style={{color: darkMode ? "white" : "black" }}>
                Presentation
              </Link>
            </li>
            {/* <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li> */}
            {/* <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li> */}
            <li>
              <Link to="testimonial" spy={true} smooth={true} style={{color: darkMode ? "white" : "black" }}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <a className="button n-button" href="tel:+917028498179 ">
          Contact
        </a>
        {/* <button className="button n-button" onclick="location.href='tel:+4733378901'">Contact</button> */}
      </div>
    </div>
  );
};

export default Navbar;
