/*
Your task is to write a function that will take in an array 
of objects containing switches. The function will change the 
value of the isOn property to true for every switch in the 
list, and then return the updated array.
*/

const switchAllTogglesOn = (toggleList) => {
  toggleList.forEach((toggle) => {
    if (toggle.isOn === false){
      toggle.isOn = true;
    }
  })
  return toggleList;
}
