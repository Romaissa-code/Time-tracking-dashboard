import React, { useState, useEffect } from "react";
import data from "./data.js";
import Info from "./Info.js";



import user from "./images/image-jeremy.png"
import "./App.css";

function App() {
    const [timeChoise,setTimeChoise]=useState({daily:false,weekly:false,monthly:true}); 

   const Handler=(e)=>{
    let reading = e.target.textContent;
     if (reading == "Daily") {
       setTimeChoise({ daily: true, weekly: false, monthly: false });
     }
     else if (reading =="Weekly") {
     setTimeChoise({ daily: false, weekly:true, monthly: false });
     } 
     else if (reading == "Monthly") {
       setTimeChoise({ daily: false, weekly: false, monthly: true });
     }
   }

  return (
    <main>
      <div className="main-container">
        <div className="user-container">
          <div className="user">
            <img src={user} alt="an image" className="user-img" />
            <div className="sub-user">
              <p className="user-report">Report for </p>
              <p className="user-title">Jeremy Robson</p>
            </div>
          </div>
          <ul className="timePeriod">
            <li onClick={(e) => Handler(e)}>Daily</li>
            <li onClick={(e) => Handler(e)}>Weekly</li>
            <li onClick={(e) => Handler(e)}>Monthly</li>
          </ul>
        </div>
        <div className="info-container">
          {data.map((item, index) => {
            return <Info key={index} {...item} timeChoise={timeChoise} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
