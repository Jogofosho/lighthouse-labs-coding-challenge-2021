/*
Your task is to write a function that will take in speed (number), 
missionData (object) and checks (object) as parameters. The goal is 
to make sure that the speed is within the limits and that the amount 
of entries per type matches with the checks. If one of the values is 
a mismatch, return false, if everything is fine, return true.

Speed will be compared against maxSpeed and minSpeed inclusively and 
the length of each array inside missionData will be compared to the 
values inside the dataEntries object values.
*/

const confirmReentryPlans = (speed, missionData, checks) => {
  let typesCheck = true;
  let mdLength = [];
  let cdeLength = [];
  
  for (const property in missionData) {
    mdLength.push(missionData[property].length);
  }
  
  for (const entries in checks.dataEntries){
    cdeLength.push(checks.dataEntries[entries]);
  }
  
  let i = 0;
  while (typesCheck && i < mdLength.length){
    if (mdLength[i] != cdeLength[i]){
      typesCheck = false;
    }
    i++;
  }
  
  if (typesCheck && (speed >= checks.minSpeed && speed <= checks.maxSpeed)){
    return true;
  } else {
    return false;
  }
}
