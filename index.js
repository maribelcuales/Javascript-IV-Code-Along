////////  Review on 'this'  /////////

/*
# 1: Window Binding
- 'this' defaults to the window or the global object if you're a node 
- To prevent window binding and instead have it return undefined: USE STRICE MODE 

# 2: Implicit Binding
Q: What do we imply that 'this' refers to an implicit binding? 
- When the function is invoked, we look to the left of the dot and not is what 'this' refers to. 

Q: What types of objects can you apply to implicit binding?
- Objects with methods 

Q: How can we tell a function what the 'this' keyword should be in explicit binding? 
- Use .call , .apply, .bind

Q: Which of the three immediately invoke the function?
- .call and .apply

Q: What's the difference between .call and .apply?
- .apply passes arguments as an array. 
- .call you pass in your arguments one by one

Q: Explain what .bind does?
- It doesn't immediately invoke, stores it for future use, creates a new function that you have to invoke.
- "It does not immediately invoke the function. It returns a brand new function that you can invoke later. "

Q: What does our 4th rule of New Binding do? (Explain what New Binding does.)
- When a function is invoked as a constructor function using the New keyword, this points to the new object that's cQreated. 

Q: What is a constructor function and when is it useful? (Its purpose)
- A constructor function can construct other objects. 
- We can use constructor functions to share methods across thousands of objects. 
- That's why we use that keyword to abstract the methods out. 

Q: What is the problem with constructor functions? 
- When a constructor function is made, a new object is made. And  if the method is built on the constructor function, it has to paint that method every time invocation occurs and it's super memory intensive. 

Q: How did we take our methods out. What did we use to extract our methods out of our constructor functions? 
- Use the prototype keyword 

Q: What does prototype do? 
- It is how we can pass methods across thousands of objects just like we did before with our constructor function but we can store it now for later. 
- We don't have to paint that method until we invoke it. 

Q: What is prototypical inheritance? 
- Arrays can do everything functions can do and everything objects can do. 
- Functions can do everything objects can do.
- Everything in JS is an object. 
*/

// Constructor Function (review)
// the old way

/*
function Pet(attributes) {
  this.name = attributes.name;
  this.location = attributes.location;
  this.phrase = attributes.phrase;
}

Pet.prototype.speak = function() {
  return `${this.name} says ${this.phrase}`;
}

// Creating a Child(review)
// the old way 


function Child(childAttributes) {  // same with function Child(name, location, phrase)
  Pet.call(this, childAttributes) // binding this to parent
  this.isChild = childAttributes.isChild; // this will be for any special attributes to the child
}

Child.prototype = Object.create(Pet.prototype); // inheriting methods from parent
*/


////////////    class   /////////////

// classes don't exist in Javascript. They are syntactical sugar/ syntax. Classes are just a nicer way to write this stuff. 

// classes are not hoisted - that means if we are putting information above a class we have referenced it will not work.
// they use strict - it prevents window binding, forces us to write cleaner code with errors if we do not 
// Methods are a special syntax. Methods no longer need the function keyword. They are also built into our constructor functions. 
// A constructor function is visible 

// Child Classes 
// extends links up the dunder proto - it tells us where we came from 
// extends tells super where to go or what to super to 
//extends + super do what object.create and parent.call did 


//convert to class syntax (class is es6 syntax)

/*
class Pet{
  constructor(attributes){
    this.name = attributes.name;
    this.location = attributes.location;
    this.phrase = attributes.phrase; 
  } // method go here 
  speak(){
    return `${this.name} says ${this.phrase}`;
  }
}
*/

//Creating a Child using a class syntax
// use 'extends' to tell the Child who is its parent
// super - to make the Child inherit the parent's attributes
// super and extends do what .call and .create did

/*
class Child extends Pet{
  constructor(childAttributes){
    super(childAttributes)
    // any special attributes for the Child go here
  } // any special methods for the child goes here
}


const petOne = new Pet({
  name: 'Ada',
  location: 'Canada',
  phrase: 'woof woof'
})

const petTwo = new Child({
  name: 'Noa',
  location: 'Canada',
  phrase: 'bark bark'
})
*/

// console.log(petOne.speak());
// console.log(petTwo.speak());


// Write  a class from scratch 

class Parent{
	constructor(attributes){
		this.name = attributes.name;
		this.location = attributes.location;
		this.work = attributes.work;
	} // write methods here
	job(){
		return `${this.name} is a ${this.work}`;
	}
}

class Child extends Parent{
  constructor(attributes){
    super(attributes) // this replaces Parent.call
    // special attributes for the Child
    this.major = attributes.major;
  } // special methods for the child
  study(){
    return `${this.name} is studying ${this.major}`;
  }
}

const mom = new Parent({
  name: 'Mom',
  location: 'USA',
  work: 'Computer Scientist'
});

const daughter = new Child({
  name: 'Sara',
  location: 'USA',
  work: 'Student',
  major: 'Bio Chemistry'
})

console.log(mom.job());
console.log(daughter.job());
console.log(daughter.study());


// Parent don't have access to child methods 
// In the example, mom do not have access to daughter's study method 
// Chain of inheritance goes down but does not go back up 


// Give mom a grandchild 
// Inherit attributes from parent and child 
// have special attributes and own method

class GrandChild extends Child{
  constructor(other){
    super(other) // this replaces Parent.call
    // any special attribute for the grandchild go here
    this.toy = other.toy;  
  } // any special methods for the grandchild go here
  play(){
    return `${this.name} plays with ${this.toy}`;
  }
}

class Pet extends GrandChild{
  constructor(attrs){
    super(attrs)  // this replaces .ca;;
    // any special attributes go here
    this.food = attrs.food;
  } // any special methods for pet go here 
  eat(){
    return `${this.name} eats ${this.food}`;
  }
}

const grandBaby = new GrandChild({
  name: 'Brit',
  location: 'USA',
  work: 'a baby',
  major: 'first words',
  toy: 'rattle'
})

const fish = new Pet({
  name: 'Goldie',
  location: 'fishbowl',
  work: 'swimming like its my job',
  major: 'bubble formation',
  toy: 'sunken ship',
  food: 'fish food'
}); 

console.log(grandBaby.job());
console.log(grandBaby.study());
console.log(grandBaby.play()); 

console.log(fish.job());
console.log(fish.study());
console.log(fish.play()); 
console.log(fish.eat());


///////		Skeleton of class syntax		/////////

class Parent{
  constructor(param){
    // assign attributes here
  }
  // methods go here
}


// child 
class Child extends Parent{
  constructor(param){
    super(param);
    // assign any special child attributes here
  }
  // add any specific child methods here
}


// create objects here
const something = new Parent({
  // key value pairs
})

const somethingElse = new Child({
  // key value pairs that are inherited from parent
  // key value pairs that are special to the child
})


// invoke methods here 


//////////    REVIEW    //////////////

/*
Q: Difference between parameters vs arguments
- parameters/ params are place holders while arguments are actual values. 

parameters: placeholder values function() inside of these parenthesis are called parameters
arguments: are the values that get passed in 

function add(num1, num2){  // the parameters are num1 and num2 they hold the place for the numbers that will be passed in 
  return num1 + num2
}

add(2, 3); // 2 and 3 are the arguments 
console.log(add(2,3));  // to see the result in the console 


// object 

object {
// key/ value pairs (these are called properties)

// methods - these are functions that belong to an object 
}


// Arrays []  
// think of an array of information
// Order matters in an array 
// the computer assigns an index to every item in the array - that index starts at 0 


// Callbacks + Higher Order Functions 
// callbacks are passed into higher order functions
// callbacks are given and higher order functions receive 

function maths(num1, num2, cb){
  return cb(num1, num2);
  // add(2, 3); 
  // subtract(4, 2); 
}

const add = (num1, num2) =>{
  return num1 + num2;
}      

const subtract = (num1, num2) =>{
  return num1 - num2;  
}

maths(2, 3, add);  // 5
maths(4, 2, subtract);  // 2 

// REVIEW:  loops and conditional 
// conditional statements = if and else statements  


*/

