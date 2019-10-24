import React, { Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    const { tours } = this.state;
    console.log(tours);
    const sortedTours = tours.filter(tour => tour.id !== id);
    console.log(sortedTours);
    this.setState({
      tours: sortedTours
    });
  };
  render() {
    // console.log(this.state.tours);
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>
        ))}
      </section>
    );
  }
}
