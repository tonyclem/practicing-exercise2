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

// i declared this variable in other to use it with each property in the drinkTypes
let cola = 0;
let lemonade = 0;
let water = 0;

// here we hava an empty array called drinkTray that will receive value
let drinkTray = [];

// using while loop, to loop throught the drinkTray length, to check if the length is less then 5, as long as the test condition evaluates to true. the condition will continues looping until is falsy
while (drinkTray.length < 5) {
  // declaring new variable called drinkFromBar and passing drinkTypes to, as a new value, and using Math random to random the drinkTypes
  let drinkFromBar = drinkTypes[Math.floor(Math.random() * drinkTypes.length)];

  // using if conditional statement to check if drinkFromBar have the property call cola with  === operator, as well as using and && logical and passing cole, water and lemonade, but by default i set it to zero. checking if the boolean property i pass in is less the 2, then increment it by one and push the value of drinkFromBar inside the empty array called drinkTray .
  if (drinkFromBar === "cola" && cola < 2) {
    cola++;
    drinkTray.push(drinkFromBar);
  } else if (drinkFromBar === "water" && water < 2) {
    water++;
    drinkTray.push(drinkFromBar);
  } else if (drinkFromBar === "lemonade" && lemonade < 2) {
    lemonade++;
    drinkTray.push(drinkFromBar);
  }
}
// this print out our values
console.log(`Hey guys, I brought some drink a ${drinkTray}`);

// OutPrint Buy: "Hey guys, I brought a water,lemonade,cola,lemonade,cola"
