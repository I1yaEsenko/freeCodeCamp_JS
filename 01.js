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
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}
testStrict(10);

// Practice comparing different values
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality("10", 10))
console.log(compareEquality("20", 20))

// Comparison with the Inequality Operator
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(15));


// Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));

// Comparison with the Greater Than Operator
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}
testGreaterThan(10);
console.log(testGreaterThan(101));
console.log(testGreaterThan(11));
console.log(testGreaterThan(1));


// Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}
console.log(testGreaterOrEqual(0));
console.log(testGreaterOrEqual(9));
console.log(testGreaterOrEqual(10));
console.log(testGreaterOrEqual(11));
console.log(testGreaterOrEqual(19));
console.log(testGreaterOrEqual(21));
console.log(testGreaterOrEqual(100));

// Comparison with the Less Than Operator
function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }

    if (val < 55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}
testLessThan(10);

// Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}
testLessOrEqual(10);

// Comparisons with the Logical And Operator
function testLogicalAnd(val) {
    // Only change code below this line

    if ( val <= 50 && val >= 25 ) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(0));
console.log(testLogicalAnd(24));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(50));
console.log(testLogicalAnd(51));
console.log(testLogicalAnd(75));
console.log(testLogicalAnd(80));

// Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
console.log(testLogicalOr(15))

// Introducing Else Statements
function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    }
    else {
        return "5 or Smaller";
    }
}
testElse(4);

// Introducing Else If Statements
function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "5 or Smaller";
    }
    return result;
}
testElse(4);

// Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(4));

// Chaining If Else Statements
function testSize(num) {
    // Only change code below this line
    if ( num < 5){
        return 'Tiny';
    } else if ( num < 10 ){
        return 'Small';
    } else if (num < 15){
        return 'Medium';
    } else if (num < 20){
        return 'Large';
    } else if (num >= 20){
        return 'Huge';
    } else{

        return "Change Me";
        // Only change code above this line
    }}
testSize(7);

// Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1){
        return names[0]
    } else if (strokes <= par - 2){
        return names[1];
    } else if (strokes == par - 1){
        return names[2];
    } else if (strokes == par){
        return names[3];
    } else if (strokes == par + 1){
        return names[4];
    } else if (strokes == par + 2){
        return names[5];
    } else if (strokes >= par + 3){
        return names[6];
    } else {
        return "Change Me";
    }
}
console.log(golfScore(4, 7));


// Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}
console.log(caseInSwitch(4));


// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
    var answer = "";
    switch(val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
    }
    return answer;
}
console.log(switchOfStuff("a"));

// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;}
    // Only change code above this line
    return answer;
}

sequentialSizes(1);
// Replacing If Else Chains with Switch
function chainToSwitch(val) {
    var answer = "";
     if (val === "bob") {
      answer = "Marley";
    } else if (val === 42) {
      answer = "The Answer";
    } else if (val === 1) {
      answer = "There is no #1";
    } else if (val === 99) {
      answer = "Missed me by this much!";
    } else if (val === 7) {
      answer = "Ate Nine";
    }
    switch (val){
      case "bob":
      answer = "Marley";
      break;
      case 42:
      answer = "The Answer";
      break;
      case 1:
      answer = "There is no #1";
      break;
      case 99:
      answer = "Missed me by this much!";
      break;
      case 7:
      answer = "Ate Nine";
      break;
    }
    return answer;
  }
  
  console.log(chainToSwitch("bob"));

// Returning Boolean Values from Functions
function isLess(a, b) {
    return a < b;
  }
  isLess(10, 15);


// Return Early Pattern for Functions
function abTest(a, b) {
    if (a < 0 || b < 0 ){
      return undefined;
    }
      return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
    console.log(abTest(-2,2));

// Counting Cards
var count = 0;
function cc(card) {
switch (card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
  break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count--;
  break;
}
  let result = "Hold";
  if (count > 0){
    result = "Bet";
  } 
  return count + " " + result;
}
console.log(cc('J'))

// Build JavaScript Objects
var myDog = {
    "name": "Ebobo",
    "legs": 3,
    "tails": 1,
    "friends": ["Jasica", "Billy"]
    };
// Accessing Object Properties with Dot Notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  var hatValue = testObj.hat;      // 
  var shirtValue = testObj.shirt;    
// Accessing Object Properties with Bracket Notation
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  var entreeValue = testObj["an entree"];   
  var drinkValue = testObj["the drink"];    


// Accessing Object Properties with Variables
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 12;       
var player = testObj[playerNumber];   
console.log(player)

// Updating Object Properties
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.name = 'Happy Coder'


// Add New Properties to a JavaScript Object
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog.bark = "woof";
  console.log(myDog)
  
// Delete Properties from a JavaScript Object
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  delete myDog.tails;

// Using Objects for Lookups
function phoneticLookup(val) {
    let result = "";
    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    }
    result = lookup[val];
    return result;
  }
  
  console.log(phoneticLookup("charlie"));
// Testing Objects for Properties
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp) === true){
      return obj[checkProp];
    } else {
      return "Not Found";
    }
  }
  
// Manipulating Complex Objects
const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {"artist": "Bob Marley",
                    "title": "Woman No Cry",
                    "release_year": 1982,
                    "formats": [
                      "CD",
                      "DVD",
                      "LP"
                    ]
  }
  ];
// Accessing Nested Objects
const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  const gloveBoxContents = myStorage.car.inside["glove box"];

// Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
const secondTree = myPlants[1].list[1];

// Record Collection
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  function updateRecords(records, id, prop, value) {
    if ( prop !== "tracks" && value !== ""){
      records[id][prop] = value;
    } else if ( prop === "tracks" && records[id].hasOwnProperty("tracks") === false){
      records[id][prop] = [value];
    } else if (prop === "tracks" && value !== ""){
      records[id][prop].push(value);
    } else if (value === ""){
      delete records[id][prop]
    }
    return records;
  }
  console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

// Iterate with JavaScript While Loops
const myArray =  [];
let i = 5;
while ( i >= 0 ){
  myArray.push(i);
  i--;
}
console.log(myArray)
// Iterate with JavaScript For Loops
const myArray = [];
for (let i = 1; i < 6; i++){
  myArray.push(i)
}
console.log(myArray)

// Iterate Odd Numbers With a For Loop
const myArray = [];
for (let i = 1; i < 10; i +=2){
  myArray.push(i)
}
console.log(myArray)

// Count Backwards With a For Loop
const myArray = [];
for (let i = 9; i > 0; i-=2){
  myArray.push(i)
}
console.log(myArray)

// Iterate Through an Array with a For Loop
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++){
  total += myArr[i]; 
}
console.log(total)

// Nesting For Loops
function multiplyAll(arr) {
    let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
    product *= arr[i][j]
    }}
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
// Iterate with JavaScript Do...While Loops
const myArray = [];
let i = 10;
do {
  myArray.push(i);
  i++;
} while (i<10);
console.log(myArray);

// Replace Loops using Recursion
function sum(arr, n) {
  if (n <= 0){
    return 0;
  } else {
    return sum(arr, n-1) + arr[n -1];
  }
}

console.log(sum([2, 3, 4],3))

// Profile Lookup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for ( let i = 0; i < contacts.length; i++)
  if ( contacts[i].firstName === name ) {
    return contacts[i][prop] || "No such property"
  } 
     return "No such contact"
}
console.log(lookUpProfile("Akira", "likes"));

// Generate Random Fractions with JavaScript
function randomFraction() {
  return Math.random();
}

// Generate Random Whole Numbers with JavaScript
function randomWholeNum() {
  return Math.floor(Math.random()*10);
}
console.log(randomWholeNum())

// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
// Use the parseInt Function
function convertToInteger(str) {
  return parseInt(str);
  }
  
  convertToInteger("56");
// Use the parseInt Function with a Radix
function convertToInteger(str) {
  return parseInt(str, 2 ) /// radix (str , radix)
  }
  
  console.log(convertToInteger("10011"));
// Use the Conditional (Ternary) Operator

// Use Multiple Conditional (Ternary) Operators

// Use Recursion to Create a Countdown

// Use Recursion to Create a Range of Numbers
