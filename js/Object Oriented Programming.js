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
// Цепи prototype
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);  // yields true
Object.prototype.isPrototypeOf(Dog.prototype);

// Task: Use Inheritance So You Don't Repeat Yourself
// Принцип наследования, чтобы не повторять части кода
function Cat(name) {
  this.name = name;
}
Cat.prototype = {
  constructor: Cat,
};
function Bear(name) {
  this.name = name;
}
Bear.prototype = {
  constructor: Bear,
};

function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Task: Inherit Behaviors from a Supertype
// Создание объекта при помощт Object.create
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

// Task: Set the Child's Prototype to an Instance of the Parent
// НАследование child ом всех свойств родителя
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype)
let beagle = new Dog();

// Task: Reset an Inherited Constructor Property
// Сброс унаследованного свойства конструктора
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

//Task: Add Methods After Inheritance
// Добавление методов после наследования 
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function (){
  console.log("Woof!")
}
let beagle = new Dog();
beagle.bark();
beagle.eat();

// Task: Override Inherited Methods
// Переопределение унаследованных методов
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."}

let penguin = new Penguin();
console.log(penguin.fly());

// Task: Use a Mixin to Add Common Behavior Between Unrelated Objects
// Использование миксинов для общих свойств несвязных объектов
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj){
  obj.glide = function (){
    console.log("Oooopsss");
  }
}

glideMixin(bird);
glideMixin(boat);
bird.glide();
boat.glide();


// Task: Use Closure to Protect Properties Within an Object from Being Modified Externally
// Защита свойств внутри объекта от изменений из вне
function Bird() {
  let weight = 15;
  this.getWeight = function() {
    return weight;
  }
}

// Task: Understand the Immediately Invoked Function Expression (IIFE)
//

// Task: Use an IIFE to Create a Module
//
