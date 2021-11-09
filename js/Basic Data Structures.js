//Use an Array to Store a Collection of Data
// задание массива 
let yourArray = ['one', 'two', 12, 14.4, 15, null, true]; 


//Access an Array's Contents Using Bracket Notation
// Доступ к элементам массива 
let myArray = ["a", "b", "c", "d"];
myArray[1] = 4;
console.log(myArray);


//Add Items to an Array with push() and unshift()
// Добавление элементов в конец и начало массива 
function mixedNumbers(arr) {
  arr.push(7, "VIII", 9);
  arr.unshift('I', 2, 'three')
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

//Remove Items from an Array with pop() and shift()
// Удаление первого и последнего элемента
function popShift(arr) {
  let popped = arr.pop(); 
  let shifted = arr.shift(); 
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));


//Remove Items Using splice()
// Удаление произвольного элемента при помощи splice
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1,4);
console.log(arr);

//Add Items Using splice()
// Добавление элементов массива , после удаленных при помощи splice ( 3 аргумент)
function htmlColorNames(arr) {
arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond')
  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


//Copy Array Items Using slice()
// Копирование части масслива при помощи Slice(), выбирает от какого элемента и до какого, не включая последний 
function forecast(arr) {
  let newArr = arr.slice(2,4)
  return newArr;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


//Copy an Array with the Spread Operator
// Копирование массива при помощи спред оператора
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr])
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));


//Combine Arrays with the Spread Operator
//



//Check For The Presence of an Element With indexOf()
//



//Iterate Through All an Array's Items Using For Loops
//



//Create complex multi-dimensional arrays
//



//Add Key-Value Pairs to JavaScript Objects
//



//Modify an Object Nested Within an Object
//



//Access Property Names with Bracket Notation
//



//Use the delete Keyword to Remove Object Properties
//



//Check if an Object has a Property
//



//Iterate Through the Keys of an Object with a for...in Statement
//



//Generate an Array of All Object Keys with Object.keys()
//



//Modify an Array Stored in an Object
//