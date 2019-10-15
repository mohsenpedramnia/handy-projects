import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const CityTours = () => (
  <article className="CityTours">
    <div className="Tour">
      <h5>This is a city tour app</h5>
    </div>
  </article>
);

ReactDOM.render(<CityTours />, document.getElementById("root"));
