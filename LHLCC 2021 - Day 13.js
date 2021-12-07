/*
Your task is to write a function that will take in an 
array of objects containing a gauge reading (min, max, current). 
The function will then check if the gauge current value is 
within spec (between min and max) and check the next gauge. 
If one of the values is outside the spec, return false, if 
they are all ok, return true.
*/

const checkAllGauges = (gaugeList) => {
  let pass = true;
  let i = 0;
  while (pass && i < gaugeList.length){
    if (gaugeList[i].current < gaugeList[i].min || gaugeList[i].current > gaugeList[i].max){
      pass = false;
    }
    i++;
  }
  return pass;
}
