import React from "react";
import "./SubmitButton.scss";

export default function SubmitButton(props) {
  return (
    <button onClick={props.onClick} className="submit-button-container">
      SUBMIT
    </button>
  );
}
