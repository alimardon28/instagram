import React from "react";
import "../Home/Home.scss";
import brand from "../../assets/img/img.jpg";
import heart from "../../assets/icons/heartblack.png";
import message from "../../assets/icons/message.webp";
import otpr from "../../assets/icons/786205.png";
import saved from "../../assets/icons/saved.webp";

const Home = () => {
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
                <button className="homes__ul_li_bottom_left_button">
                  <img src={heart} alt="" />
                </button>
                <button className="homes__ul_li_bottom_left_button">
                  <img src={message} alt="" />
                </button>
                <button className="homes__ul_li_bottom_left_button">
                  <img src={otpr} alt="" />
                </button>
              </div>
              <div className="homes__ul_li_bottom_right">
                <button className="homes__ul_li_bottom_right_button">
                  {saved}
                </button>
              </div>
            </div>
            <div className="homes__ul_li_num">
              <p className="homes__ul_li_num_desc">
                like <span className="homes__ul_li_num_desc_span">0</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
