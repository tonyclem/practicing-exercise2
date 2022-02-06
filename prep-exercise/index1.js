"use strict";

// The state property says what the trafic light's state
const trafficLight = {
  state: "green",
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;
  if (currentState) {
    console.log("the traffic light is on", currentState);
  } else if (currentState) {
    console.log("The traffic light is on yellow");
  }
  break;
}
