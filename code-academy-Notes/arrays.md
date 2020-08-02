Arrays in Javascript

*What are arrays?*
Arrays are lists that store data in JavaScript.
Arrays are created with brackets [].

*How are they listed?*
Each item inside of an array is at a numbered position, or index, starting at 0. This is known as ZERO INDEXED.
 - i.e let myArray = [0, 1, 2, 3];
 - Doesn't matter the values that are stored in the array. It will also start off at zero and continue up.

*How are they accessed?*
We can access one item in an array using its index, with syntax like: myArray[0].
    -i.e let halloweenCandy = ['twix', 'snickers', 'butterfinger', 'hershey\'s kisses, 'kitkat']
          const favoriteCandy = halloweenCandy[4];
    - It will output: kitkat 
You can access single letters inside a string using similar syntax.
    -i.e let myArray = 'Hello world';
           array = myArray[3];
           console.log(array); // Output: 'l' 

We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
    -i.e let seasons = ['summer', 'winter', 'spring', 'autumn'];
                seasons[3] = 'fall';

*Arrays have a length property, which allows you to see how many items are in an array.

Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.

Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla 

Developer Network website.

Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the 
documentation.
Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.

Arrays mutated inside of a function will keep that change even outside the function.

Arrays can be nested inside other arrays.


To access elements in nested arrays chain indices using bracket notation.
