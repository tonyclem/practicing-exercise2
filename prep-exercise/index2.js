"use strict";

// the ' possibleStates' property define the state (in this case: color)
// in whice the traffic light can be.
// The 'statIndex' property indicates which of the possible states is current.

const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle = 0;

while (cycle < 6) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("the traffic light is on", currentState);
  switch (currentState) {
    case "green":
      trafficLight.stateIndex = 1;
      break;
    case "orange":
      trafficLight.stateIndex = 2;
      break;
    default:
      trafficLight.stateIndex = 0;
      cycle++;
      break;
  }
}
