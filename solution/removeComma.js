let myString = "hello,this,is,a,difficult,to,read,sentence";

myString = myString.split(",").join(" ");

console.assert(
  myString === "hello this is a difficult to read sentence",
  "There is something wrong with your solution"
);
