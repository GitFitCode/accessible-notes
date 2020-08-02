/**
* Here is what I remember what the difference is between local scope and closures
*/

// We are going to create a function called outside function

function outerFunction() {
  //Here is where we will define the local scope variables
  //What is being set here is a part of the local scope
  let localScopeVariable = 1;

  //Creating an inner function that will console.log
  function innerFunction() {
    //Here this innerFunction is able to access the localScopeVariable in the local scope
    console.log(localScopeVariable);
  }
  // We are going to return the innerFunction
  return innerFunction;
}
/**
 * We will declare a new variable innerFunc. It will only reference
 * The innerFunction() NOT the outerFunction()
 * because of the RETURNED value
 */

var innerFunc = outerFunction();
/**
 * When we call innerFunc() it can still access the localScopeVariable in the local scope of the
 * outerFunction(). The idea that this innerFunc() can access the localScopeVariable even though
 * it is being called separately of outerFunction is closure. Because it can still reference the value of the
 * variables or functions defined in the local scope
 */

innerFunc(); // 100


/**
 * One important characteristic of closure is that outer variables can keep their states between multiple calls. 
 * Remember, inner function does not keep the separate copy of outer variables but it reference outer variables, 
 * that means value of the outer variables will be changed if you change it using inner function.
 */