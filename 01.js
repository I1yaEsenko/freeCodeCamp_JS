//Initializing Variables with the Assignment Operator
var a = 9;

//Understanding Uninitialized Variables
var a;
var b;
var c;

a = 5;
b = 10;
c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

//Understanding Case Sensitivity in Variables
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Add Two Numbers with JavaScript, Subtract One Number from Another with JavaScript 
//Multiply Two Numbers with JavaScript,Divide One Number by Another with JavaScript
a = 10 + 10;
var difference = 45 - 33;

var product = 8 * 10;
var quotient = 66 / 33;

//Increment a Number with JavaScript, Decrement a Number with JavaScript
var myVar = 87;
myVar ++;

var myVar = 11;
myVar--;

//Create Decimal Numbers with JavaScript
var ourDecimal = 5.7;
var myDecimal = 5.7;

//Finding a Remainder in JavaScript
var remainder;
remainder = 11 % 3;

//Compound Assignment With Augmented Addition
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

//Compound Assignment With Augmented Subtraction
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;

//Compound Assignment With Augmented Multiplication
var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;

//Compound Assignment With Augmented Division
var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;

// Declare String Variables
let myFirstName = "Ilya"
let myLastName = "Esenko"

// Escaping Literal Quotes in Strings
// \"    "
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// Quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in Strings
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// Concatenating Strings with Plus Operator
var myStr = "This is the start." + " " + "This is the end.";

// Concatenating Strings with the Plus Equals Operator
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Constructing Strings with Variables
var myName = "Ilya Esenko";
var myStr = "My name is " + myName + " and I am well!";

// Appending Variables to Strings 
var someAdjective = "wow";
var myStr = "Learning to code is ";
myStr += someAdjective;

// Find the Length of a String
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line
lastName = lastName.length;
lastNameLength = lastName;

// Use Bracket Notation to Find the First Character in a String
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; 

// Understand String Immutability
var myStr = "Jello World";
myStr = "Hello World"; 

// Use Bracket Notation to Find the Nth Character in a String
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2]; 

// Use Bracket Notation to Find the Last Character in a String
// Setup
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length -1]; 

// Use Bracket Notation to Find the Nth-to-Last Character in a String
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; 

// Word Blanks  
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks = "My " + myNoun + " " + " is very " + myAdjective + " " + "and she can " + myVerb + " " + myAdverb + " " + "."; // Change this line


// Store Multiple Values in one Variable using JavaScript Arrays
var myArray = ["string", 1];

// Nest one Array within Another Array
var myArray = [["first", 1], ["second", 2]];

// Access Array Data with Indexes
var myArray = [50,60,70];
var myData = myArray[0];

// Modify Array Data With Indexes
var myArray = [18,64,99];
myArray[0] = 45;

// Access Multi-Dimensional Arrays With Indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];


// Manipulate Arrays With push() add item in  the end
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
// Manipulate Arrays With pop() delete lsat item
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

// Manipulate Arrays With shift() delete first item
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();

// Manipulate Arrays With unshift() add item into start
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

// Shopping List
var myList = [["Milk", 5],
              ["Meat", 10],
              ["Tomato", 7],
              ["Honey",12],
              ["Salate", 3]];

// Write Reusable JavaScript with Functions
function reusableFunction(){
  console.log("Hi World");
};
reusableFunction();

// Passing Values to Functions with Arguments
function functionWithArgs(args1, args2){
  console.log(args1+args2)
}
functionWithArgs(3, 2);

// Global Scope and Functions
var myGlobal = 10;
function fun1() {
oopsGlobal = 5;
}
// Local Scope and Functions
function myLocalScope() {
  var myVar = 10;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// Global vs. Local Scope in Functions
var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
myOutfit();


// Return a Value from a Function with Return
function timesFive(num){
  return num * 5;
}

// Understanding Undefined Value returned from a Function
// Setup
var sum = 0;
function addThree() {
  sum = sum + 3;
}
// Only change code below this line
function addFive(num){
  sum = sum + 5;
}
addThree();
addFive();

// Assignment with a Returned Value
// Setup
var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

// Stand in Line
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 1));
console.log("After: " + JSON.stringify(testArr));


// Understanding Boolean Values

// Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
        return "Yes, that was true"
    }
    return "No, that was false"
}
trueOrFalse(true);
trueOrFalse(false);


// Comparison with the Equality Operator
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}
testEqual(12);

// Comparison with the Strict Equality Operator

// Practice comparing different values

// Comparison with the Inequality Operator

// Comparison with the Strict Inequality Operator

// Comparison with the Greater Than Operator

// Comparison with the Greater Than Or Equal To Operator

// Comparison with the Less Than Operator

// Comparison with the Less Than Or Equal To Operator

// Comparisons with the Logical And Operator

// Comparisons with the Logical Or Operator

// Introducing Else Statements

// Introducing Else If Statements

// Logical Order in If Else Statements

// Chaining If Else Statements

// Golf Code

// Selecting from Many Options with Switch Statements

// Adding a Default Option in Switch Statements

// Multiple Identical Options in Switch Statements

// Replacing If Else Chains with Switch

// Returning Boolean Values from Functions

// Return Early Pattern for Functions

// Counting Cards

// Build JavaScript Objects

// Accessing Object Properties with Dot Notation

// Accessing Object Properties with Bracket Notation

// Accessing Object Properties with Variables

// Updating Object Properties

// Add New Properties to a JavaScript Object

// Delete Properties from a JavaScript Object

// Using Objects for Lookups

// Testing Objects for Properties

// Manipulating Complex Objects

// Accessing Nested Objects

// Accessing Nested Arrays

// Record Collection

// Iterate with JavaScript While Loops

// Iterate with JavaScript For Loops

// Iterate Odd Numbers With a For Loop

// Count Backwards With a For Loop

// Iterate Through an Array with a For Loop

// Nesting For Loops

// Iterate with JavaScript Do...While Loops

// Replace Loops using Recursion

// Profile Lookup

// Generate Random Fractions with JavaScript

// Generate Random Whole Numbers with JavaScript

// Generate Random Whole Numbers within a Range

// Use the parseInt Function

// Use the parseInt Function with a Radix

// Use the Conditional (Ternary) Operator

// Use Multiple Conditional (Ternary) Operators

// Use Recursion to Create a Countdown

// Use Recursion to Create a Range of Numbers
