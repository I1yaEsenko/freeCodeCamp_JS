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
// Комбинирование массивом спред оператаром 
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ["learning", ...fragment, "is", "fun"]; 
  return sentence;
}
console.log(spreadOut());

//Check For The Presence of an Element With indexOf()
// Существует ли элемент массива, выводит позицию, если нет то -1
function quickCheck(arr, elem) {
  if ( arr.indexOf(elem) >= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//Iterate Through All an Array's Items Using For Loops
//Итерация по массиву и удаление элемента с заданым аргументом
let newArr = [];
for ( let i = 0; i < arr.length; i++){
  if (arr[i].indexOf(elem) == -1){
    newArr.push(arr[i])
  }
  
return newArr;
}
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));


//Create complex multi-dimensional arrays
// Создание многоуровневого массива
let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  [
    ['loop', 'shift', 6, 7, 1000, 'method']
  ],
  [
    [
      ['concat', false, true, 'spread', 'array']
    ]
  ],
  [
    [
      [
        ['mutate', 1327.98, 'splice', 'slice', 'push'],
        ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
      ]
    ]
  ]
];
myNestedArray[1][0][0] = 'deep';
myNestedArray[2][0][0][0] = 'deeper';
myNestedArray[3][0][0][0][0] = 'deepest';
console.log(myNestedArray)


//Add Key-Value Pairs to JavaScript Objects
// Добавление пар ключ-значение в объекты JavaScript
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
foods.bananas =13;
foods.grapes = 35;
foods.strawberries = 27;
console.log(foods);


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