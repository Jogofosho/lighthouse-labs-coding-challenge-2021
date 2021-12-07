/*
Your task is to create a function that will take in 
an array of weather objects and will return a rounded 
average of the wind speed.
*/

const averageWindSpeed = (weatherEntries) => {
  let sum = 0;
  weatherEntries.forEach((element) => {
    sum += element.windSpeed;
  })
  return Math.round(sum/weatherEntries.length);
}
