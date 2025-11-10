// alert("JS is Working")

//comments in js use two forward slashes

console.log("This is a message from the app.js")

// this is how we would declare a variable in c#
// string myName = "Karla";

// we know that c# is a strict programming language so we have to declare data type.

//JS is a loosely typed programming language
// we use the let prefix to declare variables when we would need to change the variable later
let myString = "Ken";
let anotherString = 'Martinez'; // JS will allow both single and double quotes for strings
let myInt = 4; //this is an integer
let myBool = true; //this is a boolean
let myNull = null; //this is a null value

var OldWay = "this is the old way to create variables";

myString = "Karla";
console.log(myString);

//we can use const to prevent reassignment of the variable
const pi = 3.14;
// pi = 4;

console.log(myInt + pi);

console.log(myString + myInt); //js will convert the integer into a string and concantenate
// js will implicitly convert variables as necessary

console.log(myString + " " + anotherString); // concatenation in JS
console.log(`FullName: ${myString} ${anotherString}`) //template literals in JS

let myArray = [1,2,3,4, "five", true];
console.log(myArray);

let myElement = document.getElementById("myElement");
console.log(myElement)
myElement.textContent = "This text was changed by JS"

//ken's dupe