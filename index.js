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


