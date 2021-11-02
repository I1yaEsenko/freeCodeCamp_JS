
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

