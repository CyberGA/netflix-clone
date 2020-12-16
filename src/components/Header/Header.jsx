import React, { useState, useEffect } from "react";
import "./header.css";
import { FaBell } from "react-icons/fa";
import { BiGift, BiSearch } from "react-icons/bi";

function Header() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? handleShow(true) : handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <header className={`header ${show && "header__darken"}`}>
      {/* nav
        // nav_brand
        // Home button
        // Dropdown
      */}
      <nav className="nav">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix-Logo"
            className="nav__brand"
          />
          <span className="nav__home active">Home</span>

          {/* sort by */}
          <select name="cars" id="sort">
            <option id="sort__opts" value="volvo" disabled selected>Sort by</option>
            <option id="sort__opts" value="saab">Saab</option>
            <option id="sort__opts" value="opel">Opel</option>
            <option id="sort__opts" value="audi">Audi</option>
          </select>
        </div>

        <div className="right">

        <div className="notification searchIcon">
          <BiSearch size="1.4rem"/>
        </div>
        <div className="notification giftIcon">
          <BiGift size="1.4rem"/>
        </div>
        <div className="notification bell">
          <FaBell size="1.4rem"/>
        </div>
        <img
          className="nav__smileu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&usqp=CAU"
          alt="User"
        />
        </div>
      </nav>
    </header>
  );
}

export default Header;
