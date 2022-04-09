import "./App.scss";
import RatingView from "./views/RatingView";
import ThankYouView from "./views/ThankYouView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RatingView />} />
        <Route exact path="/thankyou" element={<ThankYouView />} />
      </Routes>
    </Router>
  );
}
