//In this practice program we are going to recreate the game rock paper scissors
// What is needed: UserInput, Computer Input, Switch statement, and needs to be in ES6 syntax

//Declare the User's Input choices
//If user inputs an invalid choice, return a string stating it.
const getUserInput = userInput => {
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput;
    } else {
        return console.log('Invalid Input. Please choose a valid choice of the game.');
    }
};

//We want to create the Computer's choice, but since it isn't a manual input how would you allow a random answer return?
// Hint* Use math random and math floor
//Create a switch statement that logs a string value when getComputerChoice is ran

function getComputerChoice() {
    switch (Math.floor(Math.random()*3)) {
        case 0: 
            return 'rock';
            break;
        case 1: 
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}
//Use else if statements
// Create an if statement inside else if statement to return who the winner is
function determineWinner(userInput, computerChoice) {
if (userInput === computerChoice) {
    return 'It is a draw';
} else if (userInput === 'rock') {
    if (computerChoice === 'paper') {
        return 'Computer wins!';
    } else {
        return 'You Win!';
    }
} else if (userInput === 'paper') {
    if (computerChoice === 'scissors') {
        return 'Computer Wins!';
    } else {
        return 'You Win!';
    }
} else if (userInput === 'scissors') {
    if (computerChoice === 'rock') {
        return 'Computer Wins!';
    } else {
        return 'You Win!';
    }
}
};


//Create a function that allows the game to be played
//create new variables inside the function and set them equal to userInput & getComputerChoice
//Log it to the console
//Use a self invoking function
(function playGame () {
    var userInput= getUserInput('rock');
    var computerChoice = getComputerChoice();
console.log(`You threw ${userInput}`);
console.log(`Computer threw ${computerChoice}`)
console.log(determineWinner(userInput, computerChoice));
}());
