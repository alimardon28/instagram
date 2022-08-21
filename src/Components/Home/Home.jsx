import React from "react";
import "../Home/Home.scss";
import { NavLink } from "react-router-dom";
import brand from "../../assets/img/img.jpg";
import heart from "../../assets/icons/heartblack.png";
import heartred from "../../assets/icons/heartred.png";
import message from "../../assets/icons/message.png";
import otpr from "../../assets/icons/786205.png";
import saved from "../../assets/icons/saved.png";
import { useState } from "react";
import { Context } from "../../Context/Context";
import { useContext } from "react";

const Home = () => {
  const { like } = useContext(Context);
  const { handleLike } = useContext(Context);


  return (
    <div className="homes">
      <div className="container homes__container">
        <ul className="homes__ul">
          <li className="homes__ul_li">
            <div className="homes__ul_li_top">
              <div className="homes__ul_li_top_left">
                <img className="homes__ul_li_top_left_img" src={brand} alt="" />
                <p className="homes__ul_li_top_left_desc">alimardon28</p>
              </div>
              <div className="homes__ul_li_top_right">
                <button className="homes__ul_li_top_right">...</button>
              </div>
            </div>
            <div className="homes__ul_li_video">
              <img className="homes__ul_li_video_img" src={brand} alt="" />
            </div>
            <div className="homes__ul_li_bottom">
              <div className="homes__ul_li_bottom_left">
                <button
                  onClick={handleLike}
                  className="homes__ul_li_bottom_left_button"
                >
                  <img src={handleLike ? heart : heartred} alt="" />
                </button>
                <NavLink to="/message">
                <button
                  className="homes__ul_li_bottom_left_button"
                >
                  <img src={message} alt="" />
                </button>
                </NavLink>
                <button className="homes__ul_li_bottom_left_button">
                  <img src={otpr} alt="" />
                </button>
              </div>
              <div className="homes__ul_li_bottom_right">
                <button className="homes__ul_li_bottom_right_button">
                  <img src={saved} alt="" />
                </button>
              </div>
            </div>
            <div className="homes__ul_li_num">
              <p className="homes__ul_li_num_desc">
                like <span className="homes__ul_li_num_desc_span">{like}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
