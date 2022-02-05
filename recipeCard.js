// Declear a variable that holds an empty object literal (your meal recipe.)
let printRecipe = [];

// Give the object 3 properties, a title (string), a serving (number), and an ingredients (array of strings property.)
mealRecipe = [
  { mealName: "Spaghetti" },
  { serverNumber: 3 },
  { ingredients: ["tomato", "paprika", "fishs"] },
];

//Log each property out separately, using a loop (for, while or do/while)
for (let i = 0; i < mealRecipe.length; i++) {
  printRecipe.push(mealRecipe[i]);
}
console.log(printRecipe);

// [
//   { mealName: 'Spaghetti' },
//   { serverNumber: 3 },
//   { ingredients: ["tomato", "paprika", "fishs"] },
// ]
