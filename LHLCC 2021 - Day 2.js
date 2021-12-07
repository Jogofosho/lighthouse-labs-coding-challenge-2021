/*
[..] creating a function that will take in an 
astronaut object as a parameter and return a 
string using the properties of the astronaut.
*/

const generateAstronautTag = (astronaut) => {
  return `${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`;
}
