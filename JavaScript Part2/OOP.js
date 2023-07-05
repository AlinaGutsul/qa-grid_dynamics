//PROTOTYPES
/*Task 1. Given the following objects:

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

1. Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, 
pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
2. Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed. */
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

//head.classes will be faster

/*Task 2.
We have rabbit inheriting from animal.
If we call rabbit.eat(), which object receives the full property: animal or rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

Answer - When rabbit.eat() is called, the eat() method is invoked on the rabbit object. 
The this keyword within the eat() method refers to the object on which the method is called, which, in this case, is rabbit. 
The full property will be added to the rabbit object
*/

//CLASSES
/*Task 1. The Clock class (see the sandbox) is written in functional style. Rewrite it in the “class” syntax.

function Clock({ template }) {
    let timer;
    function render() {
     let date = new Date();
      let hours = date.getHours();
     if (hours < 10) hours = '0' + hours;
      let mins = date.getMinutes();
     if (mins < 10) mins = '0' + mins;
      let secs = date.getSeconds();
     if (secs < 10) secs = '0' + secs;
      let output = template
       .replace('h', hours)
       .replace('m', mins)
       .replace('s', secs);
      console.log(output);
   }

    this.stop = function() {
     clearInterval(timer);
   };

    this.start = function() {
     render();
     timer = setInterval(render, 1000);
   };
  }

  let clock = new Clock({template: 'h:m:s'});
 clock.start();

*/
//I'll comment this, but it works
/*class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer = null;
  }

  render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();*/

//Objects
/*Task 1.
Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30
};

console.log( count(user) ); // 2 */

function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: "John",
  age: 30,
};

console.log("Number of properties in the object - " + count(user));
console.log("\n");
/*Task 2.
There is a salaries object with arbitrary number of salaries.
Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
If salaries is empty, then the result must be 0.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650 */

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log("Sum of all salaries - " + sumSalaries(salaries));
console.log("\n");

//DESTRUCTURING ASSIGNMENT
/*Task 1.
We have an object:

let user = {
  name: "John",
  years: 30
};

Write the destructuring assignment that reads:

-name property into the variable name.
-years property into the variable age.
-isAdmin property into the variable isAdmin (false, if no such property)

Here’s an example of the values after your assignment:
let user = { name: "John", years: 30 };
// your code to the left side:
// ... = user

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false */

let { name: userName, age, isAdmin = false } = user;

console.log("Name - " + userName);
console.log("Age - " + age);
console.log("Admin? " + isAdmin);
console.log("\n");

//MAP AND SET
/*Task 1.
Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.
P.S. Here strings are used, but can be values of any type.
P.P.S. Use Set to store unique values.*/

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
console.log("Unique items of arr - " + unique(values));
console.log("\n");

/*Task 2.
We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
But that doesn’t work:

let map = new Map();
map.set("name", "John");
let keys = map.keys();
// Error: keys.push is not a function
keys.push("more");

Why? How can we fix the code to make keys.push work?*/

//The reason keys.push("more") doesn't work is that map.keys() returns an iterator, not an array.
//The iterator does not have the push method available
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log("Array of map.keys() - " + keys);
