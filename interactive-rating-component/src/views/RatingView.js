import React, { useState } from "react";
import CircleButton from "../components/CircleButton";
import SubmitButton from "../components/SubmitButton";
import StarLogo from "../assets/icon-star.svg";
import { useNavigate } from "react-router-dom";
import "./RatingView.scss";

export default function RatingView() {
  const navigate = useNavigate();
  const [rateNumber, setRateNumber] = useState(0);
  const [isActive, setActive] = useState("");
  // const numbers = [
  //   [1, "one"],
  //   [2, "two"],
  //   [3, "three"],
  //   [4, "four"],
  //   [5, "five"],
  // ];
  const toggleClass = (e) => {
    const name = e.currentTarget.name;
    setActive(name);
    console.log(isActive);
  };

  return (
    <div className="rating-container">
      <CircleButton category={"image"} src={StarLogo} />

      <h1 className="rating-container__title">How did we do?</h1>

      <div className="rating-container__description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </div>

      <div className="fluid-button-container">
        <CircleButton
          className={isActive === "one" ? "button--active" : ""}
          category="number"
          number={1}
          name="one"
          onClick={(e) => {
            setRateNumber(1);
            toggleClass(e);
          }}
        />
        <CircleButton
          className={isActive === "two" ? "button--active" : ""}
          category="number"
          number={2}
          name="two"
          onClick={(e) => {
            setRateNumber(2);
            toggleClass(e);
          }}
        />

        <CircleButton
          className={isActive === "three" ? "button--active" : ""}
          category="number"
          number={3}
          name="three"
          onClick={(e) => {
            setRateNumber(3);
            toggleClass(e);
          }}
        />

        <CircleButton
          className={isActive === "four" ? "button--active" : ""}
          category="number"
          number={4}
          name="four"
          onClick={(e) => {
            setRateNumber(4);
            toggleClass(e);
          }}
        />

        <CircleButton
          className={isActive === "five" ? "button--active" : ""}
          category="number"
          number={5}
          name="five"
          onClick={(e) => {
            setRateNumber(5);
            toggleClass(e);
          }}
        />

        {/* {numbers.map((number, index) => {
          return (
            <CircleButton
              className={isActive === number[1] ? "button--active" : ""}
              key={index}
              category={"number"}
              number={number[0]}
              name={number[1]}
              onClick={(e) => {
                setRateNumber(number);
                toggleClass(e);
              }}
            />
          );
        })} */}
      </div>

      <SubmitButton
        onClick={() => navigate("/thankyou", { state: rateNumber })}
      />
    </div>
  );
}
