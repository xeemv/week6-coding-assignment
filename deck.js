const suits = ["Heart", "Spade", "Diamond", "Club"];
const values = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
const cardValue = {
    'A': 14,
    'K': 13,
    'Q': 12,
    'J': 11,
    '10': 10,
    '9': 9,
    '8': 8,
    '7': 7,
    '6': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2
}


// create a class for card which will identify what the suit and card value is
class Card {
    constructor (suits, values){
        this.suits = suits;
        this.values = values;
    }

}



// create a class for deck
class Deck {
    // set up a new game
    constructor (newGame){
        this.newGame = newGame;
    }

    // total # of card
    get totalCards (){
        return this.newGame.length; // will return the length of the deck w/o repeating
    }


    // shuffle the deck
    shuffle(){
        for (let i = this.totalCards; i > 0; i++){

        }
    }
    /*
    - utilize the for loop to iterate through the deck
    - set i to equal the totalCards in the newGame
    - need to randomize the cards
    */

    // game over
}











// creat a class to store the player information
class Players {
    // player name
    // player card (suite/value) of that turn
    // player score after all cards are played
}