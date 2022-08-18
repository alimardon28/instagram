import React from "react";
import "../Header/Header.scss";
import { NavLink } from "react-router-dom";
import camera from "../../assets/icons/camera.svg";
import icon from "../../assets/icons/instag.png";
import messandger from "../../assets/icons/messendger.png";
import home from "../../assets/icons/home.png";
import search from "../../assets/icons/search.png";
import add from "../../assets/icons/add.png";
import liked from "../../assets/icons/heartblack.png";
import brand from "../../assets/img/img.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__nav">
          <NavLink className="header__nav_navlink" to="/">
            <img src={icon} alt="" />
          </NavLink>
        </div>

        <nav className="header__navbar">
          <ul className="header__nav_ul">
            <li className="header__nav_ul_li">
              <NavLink to="/" className="header__nav_ul_li_navlink">
                <img src={home} alt="" />
              </NavLink>
            </li>
            <li className="header__nav_ul_li">
              <NavLink to="/search" className="header__nav_ul_li_navlink">
                <img src={search} alt="" />
              </NavLink>
            </li>
            <li className="header__nav_ul_li">
              <NavLink to="/addimg" className="header__nav_ul_li_navlink">
                <img src={add} alt="" />
              </NavLink>
            </li>
            <li className="header__nav_ul_li">
              <NavLink to="/liked" className="header__nav_ul_li_navlink">
                <img src={liked} alt="" />
              </NavLink>
            </li>
            <li className="header__nav_ul_li header__nav_ul_account">
              <NavLink
                to="/account"
                className="header__nav_ul_li_navlink header__nav_ul__li_account"
              >
                <img src={brand} alt="" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
