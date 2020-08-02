// An example of a Fizz-Buzz question is the following: 
//Write a program that prints the numbers from 1 to 100. 
//But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
//For numbers which are multiples of both three and five print "FizzBuzz".

//3 === 'Fizz'
//5 === 'Buzz'
// 3&5 === 'FizzBuzz'

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else if (i % 3 && 5 === 0) {
    console.log('FizzBuzz')
  } else {
    console.log (i)
  }
};

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz') 
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
};

let myObject = {
  firstName: 'Bob',
  lastName: 'Jackson'
};

(myObject) => {
  return this.myObject
};


for(let i=0; i < 10; i++) {

};

function showName(firstName, lastName) {
  let yourName = 'Your name is ';
  function fullName (){
    return yourName + firstName + lastName;
  }
  return fullName();
}


class Animal {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}

let dog = new Animal ('spike', 'corgi');


// An example of a Fizz-Buzz question is the following: 
//Write a program that prints the numbers from 1 to 100. 
//But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
//For numbers which are multiples of both three and five print "FizzBuzz".

//3 === 'Fizz'
//5 === 'Buzz'
// 3&5 === 'FizzBuzz'


for (let i =0; i <= 0; i++) {
  if (i % 3 === 0 && i % 5=== 0 ) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i)
  }
}

for (let i =0;i<=0; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } else if (i% 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0){
    console.log('Buzz')
  } else {
    console.log(i)
  }
}


//What is the output?
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

/*Neither 21, nor 20, the result is undefined

It’s because JavaScript initialization is not hoisted.

(Why doesn’t it show the global value of 21? The reason is that when the function is executed, it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.) */



//What is hoisting?
/*
Hoisting is the concept in which Javascript, by default, moves all declarations to the top
of the current scope. As such, a variable can be used before it has been declared. Note that
Javascript only hoists declarations and not initializations
*/

// Palindrome coding challenge: 
// The problem can be stated along the following lines: given a string, return true if the string is a palindrome 
// and false if it isn’t. Include spaces and punctuation in deciding if the string is a palindrome. For example:
palindrome('racecar')  ===  true
palindrome('table')  ===  false


//Solution: 
const palindrome = str => {
  // turn the string to lowercase
  str = str.toLowerCase()
  // reverse input string and return the result of the
  // comparison
  return str === str.split('').reverse().join('')
}

//How many API calls are in Node.js?
/* There are 2:
1) Asynchronous, non-blocking functions
2)Synchronous, blocking functions
*/