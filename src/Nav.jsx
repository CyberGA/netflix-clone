import React, { useEffect, useState } from "react";
import "./nav.css";
import { FaBell } from "react-icons/fa";
import { BiGift, BiSearch } from "react-icons/bi";

const Nav = () => {
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
    <div className={`navbar ${show && "navbar__darken"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix-Logo"
        className="navbar__brand"
      />
      <div className="navbar__nav">
      <span className="active">Home</span>
      {/* THESE FUNCTIONALITIES WILL BE ADDED LATER */}
      {/* <span>TV Shows</span>
      <span>Movies</span>
      <span>Recently Added</span>
      <span>My List</span> */}
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
    </div>
  );
};

export default Nav;
