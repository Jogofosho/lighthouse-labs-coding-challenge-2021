/*
Your task is to write a function that will take in an array 
of objects containing a sender and a message as a parameter. 
The function will then parse a message from each object, 
add it to an array then return the built array.
*/

// Add your parseMessage function here if you want!
const parseMessage = (origin, message) => {
  return origin+": "+message;
}

const parseTranscripts = (messages) => {
  let returnMsgs = [];
  messages.forEach(message => returnMsgs.push(parseMessage(message['origin'],message['message'])));
  return returnMsgs;
}
