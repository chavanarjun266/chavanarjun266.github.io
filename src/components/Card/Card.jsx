import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color,mode,isGold,isSilver}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} style={{ width: isGold ? "190%" : "108%" || isSilver ? "180%" : "" }}alt="" />
      <span style={{ color: mode ? "var(--yellow)" : "var(--green)" }} className="card-heading">{heading}</span>
      <span style={{ color: mode ? "white" : ""}} className="carditems">{detail}</span>
      {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  );
};

export default Card;
