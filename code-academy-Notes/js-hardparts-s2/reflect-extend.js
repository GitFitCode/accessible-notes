var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

// DON'T DO THIS EVER! for demo use only!!!

john.__proto__ = person;


//We are going to create a reflection
//USe for in method....similar to for each
// Going to loop over the john object
for (var prop in john) {

    //if statement checks john to see if it has a property on the john object
    //without this if statement, it would log firstName, lastName, and getFullName
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}


var jane = {
    address: '111 Main St',
    getFormalFullName: function() {
        return this.lastName + ', ' + this.firstName;
    }
}

var jim = {
    getFirstName: function() {
        return firstName;
    }
}

//._extend combines all the prototypes from each object into one.
.extend(john, jane, jim);

console.log(john);