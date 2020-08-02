//Important topics to review and be expected to explain for peer coding!
//Booleans, hoisting, loops, closures, functional programming, callbacks, switch statements, Array Map


//What is a boolean? A boolean in js is a true or false statement. 

let bool = true; //true
var x = 7; // true

//Key things to remember with booleans
var f = '' // false
var n = null //false
var un = undefined //false
var z = 0 // false & also false for -0

//What is Hoisting?
//Hoisting is when you're coding in JS and you are trying to run a line or block of code by either calling the function =>
//or logging it to the console before the variable declaration and initialization.

//The code below is just an example of someone trying to log the variable hoist before declaring it at top
//console.log(hoist);
//let hoist = 'I like coding.';

//The code below is the interpretation of what it looks like to the computer running the program

//let hoist
//console.log(hoist);
//hoist = 'I like coding.';

//Hoisting also can be applied to functions as well. One thing to remember that all undeclared variables are global variable
//let hoist = () => {
  //  a = 20;
    //var b = 30;
//}
//console.log(a) // output: 20 because since a is undeclared it is considered a global variable
//console.log(b) // output: Reference error. Cannot access b since it is within the hoist() function


//What is a loop?
// A loop allows the the constant running of a block of code until the conditions forces it to stop
//Different kinds of loops such as: for, for/in, while, do/while

//Example of a for loop
//let arr1 = [1,2,3,4,5];
//for (i= 0; i < 4; i++) {
  //  arr1[i] * 2;
//}
//console.log(arr1);

//Example of a while loop
let b = 0;
let c = 0;
while (b * 2 < 24) {
    document.write('  B is still less than 10');
    b++;
    c += b;
}
document.write('  c is cool');

//What is a closure?
//A closure is a part of the Javascript language. It allows a built in function to have has access to its encapsulating function's scope chain
//After the function's executions context is ran

//Create a new function. We will call it fn
function fn() {

    //inside the function we will create a new variable and a new function underneath.
    var a = 10;
    function fn2() {
        console.log('I am the best programmer!');
    }
    //this return statement allows the fn2() to still have access to the outside environment
    return fn2;
}
//Set the outside function fn() to a new variable to allow it to be saved to a new memory space
var myFunc = fn();

//We then invoke the variable.
myFunc();

//What is a callback function?
//A callback is when the hosting function takes on the argument of another function

let yoda = ' '