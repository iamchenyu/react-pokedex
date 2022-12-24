import React from "react";
import "./Pokecard.css";

export default (props) => {
  const imgURL = props.baseURL + props.id + ".png";
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-title">{props.name}</h3>
      <img
        src={imgURL}
        alt={`${props.name} image`}
        className="Pokecard-image"
      />
      <p className="Pokecard-type">Type: {props.type}</p>
      <p className="Pokecard-exp">EXP: {props.exp}</p>
    </div>
  );
};
