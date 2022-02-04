"use strict";

const trafficLight = {
  possibleStates: ["green", "oragan", "red"],
  stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("the traffic light is on", currentState);

  break;
  // if the color id green, turn it orange
  // if the color id orange, turn it red
  // if the color id red, turn it orange and 1 to rotations and turn it green
}

let cycle2 = 0;
do {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("the traffic light is on", currentState);
  break;
} while (cycle2 < 2);
