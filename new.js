
const SUITS = ["Heart", "Spade", "Diamond", "Club"];
const VALUES = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
const cardValueMap = {
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

// create a class to store the player information 
class Player {
    constructor(playerName){
        this.playerName = playerName;
        this.playerHand = [];
        this.score = 0;

    }
    // player name
    // player card (suit/value) of that turn - playerHand
    // player score after all cards are played

    // dealt(newSet){
    //     for (let i = 0; i < 26; i++){
    //         this.newHand.push(newSet[i]);
    //     } 
    // }

    // addNewDeck(deck) {
    //     this.playerDeck = deck;
    // }

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
        return this.cards.length; 
        // will return the length of the deck w/o repeating
    }

    // // shuffle the deck
    shuffle(){
        // this.Card = shuffle(this.Card);        
        // shuffle the cards from the card class
        for (let i = this.totalCards -1; i > 0; i--){  
            const newIndex = Math.floor(Math.random() * (this.totalCards));
            const oldValue = this.cards[newIndex];
            /*
            - flip the value at the new index w/ the current index
            - swap old card w/ new card
            */
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
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


/* =====================================================
** create an automated version of the classic card game WAR.**
-	Deal 26 Cards to two Players from a Deck. 
-	Iterate through the turns where each Player plays a Card
-	The Player who played the higher card is awarded a point
    o	Ties result in zero points for either Player
-	After all cards have been played, display the score.

- Write a Unit Test using Mocha and Chai for at least one of the functions you write.

    ======================================================
*/

//let player1, player2

// alert('Welcome to Card War. Let the games begin!!');
// alert('Shuffle your deck');

// to start a game
beginGame()
function beginGame(){
    console.log('starting new function');
    const deck = new Deck ();
    console.log('begin new game');
    deck.shuffle();
    console.log(deck) // check to see if it's shuffled


    player1Deck = new Deck(deck.cards.slice(0, 26));    // start from 0 - 26
    console.log(player1Deck); // check to see our player1's deck
    player2Deck = new Deck(deck.cards.slice(26, deck.totalCards));  // deck start at 26 - end of the deck
    console.log(player2Deck) // check to see our player2's deck
}


// let Messa = new Player("Messa");
// let Xee = new Player("Xee");


// console.log(deck.shuffle);


console.log()

