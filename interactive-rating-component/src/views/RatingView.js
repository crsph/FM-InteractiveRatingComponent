import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarLogo from "../assets/icon-star.svg";
import CircleButton from "../components/CircleButton";
import SubmitButton from "../components/SubmitButton";
import "./RatingView.scss";

export default function RatingView() {
  const navigate = useNavigate();
  const [rateNumber, setRateNumber] = useState(0);
  const [isActive, setActive] = useState("");
  const numbers = [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
    { id: 4, name: "four" },
    { id: 5, name: "five" },
  ];
  const toggleButtonColor = (e) => {
    const name = e.currentTarget.name;
    setActive(name);
  };

  return (
    <div className="rating-container">
      <CircleButton
        className="button-container"
        category={"logo"}
        src={StarLogo}
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
                isActive === number.name
                  ? "button-container--active"
                  : "button-container"
              }
              key={number.id}
              category={"number"}
              number={number.id}
              name={number.name}
              onClick={(e) => {
                setRateNumber(number.id);
                toggleButtonColor(e);
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
