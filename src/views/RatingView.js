import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircleButton from "../components/CircleButton";
import StarButtonLogo from "../components/StarLogoButton";
import SubmitButton from "../components/SubmitButton";
import "./RatingView.scss";

export default function RatingView() {
  const navigate = useNavigate();
  const [rateNumber, setRateNumber] = useState(0);
  const [isRateNumberActive, setRateNumberActive] = useState("");
  const [isStarButtonActive, setStarButtonActive] = useState(false);
  const numbers = [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
    { id: 4, name: "four" },
    { id: 5, name: "five" },
  ];

  const toggleStarButtonColor = () => {
    setStarButtonActive(!isStarButtonActive);
  };

  const toggleRateButtonColor = (e) => {
    const name = e.currentTarget.name;
    setRateNumberActive(name);
  };

  return (
    <div className="rating-container">
      <StarButtonLogo
        className={
          isStarButtonActive
            ? "star-button-container--active"
            : "star-button-container"
        }
        onClick={toggleStarButtonColor}
      />

      <h1 className="rating-container__title">How did we do?</h1>

      <div className="rating-container__description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </div>

      <div className="button-row-container">
        {numbers.map((number) => {
          return (
            <CircleButton
              className={
                isRateNumberActive === number.name
                  ? "button-container--active"
                  : "button-container"
              }
              key={number.id}
              number={number.id}
              name={number.name}
              onClick={(e) => {
                setRateNumber(number.id);
                toggleRateButtonColor(e);
              }}
            />
          );
        })}
      </div>

      <SubmitButton
        onClick={() => navigate("/thankyou", { state: rateNumber })}
      />
    </div>
  );
}
