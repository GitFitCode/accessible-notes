//Original closure program
function buildFunctions() {

    var arr = [];
// [] creates an array

    for (var i = 0; i < 3; i++) {
// for loop is created and will keep running i until it is equal to or greater than 3

        arr.push(
            function() {
                console.log(i);
                // The function above is not invoked yet.
                // arr.push pushes the function into the array & holds the memory space of i every time it is ran through the for loop.
            }
        )
    }
    return arr;
}

var fs = buildFunctions();

// fs[]() invokes buildFunctions
// Once buildFunctions is invoked the function runs until it is done with the loop.
// each fs has access to the same parent function fs which outputs the same value.
fs[0]();
fs[1]();
fs[2]();



// closure es6 uses the "let" variable to output 1,2,3.
function buildFunctions2() {

    var arr = [];

    for (var i = 0; i < 3; i++) {

        // variable j saves i into memory space each time loop is ran
        // each time i is ran it has its own spot in memory
        let j = i;
        arr.push(
            function() {
                console.log(j);
            }
        )
    }
    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();




// closure function using ES5 to output 1,2,3
function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {

        arr.push(
            // We are wrapping up our function to separate it
            // We create the new j variable
            (function(j) {
                return function() {
                console.log(j);
                }
            }(i))
            // every time our wrapped function is invoked it is stored inside i
            //i has a new spot in memory every time it is ran and invoked.
        )
    }
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

//Function Factory Using Closures
function makeGreeting(language) {

    return function(firstName, lastName) {
        
        if (language === 'en') {
            console.log('Hello ' + firstName + ' ' + lastName);
        }
    
        if (language === 'es') {
            console.log('Hola ' + firstName + ' ' + lastName);
        }
    
    }
    
    }
    
    // greetEnglish accesses the makeGreeting() function, but only the 'en' statement
    var greetEnglish = makeGreeting('en');

    //greetSpanish accesses the makeGreeting() a second time but only the 'es' statement
    var greetSpanish = makeGreeting('es');
    
    
    //Both invoke the function makeGreeting and posts on the console with the respective value for 'en' & 'es'.
    greetEnglish('John', 'Doe');
    greetSpanish('John', 'Doe');
    