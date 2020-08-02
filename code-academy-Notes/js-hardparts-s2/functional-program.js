





// We are creating a new function with arr & fn as its arguments
// map means we are going take one array, do something to it and get a new array out of it

function mapForEach(arr, fn) {
// creating a new variable set to an empty an array
    var newArr = [];
// Using the same for loop as in the first example.
    for (var i=0; i < arr1.length; i++) {

        //Create a new array and push to that new array
        newArr.push(

        //This is where functional programming begins
        //Call a function and pass in that array item
            fn(arr[i])
            // the array item (arr[i]) is processed by some function
        )

    };
    // This is going to return new array
    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);

// Set mapForEach to arr2, pass the first arr1.
//Create a function expression as second argument to accept item
// Let it return an item with some work to do.
var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});


console.log(arr2);

function name(arg1, arg2) {
    var newArr = []; 
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(
            arr2(arr[i])
        )
    };
    return newArr;
}
