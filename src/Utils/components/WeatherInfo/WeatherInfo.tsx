import React, { Component } from "react";
import "./WeatherInfo.scss";
import { getWeatherForNow } from "./API";
import { WeatherAndCity } from "../../models";
import { weatherEndpoint } from "../../consts";

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
        <h2>Weather : {this.state.weather.city.name}</h2>
        <article className="WeatherInfo-data">
          <section className="WeatherInfo-content">
            <img src={`${weatherEndpoint}${this.state.weather.icon}.png`} />
            <span className="WeatherInfo-temp">
              {this.state.weather.weatherNow.main.temp_min} {"\u00b0"} /
            </span>

            <span className="WeatherInfo-temp">
              {this.state.weather.weatherNow.main.temp_max} {"\u00b0"}{" "}
            </span>
          </section>

          <section>
            wind: {this.state.weather.weatherNow.wind.speed} km/h
          </section>

          <section>
            humidity: {this.state.weather.weatherNow.main.humidity} %
          </section>

          <section>
            time: {new Date(this.state.weather.weatherNow.dt_txt).getHours()} :
            00
          </section>
        </article>
      </section>
    );
  }
}

export default WeatherInfo;
