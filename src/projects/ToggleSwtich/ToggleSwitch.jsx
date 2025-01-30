import "./ToggleSwitch.css";
import React, { useState } from "react";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggleSwitch = () =>{
    setIsOn(!isOn);
  };
  return (
    <>
      <div className="toggle-switch"  style={{backgroundColor: isOn ? "green" : "orangered"}} onClick={handleToggleSwitch}>
        <div className ={`switch ${isOn ? "on" : "Off"}`}>
          <span className="switch-state">{isOn ? "on" : "Off"}</span>
        </div> 
      </div>
    </>
  );
};
