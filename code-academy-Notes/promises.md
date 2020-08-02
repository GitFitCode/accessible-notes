*What is a Promise in Javascript?*
    -Promises are objects that represent the eventual outcome of an asynchronous operation. A Promise object can be in one of 3 states:
        {
            -Pending: The initial state- the operation has not completed yet.
            
            -Fulfilled: The operation has completed successfully and the promise now has a *resolved value*. For example, a request's promise might resolve with a JSON object as its value.

            -Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an *Error* of some kind.
        }

    -We refer to a promise as *settled* if it is no longer pending-- it is either fulfilled or rejected. Let's think of a dishwasher as having the states of a promise: 
        {
            -Pending: The dishwasher is running but has not completed the washing cycle.

            -Fulfilled: The dishwasher has completed the washing cycle and is full of clean dishes.

            -Rejected: The dishwasher encountered a problem (it didn't receive soap!) and returns unclean dishes.
        }

    -If our dishwashing promise is fulfilled, we'll be able to perform related tasks , such as unloading the clean dishes from the dishwasher. If it's rejected, we can take alternate steps, such as running it again with soap or washing the dishes by hand.
    -All promises eventually settle, enabling us to write logic for what to do if the promise fulfills or if it rejects.


-To create a new Promise object, we use the new keyword and the Promise constructor method:
    - i.e:  const executorFunction = (resolve, reject)=> { };
            const myFirstPromise = new Promise(executorFunction);

-The Promise constructor method takes a function parameter called the executor function which runs automatically when the constructor is called. The executor function generally starts an asynchronous operation and dictates how the promise should be settled.

-The executor function has two function parameters, usually referred to as the resolve() and reject() functions. The resolve() and reject() functions aren't defined by the programmer. When the Promise constructor runs, JavaScript will pass its own resolve() and reject() functions into the executor function.

    -resolve is a function with one argument. Under the hood, if invoked, resolve() will change the promise's status from pending to fulfilled, and the promise's resolved value will be set to the argument passed into resolve().
    
    -reject is a function that takes a reason or error as an argument. Under the hood, if invoked, reject() will change the promise's status from pending to rejected, and the promise's rejection reason will be set to the argument passed into reject().