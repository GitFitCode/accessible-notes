// Function factories make or return things for the user

// Creating a function makeGreeting with language as an argument
function makeGreeting(language) {

// We are going to return a function with two if statements
   return function(firstName, lastName) {

// if the input language is english it will log the greeting Hello in english
    if (language === 'en') {
    console.log('Hello ' + firstName + ' ' + lastName);
    }
//if the input language is spanish it will log the greeting Hola
    if (language === 'es') {
        console.log('Hola ' + firstName + ' ' + lastName);
    }



    }

}
// Two different execution contexts are created because they are pointing at two different points in memory.
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');