import React from "react";
import { ReactComponent as StarLogo } from "../assets/icon-star.svg";
import "./StarLogoButton.scss";

export default function StarLogoButton(props) {
  return (
    <button id="al" aria-label="Star Logo" className={props.className} onClick={props.onClick}>
      <StarLogo />
    </button>
  );
}
