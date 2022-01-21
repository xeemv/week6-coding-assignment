const SUITS = ["Heart", "Spade", "Diamond", "Club"];
const VALUES = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
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
    
    constructor (cards = newDeck()) {
        this.cards = cards;
    }

    // total # of card
    get totalCards (){
        return this.cards.length; // will return the length of the deck w/o repeating
    }


    // shuffle the deck
    shuffle(){
        this.Card = shuffle(this.Card);        
        // shuffle the cards from the card class
        for (let i = this.totalCards; i > 0; i--){  
            // for loop using totalCards
            // our count will start at the end of our list of cards to the beginning of the list
            // i > 0 ==> this is because we will not need to flip that last card in the deck
            // this will also flip our card w/ one that 
            // looping through the current card and swapping it w/ a new card
            const newIndex = Math.floor(Math.random() * (this.cards));
            // a new index for where I want to put this card
            // the index should occur earlier in the deck of card then the player's current spot
            const oldValue = this.cards[newIndex]
            // flip the value at the new index w/ the current index
            // swap old card w/ new card
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue

        }

            /*
            - utilize the for loop to iterate through the deck
            - set i to equal the totalCards in the newGame
            - need to randomize the cards
                - use math.floor ==> The Math.floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result - per https://www.w3schools.com/jsref/jsref_floor.asp
                - use Math.random ==> The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive). - per https://www.w3schools.com/jsref/jsref_random.asp
            */
    }


    // // game over
}


function newDeck() {
    // using a flat map will return mutiple values w/o changing the original array instead of 4 separate arrays (4 suits)
    // will need flatmap followed by map
    return SUITS.flatMap(suits => {
        return VALUES.map(values =>{
            return new Card(suits, values);
        });
    });
}


// const shuffle (){

// }

// set up a new game
startGame () 
function startGame(player1, player2) {
    // create a new deck for the game
    const deck = new Deck()  
    // make sure to use shuffle w/ the new deck  
    deck.shuffle()

    // divide the deck in half 
    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    /* 
    - By using ==> The Math.ceil() method rounds a number UPWARDS to the nearest integer, and returns the result - per https://www.w3schools.com/jsref/jsref_ceil.asp
    - this way we always get a whole integer incase we ever had an uneven deck of cards
    - a safety net basically
    */

    
    // create the individual player's deck
}




// // create a class to store the player information
// class Players {
//     constructor(player){
//         this.player = player;
//         this.hand = hand;
//         this.score = score;

//     }
//     // player name
//     // player card (suite/value) of that turn - hand
//     // player score after all cards are played


// }

const deck = new Deck()
// deck.shuffle()
console.log(deck.cards)
