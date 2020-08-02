var person = {

    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
       //Using 'this' allows the program to reference the person object. 
       //If 'this' was not there it would only search for firstname within the function
        return 'Hi ' + this.firstname;
    }
}

//John inherits the object of person
//You override those default values by assigning them an input value
//End it by calling the function, while logging it the console.
var john = Object.create(person);
john.firstname ='John';
john.lastname = 'Doe';
console.log(john.greet());