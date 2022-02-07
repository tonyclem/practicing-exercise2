"use strict";

// The state property says what the trafic light's state
const trafficLight = {
  state: "green",
};

let rotations = 2;
while (rotations < 3) {
  const currentState = trafficLight.state;

  switch (rotations) {
    case 0:
      console.log("the traffic light is on", currentState);
      break;
    case 1:
      console.log("the traffic light is on orange");
      break;
    default:
      console.log("the traffic light is on red");
  }
  return currentState;
}

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
