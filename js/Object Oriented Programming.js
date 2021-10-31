// Task: Create a Basic JavaScript Object 
// Создание объекта
let dog = {
  name: "Boby",
  numLegs: 4
};

// Task: Use Dot Notation to Access the Properties of an Object 
// Обращение к свойству объекта
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name)
console.log(dog.numLegs) 

// Task: Create a Method on an Object
// Создание медода в объекте
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() { return "This dog has " + dog.numLegs + " legs."}
};
console.log(dog.sayLegs());

// Task: Make Code More Reusable with the this Keyword
// Использование this 
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
dog.sayLegs();

// Task: Define a Constructor Function
// Определение объекта через функцию Конструктора
function Dog(){
  this.name = "Spot",
  this.color = "Black",
  this.numLegs = 4
}

// Task: Use a Constructor to Create Objects
// Создание объекста с использованием конструктора 
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Dog();

// Task: Extend Constructors to Receive Arguments
// Получене аргументов для конструктора
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;

}
let terrier = new Dog("bob", "brown");

// Task: Verify an Object's Constructor with instanceof
// Проверка объекта на создание конструктором с помощью instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(4);
myHouse instanceof House;

// Task: Understand Own Properties
// Определение общих свойсв обьекта
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary){
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps)

// Task: Use Prototype Properties to Reduce Duplicate Code
// Испольнования prototype для избегания дублирования кода 
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
console.log(beagle.numLegs)


// Task: Iterate Over All Properties
// Итерация по всем свойства Объекта
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
let ownProps = [];
let prototypeProps = [];

for (let property in beagle){
  if (beagle.hasOwnProperty(property)){
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}


// Task: Understand the Constructor Property
//
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog){
    return true;
  } else {
    return false;
  }
}
// Task: Change the Prototype to a New Object
// Изменение прототипа в новом объекте
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: function (){
  },
  describe: function (){
  }
};
// Task: Remember to Set the Constructor Property when Changing the Prototype
//Свойство конструктора при изменении прототипа
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// Task: Understand Where an Object’s Prototype Comes From
//
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);


// Task: Understand the Prototype Chain
//

// Task: Use Inheritance So You Don't Repeat Yourself
//

// Task: Inherit Behaviors from a Supertype
//

// Task: Set the Child's Prototype to an Instance of the Parent
//

// Task: Reset an Inherited Constructor Property
//

//Task: Add Methods After Inheritance
//

// Task: Override Inherited Methods
//

// Task: Use a Mixin to Add Common Behavior Between Unrelated Objects
//

// Task: Use Closure to Protect Properties Within an Object from Being Modified Externally
//

// Task: Understand the Immediately Invoked Function Expression (IIFE)
//

// Task: Use an IIFE to Create a Module
//
