//This is an example of Function constructors
//Look at line 45 and below for how to set a prototype


function Person() {

  this.firstname = 'John';
    this.lastname = 'Doe';
    console.log('This function is invoked');
}


//the 'new' operator creates a new object
//it then invokes the function. The 'this' property points to the new object
var john = new Person('John', 'Doe');
console.log(john);



//adding parameters will allow the user to change value of the object
//Such as changing object one Jimmy John to Jane Lane
function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

}


//The function above will always return an empty object as long as there is no return statement.
//Make sure to add your parameter values in the "new Person" object below 

let jimmy= new Person('Jimmy', 'John');
console.log(jimmy);

let jane = new Person('Jane', 'Lane');
console.log(jane);


console.log('----------------------------')




//Function Constructors and '.Prototype'


function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');

}


//Every function you create in js has this property
//It is easier to put methods on the prototype to save memory space and increase efficiency 
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

//When adding .method onto the variable, make sure to invoke it. Otherwise it will log the function
// i.e "(cat.fullName)" => function ..... (cat.fulName())
var jimmy= new Person('Jimmy', 'John');
console.log(jimmy.getFullName());

var jane = new Person('Jane', 'Lane');
console.log(jane);


//By changing the prototype we can add many different add ons and features.
Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(jimmy.getFormalFullName());