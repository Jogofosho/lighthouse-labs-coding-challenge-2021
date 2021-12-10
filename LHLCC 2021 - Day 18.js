/*
Your task is to write a function that will take in an array 
of lunch choices (strings) and return the choice as a string 
with the most votes.

There is always two lunch choices, and always an odd 
number of astronauts!
*/

const chooseLunchWinner = (listOfChoices) => {
  let item1 = [];
  let item2 = [];
  let temp = listOfChoices[0];
  
  listOfChoices.forEach(choice => {
    if (choice != temp){
    	item1.push(choice);
    } else {
    	item2.push(choice);
    }
  })
  
  if (item1.length > item2.length){
    return item1[0];
  } else {
    return item2[0];
  }
}
