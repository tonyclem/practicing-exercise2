const drinkTypes = ["cola", "lemonade", "water"];
const drinkTray = [];

// This is one way of doing it, there are many more. It hopefully showcases a nice use case of the double for loop
// It could also have been written with a while loop that would be a little more efficient
for (let i = 0; i < drinkTypes.length; i++) {
  for (let j = 0; j < 2; j++) {
    if (drinkTray.length < 5) {
      drinkTray.push(drinkTypes[i]);
    }
  }
}

console.log(`Hey guys, I brought a ${drinkTray.join(", ")}!`);
