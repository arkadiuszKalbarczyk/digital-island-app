import axios from "../../API";
import { mapTemperatureFromKelvinToCelcius } from "../../consts";
import { WeatherNow, WeatherAndCity, City } from "../../models";

export function getWeatherForecastForFiveDays() {
  return axios.get("/weather/get").then(res => res.data);
}

export function getWeatherForNow(): Promise<WeatherAndCity> {
  return getWeatherForecastForFiveDays().then(res => {
    if (res === null) {
      return {} as WeatherAndCity;
    }

    return {
      city: res.city as City,
      weatherNow: mapWeatherNowObject(res.list[0]),
      icon: res.list[0].weather[0].icon
    };
  });
}

function mapWeatherNowObject(weatherNow: WeatherNow): WeatherNow {
  const { temp, temp_min, temp_max, feels_like } = weatherNow.main;
  const tempInCelcius = {
    temp: mapTemperatureFromKelvinToCelcius(temp),
    temp_max: mapTemperatureFromKelvinToCelcius(temp_max),
    temp_min: mapTemperatureFromKelvinToCelcius(temp_min),
    feels_like: mapTemperatureFromKelvinToCelcius(feels_like)
  };

  Object.assign(weatherNow.main, tempInCelcius);

  delete weatherNow["sys"];
  delete weatherNow["clouds"];

  return weatherNow;
}
