*An if statement checks a condition and will execute a task if that condition evaluates to true.*
    - i.e...... if (conditon) {};



*if...else statements make binary decisions and execute different code blocks based on a provided condition.*
    - i.e... if ( conditon) {} else {};




*We can add more conditions using else if statements.*
    - i.e... if (condition) {} else if (condition) {} else if (condition2) {} else {};


Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
The logical and operator, &&, or "and", checks if both provided expressions are truthy.
The logical operator ||, or "or", checks if either provided expression is truthy.
The bang operator, !, switches the truthiness and falsiness of a value.


*You can combine if and else if statements.*
    if (condition) {
        return blah blah blah;
    } else if (condition2 === condition) {
        if (condition !== condition2) {
            return 'they are not true';
        } else {
            return 'they are equal';
        }
    }


*SWITCH STATEMENTS*:

A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement. 

*NORMAL SWITCH STATEMENT WITHOUT BEING IN A FUNCTION*

let obj = 'blah';

switch (obj) {
    case 'number or string':
        console.log(value);
        break;
    
    case 'blah':
        console.log (value);
        break;
    
    case 'blah':
        console.log(value);
        break;
    
    default:
        console.log(default message);
        break;
}


*SWITCH STATEMENTS INSIDE A FUNCTION*

    function bestMan () {
        switch (obj) {
            case 0: 
            return blah;

            case 1: 
            return blah2;

            case 2:
            return blah3;

            default: 
            return 'Da Best';
        }
    }