/*
Your task is to write a function that will take in a 
list of platforms and a date as a string. That function 
will update the date property on the first platform 
with an empty date and then return the platform list.
*/

const bookFreePlatform = (platformList, missionDate) => {
  let n = 0;
  while (platformList[n].bookDate !== undefined){
    n++;
  }
  platformList[n].bookDate = missionDate;
  return platformList;
}
