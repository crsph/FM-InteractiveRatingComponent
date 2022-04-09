import React from "react";
import "./CircleButton.scss";

export default function CircleButton(props) {
  let button;

  if (props.category === "number") {
    button = <b>{props.number}</b>;
  } else if (props.category === "image") {
    button = <img src={props.src} alt="Star Logo" />;
  }

  return (
    <button
      className={"button-container"}
      name={props.name}
      onClick={props.onClick}
    >
      {button}
    </button>
  );
}
