import "./App.scss";
import CircleButton from "./components/CircleButton";

let numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <div class="rating-container">
      {numbers.map((number) => {
        <CircleButton number={number} />;
      })}
    </div>
  );
}

export default App;
