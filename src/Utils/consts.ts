export const zeroCelsiusInKelvin = 273;

export function mapTemperatureFromKelvinToCelcius(kelvinTemp: number): number {
  return parseInt((kelvinTemp - zeroCelsiusInKelvin).toFixed(0), 10);
}
