//BUILD A LIBRARY
//Congratulations, you've passed the grueling rigmarole of librarian school and have become head librarian at your local Books-'N-Stuff.
//Just as you sit down, eager to utilize all those skills you learned in "Lib 203 - Shushing: How to Maintain Order While Spitting", you realize you're still using index cards to handle everything.
//But no matter, you know some JavaScript, so let's get to work modernizing your new digs.
//Books-'N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

//Book
//Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
//Getters: all properties have a getter
//Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

//Movie
//Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
//Getters: all properties have a getter
//Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

//CD
//Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
//Getters: all properties have a getter
//Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()


//First Step We are going to create a parent class called Media
//It will have all the child classes: book, media, cd

class Media {
    //our constructor is 'title' because its the only shared default property amongst all children classes
    constructor(title) {
       
       //created three properties for our parent class that each child class will share.
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    //Now we want to create getter methods that allow access to our properties
    //REMEMBER when creating multiple getters DO NOT USE A COMMA!!!
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    //Create a setter method for isCheckedOut
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    //Create toggleCheckedOutStatus method that changes the value set to isCheckedOut
    //if it true, change to false & vice versa.
    //we use our setter value "isCheckedOut" because you do not want to change the raw property
    toggleCheckedOutStatus() {
        this.isCheckedOut =! this.isCheckedOut;
    }

    //create getAverageRating method. Return the average values of the ratings array
    // Use the reduce method to find the sum of the ratings array. 
    //Divide this sum by the length of the ratings array, and return the result.
    getAverageRatings() {
        let lengthOfArray = this._ratings.length;
        let ratingSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        let average = Math.round(ratingSum / lengthOfArray);
        return average;
    }

//Let's add a method named addRating that accepts one argument and uses .push() to add it to the end of the ratings array.
    addRating(ratings) {
        this._ratings.push(ratings);
    }
}

//Next, we''ll build a Book class that extends Media.

class Book extends Media {
    constructor(author,title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

//Build a Movie Class that extends media

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get pages() {
        return this._pages;
    }
}
class CD extends Media {
    constructor (artist) {
      super (title);
      this.songs = [];
    }
  }

//Create a Book instance with the following properties:
//Author: 'Bill Bryson'
//Title: 'A Short History of Nearly Everything'
//pages: 544
//Save the instance to a constant variable named historyOfEverything.

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

//Call .toggleCheckOutStatus() on the historyOfEverything instance.
historyOfEverything.toggleCheckedOutStatus();

// Log isCheckedOut onto the historyOfEverything instance
console.log(historyOfEverything.isCheckedOut);

//Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5.
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

//Call .getAverageRating() on historyOfEverything. Log the result to the console.
console.log(historyOfEverything.getAverageRatings());

//Create a Movie instance with the following properties:
//Director: 'Jan de Bont'
//Title: 'Speed'
//Runtime: 116
//Save the instance to a constant variable named speed.
const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRatings());