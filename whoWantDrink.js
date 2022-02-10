/**
 * You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.
 *
 * Declare a variable that holds an empty array, called drinkTray.
 * Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
 *
 * Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")
 */

// There are 3 different types of drinks:
const drinkTypes = ["cola", "lemonade", "water"];
let cola = 0;
let lemonade = 0;
let water = 0;

let drinkTray = [];
while (drinkTray.length < 5) {
  let drinkBar = drinkTypes[Math.floor(Math.random() * drinkTypes.length)];

  if (drinkBar === "cola" && cola < 2) {
    cola++;
    drinkTray.push(drinkBar);
  } else if (drinkBar === "water" && water < 2) {
    water++;
    drinkTray.push(drinkBar);
  } else if (drinkBar === "lemonade" && lemonade < 2) {
    lemonade++;
    drinkTray.push(drinkBar);
  }
}
console.log(`"Hey guys, I brought a ${drinkTray}"`);

// OutPrint Buy: "Hey guys, I brought a water,lemonade,cola,lemonade,cola"
