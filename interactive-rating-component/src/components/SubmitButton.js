import React from "react";
import "./SubmitButton.scss";

export default function SubmitButton(props) {
  return (
    <div onPress={props.onPress} className="submit-button-container">
      SUBMIT
    </div>
  );
}
