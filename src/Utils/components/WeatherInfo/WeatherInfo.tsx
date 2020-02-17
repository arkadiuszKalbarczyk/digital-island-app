import React, { Component } from "react";
import "./WeatherInfo.scss";
import { getWeatherForNow } from "./API";
import { WeatherAndCity } from "../../models";

interface Props {}
class WeatherInfo extends Component<Props> {
  state = {
    weather: {} as WeatherAndCity
  };

  componentDidMount() {
    getWeatherForNow().then((res: WeatherAndCity) => {
      this.setState({ weather: res });
    });
  }

  render() {
    if (!this.state.weather || !this.state.weather.city) {
      return <section className="WeatherInfo">No data</section>;
    }

    return (
      <section className="WeatherInfo">
        <h3>Weather : {this.state.weather.city.name}</h3>

        <section>
          <span>{this.state.weather.weatherNow.main.temp_min}</span>/
          <span>{this.state.weather.weatherNow.main.temp_max}</span>
        </section>

        <section>wind: {this.state.weather.weatherNow.wind.speed}</section>

        <section>
          humidity: {this.state.weather.weatherNow.main.humidity}
        </section>

        <section>time: {this.state.weather.weatherNow.dt_txt}</section>
      </section>
    );
  }
}

export default WeatherInfo;
