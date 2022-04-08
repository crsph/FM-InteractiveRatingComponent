import React, { Component } from "react";
import CircleButton from "../components/CircleButton";
import SubmitButton from "../components/SubmitButton";
import StarLogo from "../assets/icon-star.svg";

export default class RatingView extends Component {
  constructor(props) {
    super(props);

    this.state = { rateNumber: 0 };

    this.setRateNumber = this.setRateNumber.bind(this);
  }

  setRateNumber(number) {
    this.setState({ rateNumber: number });
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];

    return (
      <div class="rating-container">
        <CircleButton category={"image"} src={StarLogo} />

        <h1 class="rating-container__title">How did we do?</h1>

        <div class="rating-container__description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </div>

        {/* <form> */}
        <div class="fluid-button-container">
          {numbers.map((number, index) => {
            return (
              <CircleButton
                key={index}
                category={"number"}
                number={number}
                onClick={() => this.setRateNumber(number)}
              />
            );
          })}
        </div>

        <SubmitButton />
        {/* </form> */}
      </div>
    );
  }
}
