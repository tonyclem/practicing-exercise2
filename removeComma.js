let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.replace(/,/g, " "));
console.assert(
  myString === "hello this is a difficult to read sentence",
  " There is something wrong with your solution"
);
