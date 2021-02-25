/*object is a fundamental data type in JS, objects are containers storing related data and functionality */
//objects can be assigned to variables just like any JS type, we use curly braces to designate an object literal.
 
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
}; //an object literal with 2 key-value pairs
//properties of a JS object can be accessed with dot notation

/* We fill an object with unordered data. This data is organized into key-value pairs. A key is like a variable name that points to a location in memory that holds a value. */
spaceship.color;
//the second way to access a key's value - bracket notation

spaceship['Fuel Type'];

//an object is a built-in data type for storing key-value pairs
console.log("HELLO".toLowerCase());
console.log("hello".toUpperCase());
console.log('hello'.indexOf('e'));
console.log('alphabet'.length);
console.log('hello'.substr(0,4));
var address = '555 Kingside Rd.';
console.log(address);
 var messItUp = address.toUpperCase().substr(0, 3);
console.log(messItUp);
var colors = ['blue', 'red', 'yellow', 'orange', 'purple', 'brown'];
console.log(colors[3]);
colors.forEach(color => console.log(color + " is my favorite color."));
colors.push('magenta', 'cyan');
console.log(colors);
colors.unshift('grey', 'black');
console.log(colors);
colors.splice(2, 1, 'azul');
console.log(colors);
var steps = ['Slice the bread', 'Smear the peanut butter on bread',  'Place sliced bananas on bread'];
steps.push('Drizzle honey on top');
console.log(steps);
steps.forEach(step => console.log(step));
console.log('--------------');

for (let i = 0; i < steps.length; i++) {
  console.log(steps[i]);
}

var totalPrice = 0;
var prices = [1.75, 3.50, 4.99, 2.50];
for (let i = 0; i < prices.length; i++) {
  totalPrice += prices[i];
}
console.log(totalPrice);

var biggerPrices = [39.99, 29.99, 19.99];
var discountPrices = [];

for (let i = 0; i < biggerPrices.length; i++) {
  var newPrice = prices[i] * 0.75;
  discountPrices.push(newPrice);
}

discountPrices.forEach(price => console.log(Math.ceil(price)));

var planets = ['Mecury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

let smallPlanets = [];
for (let p = 0; p < planets.length; p++) {
  var somePlanets = planets[p].length < 5; 
  smallPlanets.push(somePlanets);
}
console.log(smallPlanets);

let sentence = [];
let words = ['Hello', 'Mister', 'Rogers'];

for (let w = 0; w < words.length; w++) {
  let middle = words[w].substr(1);
  let firstLetter = words[w].slice(1);
  
}
console.log(sentence);

console.log('========================');

let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);
 console.log(countString);

 const goat = {
   dietType: 'herbivore', 
   makeSound() {
     console.log('baaa');
   }, 
   diet() {
     console.log(this.dietType);
   }
 };
 goat.makeSound();
 goat.diet();
 //in our goat object we have a .makeSound() method
 //we can invoke the makeSound method on goat
goat.smell = 'not great';
console.log(goat);

const theGang = ['Shaggy', 'Scooby', 'Velma', 'Fred', 'Daphne'];
theGang.map(letters => console.log(letters.length));