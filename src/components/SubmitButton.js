import React from "react";
import "./SubmitButton.scss";

let submitButton;

export default function SubmitButton(props) {
  if (props.disabled === true) {
    submitButton = (
      <button
        disabled
        onClick={props.onClick}
        className="submit-button-container"
      >
        SUBMIT
      </button>
    );
  } else {
    submitButton = (
      <button onClick={props.onClick} className="submit-button-container">
        SUBMIT
      </button>
    );
  }

  return <>{submitButton}</>;
}
