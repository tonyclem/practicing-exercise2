"use strict";

const trafficLight = {
  state: "green",
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;
  console.log("the traffic light is on", currentState);
  break;
}
