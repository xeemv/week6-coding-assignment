// const SUITS = ["Heart", "Spade", "Diamond", "Club"];
// const VALUES = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
// const cardValueMap = {
//     'A': 14,
//     'K': 13,
//     'Q': 12,
//     'J': 11,
//     '10': 10,
//     '9': 9,
//     '8': 8,
//     '7': 7,
//     '6': 6,
//     '5': 5,
//     '4': 4,
//     '3': 3,
//     '2': 2
// }


// // create a class to store the player information 
// class Player {
//     constructor(playerName){
//         this.playerName = playerName;
//         this.playerHand = [];
//         this.score = 0;

//     }
//     // player name
//     // player card (suit/value) of that turn - playerHand
//     // player score after all cards are played

//     addNewDeck(deck){
//         this.newHand = deck;
//     }
// }



// // create a class for card which will identify what the suit and card value is
// class Card {
//     constructor (suits, values){
//         this.suits = suits;
//         this.values = values;
//     }

// }


// // create a class for deck
// class Deck {
    
//     constructor (cards = newDeck()) {
//         this.cards = cards;
//     }

//     // total # of card
//     get totalCards (){
//         return this.cards.length; 
//         // will return the length of the deck w/o repeating
//     }


//     // shuffle the deck
//     shuffle(){
//         // this.Card = shuffle(this.Card);        
//         // shuffle the cards from the card class
//         for (let i = this.totalCards -1; i > 0; i--){  
//             const newIndex = Math.floor(Math.random() * (this.totalCards));
//             const oldValue = this.cards[newIndex];
//             /*
//             - flip the value at the new index w/ the current index
//             - swap old card w/ new card
//             */
//             this.cards[newIndex] = this.cards[i];
//             this.cards[i] = oldValue;
//         }
//     }
//     /* 
//     ****for (let i = this.totalCards; i > 0; i--){   ===>
//     - for loop using totalCards
//     - utilize the for loop to iterate through the deck
//     - set i to equal the totalCards in the newGame
//     - i > 0 ==> this is because we will not need to flip that last card in the deck
//     - need to randomize the cards
//     - our count will start at the end of our list of cards to the beginning of the list
//     - this will also flip our card w/ one that 
//     - looping through the current card and swapping it w/ a new card
//     */

//     /* 
//     ****const newIndex = Math.floor(Math.random() * (this.numberOfCards)); ==>
//     - a new index for where I want to put this card
//     - the index should occur earlier in the deck of card then the player's current spot
//     - use math.floor ==> The Math.floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result - per https://www.w3schools.com/jsref/jsref_floor.asp
//     - use Math.random ==> The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive). - per https://www.w3schools.com/jsref/jsref_random.asp
//     */

// }



// // // global variable to be accessible everywhere
// // let player1Deck, player2Deck

// function newDeck() {
//     // using a flat map will return mutiple values w/o changing the original array instead of 4 separate arrays (4 suits)
//     // will need flatmap followed by map
//     return SUITS.flatMap(suits => {
//         return VALUES.map(values =>{
//             return new Card(suits, values);
//         });
//     });
// }




// // determine which playerHand won this round
// function wonTheRound (player1, player2){
//     for (let i = 0; i < player1.playerHand.length; i++) {
//         if (cardValueMap[player1.playerHand[i].values] > cardValueMap[player2.playerHand[i].values]){
//             player1.score += 1;
//             console.log(`${player1.playerName.playerHand[i].values[i]} of ${player1.playerName.playerHand[i].suits[i]} won the round and gets 1 point` + `current score is: ${player1.score}`);
//             console.log(`current score: ${playerName.player1.score} vs current score: ${playerName.player2.score}`);
//         } else if 
//             (cardValueMap[player1.playerHand[i].values] < cardValueMap[player2.playerHand[i].values]){
//                 player2.score += 1;
//                 console.log(`${player2.playerName.playerHand[i].values[i]} of ${player2.playerName.playerHand[i].suits[i]} won the round and gets 1 point` + `current score is: ${player1.score}`);
//                 console.log(`current score: ${playerName.player1.score} vs current score: ${playerName.player2.score}`);
//         } else {
//             console.log(`${player1.playerName} and ${player2.playerName} tie this round`);
//             console.log(`current score: ${playerName.player1.score} vs current score: ${playerName.player2.score}`);
//         }
//     }
// } 

// let Messa = new Player ('Messa');
// let Xee = new Player ('Xee');


// //startGame(Messa, Xee);
// //wonTheRound(Messa, Xee);




// // console.log(player1Deck)
// // console.log(player2Deck)
// // const testDeck = new Deck ();

// // console.log(testDeck);
// // console.log(testDeck.shuffle());
// // console.log(testDeck);

// class Game {
//     constructor () {
//         this.player = [];
//     }
    
//         // to start a game
//         startGame(player1, player2) {
//             // create a new deck for the game
//             const deck = new Deck();
//             console.log(deck);

//             // // make sure to use shuffle w/ the new deck  
//             deck.shuffle();


//             // divide the deck in half 
//             //const halfDeck = (deck.totalCards / 2);
//             /* 
//             - this way we split the deck of cards
//             - a safety net basically
//             */
//             //console.log(halfDeck);

//             this.player.push(new Player(player1));
//             this.player.push(new Player(player2));

//             // create the individual player's deck
//             this.player[0].playerHand = addNewDeck(deck.cards.slice(0, 26))
            
//             //console.log(player1.addNewDeck(deck.cards.slice(0, halfDeck)));    
            
        
//             /* 
//             - will want the player to start w/ 26 cards
//             - start a new deck for the player
//             - slice the deck using deckMidpoint
//                 - basically starting at card 0 - midpoint
//             */
//             player2.addNewDeck(deck.cards.slice(halfDeck, deck.totalCards));
//             //console.log(player2.addNewDeck(deck.cards.slice(halfDeck, deck.totalCards)));      
//             /* 
//             - will want the computer to start w/ 26 cards
//             - start a new deck for the player
//             - slice the deck using deckMidpoint
//                 - basically starting at the midpoint till the last card
//             */
            
//         }
// }
// console.log(this.player.playerHand);