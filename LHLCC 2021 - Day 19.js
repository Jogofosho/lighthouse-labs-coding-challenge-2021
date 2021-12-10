/*
Your task is to write a function that will take in a list of data 
entries in the shape of an array of objects. The function will 
then organize and return the entries by type and store each bit of 
data (string) in each list, in the shape of an object containing arrays.
*/

const organizeData = (receivedData) => {
  let returnData = {
	  "astro" : [],
    "bio" : [],
    "physics": [],
  }
  
  receivedData.forEach(dataObj => {
	  if (dataObj.type === "astro"){
  	  returnData.astro.push(dataObj.data);
    } else if (dataObj.type === "bio"){
  	  returnData.bio.push(dataObj.data);
    } else if (dataObj.type === "physics"){
  	  returnData.physics.push(dataObj.data);
    }
  })
  
  return returnData;
}
