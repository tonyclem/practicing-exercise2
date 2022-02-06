// Declare a variable that  holds an  empty array, called drinkTray.
let drinkTray = [];

// Create a loop that runs 5 times. on each iteration, push a drink into the drinkTray variable. the drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.

// Here i declear a drink variable in other so loop throught it
let drink = ["cole", " cole", " lemonade", " lemonade", " water", " water"];

for (let drinkValue of drink) {
  drinkTray.push(drinkValue);
  //   console.log(drinkValue);
  //   console.log(`Hey guys, I brought a  ${drinkTray}`);
}

// Log to the console: "Hey guy, I brought a [INSERT VALUES FROM ARRAY]!" (for example: "hey guys, I brought a cola, cole , lemonade, lemonade, water!")

console.log(`Hey guys, I brought a  ${drinkTray}`);

// There are 3 different type of drink
// const drinkTray = ['cole', 'lemonade', 'waters']
