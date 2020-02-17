import React, { Component } from "react";
import "./WeatherInfo.scss";
import { getWeatherForNow } from "./API";
import { WeatherAndCity } from "../../models";

interface Props {}
class WeatherInfo extends Component<Props> {
  weather: WeatherAndCity;

  componentDidMount() {
    getWeatherForNow().then(res => {
      this.weather = res;
      console.log(res);
    });
  }

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
