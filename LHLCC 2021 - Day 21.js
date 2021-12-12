/*
Your last (!) task is to write a function that will take in 
an array of exchanged messages and an array of organized data. 
The goal is to parse each message, add them to a list and 
return an object containing two keys, transcript with the 
messages, missionData with the missionData object.
*/

const parseMessage = (origin, message) => {
  return origin+": "+message;
}

const parseMissionSummary = (exchanges, missionData) => {
  let parsedMsgs = [];
  exchanges.forEach(exchange => {
    parsedMsgs.push(parseMessage(exchange.origin, exchange.message));
  })
  
  return {transcript : parsedMsgs,
          missionData : missionData};
}
