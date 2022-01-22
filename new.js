
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

    dealt(newSet){
        for (let i = 0; i < 26; i++){
            this.newHand.push(newSet[i]);
        } 
    }
}

let player1, player2


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

//alert('Welcome to Card War. Let the games begin!!');

// to start a game
function startGame(player1, player2) {
    // create a new deck for the game
    console.log("new game") //test to see if this works, and determine is shuffle is working
    const deck = new Deck();
    console.log(deck);
    deck.shuffle()

    player1.dealt(deck.cards.slice(0, 26));
    console.log(player1.dealt(deck.cards.slice(0, 26)));
    player2.dealt(deck.cards.slice(26));
    console.log(player1.dealt.length); //check length of each new hand = 26
    console.log(player2.dealt.length); //check length of each new hand = 26
}




// determine which playerHand won this round
function wonTheRound (player1, player2){
    for (let i = 0; i < player1.playerHand.length; i++) {
        if (cardValueMap[player1.playerHand[i].values] > cardValueMap[player2.playerHand[i].values]){
            player1.score += 1;
            console.log(`${player1.playerName.playerHand[i].values[i]} of ${player1.playerName.playerHand[i].suits[i]} won the round and gets 1 point` + `current score is: ${player1.score}`);
            console.log(`current score: ${playerName.player1.score} vs current score: ${playerName.player2.score}`);
        } else if 
            (cardValueMap[player1.playerHand[i].values] < cardValueMap[player2.playerHand[i].values]){
                player2.score += 1;
                console.log(`${player2.playerName.playerHand[i].values[i]} of ${player2.playerName.playerHand[i].suits[i]} won the round and gets 1 point` + `current score is: ${player1.score}`);
                console.log(`current score: ${playerName.player1.score} vs current score: ${playerName.player2.score}`);
        } else {
            console.log(`${player1.playerName} and ${player2.playerName} tie this round`);
            console.log(`current score: ${playerName.player1.score} vs current score: ${playerName.player2.score}`);
        }
    }
} 

let Xee = new Player('Xee');
let Messa = new Player ('Messa');
startGame(Xee, Messa);
// console.log(player1.newHand.length);
