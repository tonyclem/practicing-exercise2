const drinkTypes = ["cola", "lemonade", "water"];
let drinkTray = [];

for (let i = 0; i < 5; i++) {
  let drinkBar = drinkTypes[Math.floor(Math.random() * drinkTypes.length)];
  drinkTray.push(drinkBar);

  console.log(`"Hey guys, I brought a ${drinkTray[i]}"`);
}

// OutPrint but in random
// "Hey guys, I brought a water"
// "Hey guys, I brought a cola"
// "Hey guys, I brought a cola"
// "Hey guys, I brought a water"
// "Hey guys, I brought a lemonade"
