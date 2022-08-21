import React from "react";
import "../Message/Message.scss";

const Message = () => {
  return (
    <div className="message">
      <div className="container message__container">
        <div className="message__otpr">
          <ul className="message__otpr_top">
            <li className="message__otpr_top_top">
              <span className="message__otpr_top_hero"> 11 : 20 </span>
              <p className="message__otpr_top_desc">
                Lorem ipsum dolor sit amet.
              </p>
              <span className="message__otpr_top_span"> 8 / 21 / 2022 </span>
            </li>
          </ul>
        </div>

        <form action="" className="message__ul_li_form">
          <input
            className="message__ul_li_form_input "
            type="text"
            required
            placeholder="coment..."
          />
        </form>
      </div>
    </div>
  );
};

export default Message;
