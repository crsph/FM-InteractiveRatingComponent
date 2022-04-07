import "./App.scss";
import CircleButton from "./components/CircleButton";
import StarLogo from "./assets/icon-star.svg";

const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <div class="rating-container">
      <CircleButton category={"image"} src={StarLogo} />

      <h1 class="rating-container__title">How did we do?</h1>

      <div class="rating-container__description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </div>

      <div class="fluid-button-container">
        {numbers.map((number) => {
          console.log(number);
          return <CircleButton category={"number"} number={number} />;
        })}
      </div>
    </div>
  );
}

export default App;
