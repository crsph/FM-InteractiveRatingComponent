import React from "react";
import ThankYouIllu from "../assets/illustration-thank-you.svg";
import { useLocation } from "react-router-dom";
import "./ThankYouView.scss";

export default function ThankYouView() {
  const location = useLocation();

  return (
    <div className="thank-you-container">
      <div className="image-container">
        <img src={ThankYouIllu} alt="Thank You Illustration" />
      </div>

      <div className="thank-you-container__selected-rate-number">
        You selected {location.state} out of 5
      </div>

      <div className="text-container">
        <h1 className="text-container__title">Thank You!</h1>
        <div className="text-container__description">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </div>
      </div>
    </div>
  );
}
