export const zeroCelsiusInKelvin = 273;
export const weatherEndpoint = "http://openweathermap.org/img/wn/";

export function mapTemperatureFromKelvinToCelcius(kelvinTemp: number): number {
  return parseInt((kelvinTemp - zeroCelsiusInKelvin).toFixed(0), 10);
}
