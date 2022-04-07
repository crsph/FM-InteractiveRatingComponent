import "./App.scss";
import CircleButton from "./components/CircleButton";

const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <div class="rating-container">
      

      <div class="fluid-button-container">
        {numbers.map((number) => {
          console.log(number);
          return <CircleButton number={number} />;
        })}
      </div>
    </div>
  );
}

export default App;
