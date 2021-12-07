/*
Your task is to write a function that takes in the temperature, 
weather condition, wind speed, and direction as parameters and 
store them inside a structure that holds each value as properties.

There's a small and important detail for this one, you must 
convert the temperature from Fahrenheit to Celsius and convert 
the wind speed from miles/hour to meters/second, and round both 
of them before storing them.
*/

const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  const weather = {
    temperature : Math.round((temperature - 32)*(5/9)),
    condition : condition,
    windSpeed : Math.round(windSpeed/2.237),
    windDirection : windDirection
  };
  return weather;
}
