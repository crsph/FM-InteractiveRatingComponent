import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import RatingView from "./views/RatingView";
import ThankYouView from "./views/ThankYouView";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/FM-InteractiveRatingComponent/" element={<RatingView />} />
        <Route exact path="/FM-InteractiveRatingComponent/thankyou" element={<ThankYouView />} />
      </Routes>
    </Router>
  );
}
