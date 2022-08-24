import React from "react";
import { useState } from "react";
import "../Message/Message.scss";
import { axios } from "axios";

const Message = () => {
  const [message, setMessage] = useState("");
  const [print , setprint] = useState(false)

function getData(val){
   setMessage(val.target.value)
   setprint(false)

}

  const send = {

    date: new Date().getDate(),
    hour: new Date().getHours(),
    min: new Date().getMinutes(),
    score: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  };


  return (
    <div className="message">
      <div className="container message__container">
        <div className="message__otpr">
          <ul className="message__otpr_top">
            <li className="message__otpr_top_top">
              <div className="message__otpr_top_boxes">
                <span className="message__otpr_top_hero"> {send.hour} : </span>
                <span className="message__otpr_top_hero"> {send.min} </span>
              </div>
              <p className="message__otpr_top_desc">
                {
                    print ?

                message

            :null}
              </p>
              <div className="message_otpr_top_box">
                <span className="message__otpr_top_span">{send.date} /</span>
                <span className="message__otpr_top_span">{send.month} /</span>
                <span className="message__otpr_top_span">{send.score}</span>
              </div>
            </li>
          </ul>
        </div>
        <form action="" className="message__ul_li_form">
          <input
            className="message__ul_li_form_input "
            type="text"
            required
            placeholder="coment..."
            value={message}
            onChange={getData}
          />
          <button onClick={() => setprint(true)}>btn</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
