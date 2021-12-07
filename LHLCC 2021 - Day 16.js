/*
Your task is to write a function that will take in two position objects. 
Calculate the average speed from the two positions and return the average 
speed rounded to the first decimal point.

Each object contains the altitude in meters, and a time stamp in seconds.
*/

const getAverageSpeed = (firstPosition, secondPosition) => {
  let num = (secondPosition['altitude']-firstPosition['altitude'])/(secondPosition['time']-firstPosition['time']);
  let returnVal = num.toFixed(1);
  return Number.parseFloat(returnVal);
}
