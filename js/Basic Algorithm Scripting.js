
//Convert Celsius to Fahrenheit

function convertToF(celsius) {
  let fahrenheit = (1.8 * celsius) + 32;
  return fahrenheit;
}

console.log(convertToF(30));

//Reverse a String

function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0 ; i--){
    newStr += str[i]
  }
  
  return newStr;
}

console.log(reverseString("hello"));

//Factorialize a Number

function factorialize(num) {
  let result = 1;
  for (let i = 1; i <= num;i++){
    result *= i;
  }
  return result;
}

console.log(factorialize(5));