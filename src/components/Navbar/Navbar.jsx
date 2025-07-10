import React from "react";

import "./Navbar.css";

import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MoviManiac</h1>

      <div className="navbar_links">
        <a href="">
          Popular <img src={Fire} alt="Fire Emoji" className="navbar_emoji" />
        </a>
        <a href="">
          Top Rate <img src={Star} alt="Star Emoji" className="navbar_emoji" />
        </a>
        <a href="">
          Upcoming <img src={Party} alt="Upcoming Emoji" className="navbar_emoji" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
