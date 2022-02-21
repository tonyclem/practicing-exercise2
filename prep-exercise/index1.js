"use strict";

// The state property says what the trafic light's state
const trafficLight = {
  state: "green",
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;
  console.log("The traffic light is on", currentState);
  switch (currentState) {
    case "green":
      trafficLight.state = "green";
      break;
    case "orange":
      trafficLight.state = "orange";
      break;
    default:
      trafficLight.state = "red";
      rotations++;
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
