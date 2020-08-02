 function is a reusable block of code that groups together a sequence of statements to perform a specific task.
*FUNCTIONS*
A function declaration : 
    -i.e function greetWorld () {
        return 'blah';
    }

*PARAMETERS*
A parameter is a named variable inside a function's block which will be assigned the value of the argument passed in when the function is invoked: JavaScript syntax for declaring a function with parameters
    -i.e function obj(param1, param2) {
        return console.log(param1, param2);
    };

*To call a function in your code:*
To call a function is called 'invoking' the function
    - function obj() {
        return example;
    };
      example();

ES6 introduces new ways of handling arbitrary parameters through default parameters which allow us to assign a default value to a parameter in case no argument is passed into the function.

To define a function using function expressions: defining a function expression
    -i.e const calculatedArea = function (width, height) {
        const area = width * height
        return area;
    };

*To define a function using arrow function notation:*
    -Single Line Declaration
        -i.e const area1 = () => {
                const number = height * width;
                return number;
        };
        

*Function definition can be made concise using concise arrow notation: comparing single line and multiline arrow functions*
Concise arrow notation removes the parentheses around the parameter if its only one. It also removes the curly braces {} if it is only one line of code.
-Single Line Declaration
        -i.e const area1 = number => number + number;
    -MultiLine Code
        -i.e const sumNumbers = numbers => {
            const sum = number + number
            return sum;
        };


It's good to be aware of the differences between function expressions, arrow functions, and function declarations. As you program more in JavaScript, you'll see a wide variety of how these function types are used.