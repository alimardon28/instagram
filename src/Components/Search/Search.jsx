import React from "react";
import "../Search/Search.scss";
import brand from "../../assets/img/img.jpg";
import { NavLink } from "react-router-dom";

const Search = () => {
  return (
    <div className="search">
      <div className="container">
        <form action="" className="search__form">
          <input
            type="text"
            className="search__form_input"
            required
            placeholder="Search..."
          />
        </form>
        <ul className="search__ul">
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
          <li className="search__ul_li">
            <NavLink className="search__ul_li_navlink" to="/liked">
              <img src={brand} alt="" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
