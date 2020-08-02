I. ARRAYS {
    - What are arrays?
           . Arrays are Javascript's way of making lists in code.
          . Concepts: Creating arrays, array structures, array manipulation
          . Creating an Array:
            - Array Literal creates an array by wrapping items/elements in [] brackets.
            - Arrays can store any data type such as stings, booleans, numbers, functions, and objects.
                    - i.e ['element example', 10, true]
            -Each item inside brackets are called ELEMENTS
            -You can save any array to a variable

    - How do you access an Element inside an array?
            . Each elements has a numbered position in an array called an 'INDEX'
            . Arrays in JS are 'ZERO-INDEXED'
                    -i.e [0,1,2,3] is the same as ['pie', 10, true, false]
            . You can access an individual element in an array using bracket notation
            . You can also access individual letters in a string 
                    -i.e const hello = 'hello world';
                    -console.log (hello[6]); // Output: W
            . You can update the values of elements inside an array.

     - Arrays with let and const:

            . Elements in an array declared with let remain mutable. We can change the contents of a const array, but we cannot change/ reassign a new array.    


     - The .length Property:

            . Array's built in property is length & it returns the number of items in the the array.
            . We access .length property just like strings
            . i.e const newYearsResolution = [ 'Keep a journal', 'take a falconry class'];
                        console.log(newYearsResolution.length); //output: 2

            . We use dot notation, chaining a period (.) with                   



}