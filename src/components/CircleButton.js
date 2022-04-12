import React from "react";
import "./CircleButton.scss";

export default function CircleButton(props) {
  return (
    <button
      className={props.className}
      name={props.name}
      onClick={props.onClick}
    >
      <b>{props.number}</b>
    </button>
  );
}
