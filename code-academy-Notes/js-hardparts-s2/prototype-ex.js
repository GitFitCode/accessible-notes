//Created a person object
var person = {
    firstName: 'Default',
    lastName: 'Default',
    //set a function equal to getFullName to return first and last name
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}
//New John Object
var john = {
    firstName: 'John',
    lastName: 'Doe'
}

// Don't do this ever for demo purposes only!!
//Using the wrong method to set john equal to the first object
//Why set John = person? We are following prototype chain
//If a property does not exist within the john object it will look for it in the person object
john._proto_ = person;
console.log(john.getFullName());


//new jane object
//following the same example as above
var jane = {
    firstName: 'Jane'
}


jane._proto_ = person;
console.log(jane.getFullName());
//when looking at jane object it does not have a last name property
//What happens? Since jane object does not have a lastName property it looks for it in the person object
//It takes the value of lastName from person object aka 'Default' and returns that value
// Output should be 'Jane Default