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
        this.hand = [];
        this.score = 0;

    }
    // player name
    // player card (suit/value) of that turn - playerHand
    // player score after all cards are played

    // addNewDeck(deck){
    //     this.newHand = deck;
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


    // shuffle the deck
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

let players = [];
players.push(new Player("player1"));
players.push(new Player("player2"));

// to start a game
function startGame(player1, player2, num) {
    // // create a new deck for the game
    const deck = new Deck();
    console.log('creating new deck');

    // make sure to use shuffle w/ the new deck  
    //deck.shuffle();

    // divide the deck in half 
    const halfDeck = (deck.totalCards / 2);
    console.log(halfDeck);
    /* 
    - this way we split the deck of cards
    - a safety net basically
    */

    player1.hand.push(num.cards.slice(0, 26));
    // console.log(player1.addNewDeck(deck.cards.slice(0, halfDeck)));
    
    player2.hand.push(num.cards.slice(26, 52));

    
}

const deck = new Deck();
deck.shuffle();
console.log(deck);
startGame(deck, players[0], players[1]);
console.log(players);
