import React from "react";
import { useLocation } from "react-router-dom";

export default function ThankYouView() {
  const location = useLocation();

  console.log(location.state);

  return <div>ThankYouView</div>;
}
