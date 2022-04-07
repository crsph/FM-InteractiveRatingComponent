import React from "react";
import "./CircleButton.scss";

export default function CircleButton(props) {
  return (
    <div class="button-container">
      <b>{props.number}</b>
    </div>
  );
}
