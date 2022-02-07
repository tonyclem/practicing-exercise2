"use strict";

// the ' possibleStates' property define the state (in this case: color)
// in whice the traffic light can be.
// The 'statIndex' property indicates which of the possible states is current.

const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 2,
};

let cycle = 0;

while (cycle < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  switch (cycle) {
    case 0:
      console.log("the traffic light is on", currentState);
      break;
    case 2:
      console.log("the traffic light is on", currentState);
      break;
    default:
      console.log("the traffic light is on red");
  }
  return currentState;
}
