import React, { useState } from "react";
import ellipsisImg from "./images/icon-ellipsis.svg";

import "./App.css";
const Info = ({ title, img,clr, timeframes, timeChoise}) => {
  const { daily, weekly, monthly } = timeframes;

  const choise = (daily, weekly, monthly) => {
    if (timeChoise.daily) {
      return daily;
    } else if (timeChoise.weekly) {
      return weekly;
    } else {
      return monthly;
    }
  };

  return (
    <article
      className="singleInfo-container"
      style={{ backgroundColor: `${clr}` }}
    >
      <div className="singleInfo1">
        <img src={img} alt="an image" className="info-img" />
      </div>
      <div className="singleInfo2">
        <div className="singleInfo-title">
          <p>{title}</p>
          <img src={ellipsisImg} alt="three dots" className="dots" />
        </div>
        <div className="bottom-info">
          <p className="current">{choise(daily, monthly, weekly).current}hrs</p>
          <p className="previous">
            Last
            {` ${choise(daily, weekly, monthly).period} -${
              choise(daily, monthly, weekly).previous
            }`}
            hrs
          </p>
        </div>
      </div>
    </article>
  );
};

export default Info;
