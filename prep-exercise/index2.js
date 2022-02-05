"use strict";

// the ' possibleStates' property define the state (in this case: color)
// in whice the traffic light can be.
// The 'statIndex' property indicates which of the possible states is current.

const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle2 = 0;
for (let cycle = 0; cycle < trafficLight.possibleStates.length; cycle++) {
  if (trafficLight.possibleStates[0] !== "green") {
    console.log(`The traffic light is on ${trafficLight.possibleStates[0]}`);
  } else if (trafficLight.possibleStates[1] !== "orange") {
    console.log(`The traffic light is on ${trafficLight.possibleStates[1]}`);
  } else if (trafficLight.possibleStates[2] === "red") {
    console.log(`The traffic light is on ${trafficLight.possibleStates[2]}`);
  }
}
// for (let cycle of trafficLight.possibleStates) {
//   if (cycle === trafficLight.possibleStates[0]) {
//     console.log(`The traffic light is on ${trafficLight.possibleStates[0]}`);
//   } else if (cycle === trafficLight.possibleStates[1]) {
//     console.log(`The traffic light is on ${trafficLight.possibleStates[1]}`);
//   } else if (cycle === trafficLight.possibleStates[2]) {
//     console.log(`The traffic light is on ${trafficLight.possibleStates[2]}`);
//     continue;
//   }
// }
// while (cycle < 2) {
//   const currentState = trafficLight.possibleStates[trafficLight.stateIndex];

//   if (currentState) {
//     console.log("the traffic light is on", currentState);
//   } else if (currentState) {
//     console.log("the traffic light is on", currentState);
//   }

//   // for (let loopThroughIndex of currentState) {
//   //   console.log(loopThroughIndex);
//   // }
//   // if the color id green, turn it orange
//   // if the color id orange, turn it red
//   // if the color id red, turn it orange and 1 to rotations and turn it green
//   break;
// }

// do {
//   const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
//   console.log("the traffic light is on", currentState);
//   break;
// } while (cycle2 < 2);

// let cycle = 0;
