import React from "react";
import "../AddImg/AddImg.scss";


const Addimg = () => {
  return (
    <div className="addimg">
      <div className="container addimg__container">
        <form action="" className="addimg__form">
          <input type="file" className="addimg__form_input" />
        </form>

        <div className="addimg__box">
          <div className="addimg__box_imgbox"></div>
        </div>
      </div>
    </div>
  );
};

export default Addimg;
