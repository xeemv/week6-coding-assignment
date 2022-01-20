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
    
    constructor (newGame = newDeck()){
        this.newGame = newGame;
    }

    // total # of card
    get totalCards (){
        return this.newGame.length; // will return the length of the deck w/o repeating
    }


    // shuffle the deck
    shuffle(){
        this.Card = shuffle(this.Card);        // shuffle the cards from the card class
        for (let i = this.totalCards; i > 0; i++){  // for loop using totalCards
            const newIndex = Math.floor(Math.random() * (this.newGame.length));

        }

            /*
            - utilize the for loop to iterate through the deck
            - set i to equal the totalCards in the newGame
            - need to randomize the cards
                - use math.floor ==> The Math.floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result - per https://www.w3schools.com/jsref/jsref_floor.asp
                - use Math.random ==> The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive). - per https://www.w3schools.com/jsref/jsref_random.asp
            */
    }


    // game over
}


function newDeck(){
    // using a flat map will return mutiple values w/o changing the original array
    // will need flatmap followed by map
    return suits.flatMap(suits => {
        return values.map(values =>{
            return new Card(suits, values);
        });
    });
}


const shuffle (){

}

// set up a new game
function startGame(player1, player2) {
    // create a new deck for the game
    const deck = new Deck();  
    // shuffle the deck  
    const shuffle =

    //

}



// create a class to store the player information
class Players {
    constructor(player){
        this.player = player;
        this.hand = hand;
        this.score = score;

    }
    // player name
    // player card (suite/value) of that turn - hand
    // player score after all cards are played


}