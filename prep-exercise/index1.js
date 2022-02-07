"use strict";

// The state property says what the trafic light's state
const trafficLight = {
  state: "green",
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;

  switch (rotations) {
    case 1:
      console.log("the traffic light is on green", currentState);
      break;
    case 2:
      console.log("the traffic light is on orange", currentState);
      break;
    default:
      console.log("the traffic light is on red", currentState);
  }
  return currentState;
}
console.log(rotations);

// TODO
// if the color is green, turn it orange
// if the color is orange, turn it red
// if the color is red, add 1 to rotations and turn it green

/**
 * The output should be:
The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red
*/
