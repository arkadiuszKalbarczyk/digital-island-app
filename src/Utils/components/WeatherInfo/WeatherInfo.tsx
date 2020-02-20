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
        <h2>
          Weather: <strong>{this.state.weather.city.name}</strong>
        </h2>
        <article className="WeatherInfo-data">
          <section className="WeatherInfo-content">
            <img
              src={`${weatherEndpoint}${this.state.weather.icon}@2x.png`}
              alt="weather  icon"
            />
            <span className="WeatherInfo-temp">
              {this.state.weather.weatherNow.main.temp_min} {"\u00b0"} / &nbsp;
            </span>

            <span className="WeatherInfo-temp">
              {this.state.weather.weatherNow.main.temp_max} {"\u00b0"}{" "}
            </span>
          </section>
          <section className="WeatherInfo-details">
            <div>
              <section>
                wind:{" "}
                <strong>{this.state.weather.weatherNow.wind.speed} km/h</strong>
              </section>
              <section>
                humidity:{" "}
                <strong>{this.state.weather.weatherNow.main.humidity} %</strong>
              </section>
              <section>
                time:{" "}
                <strong>
                  {new Date(this.state.weather.weatherNow.dt_txt).getHours()}
                  :00
                </strong>
              </section>
            </div>
          </section>
        </article>
      </section>
    );
  }
}

export default WeatherInfo;
