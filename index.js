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



