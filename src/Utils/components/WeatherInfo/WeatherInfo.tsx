import React, { Component } from "react";
import "./WeatherInfo.scss";

interface Props {}
class WeatherInfo extends Component<Props> {
  render() {
    return (
      <section className="WeatherInfo">
        <h3>Weather</h3>
        <p>desc</p>
      </section>
    );
  }
}

export default WeatherInfo;
