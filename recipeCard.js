// Declear a variable that holds an empty object literal (your meal recipe.)

// Give the object 3 properties, a title (string), a serving (number), and an ingredients (array of strings property.)
let holdObject = {
  title: "Spaghetti",
  serving: 3,
  ingredients: ["tomato", "paprika", "fish"],
};

//Log each property out separately, using a loop (for, while or do/while)
for (let [keyworld, valuess] of Object.entries(holdObject)) {
  console.log(`${keyworld}: ${valuess}`);
}

//  Declare a variable that holds an empty object literal (your meal recipe).
