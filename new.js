
const SUITS = ["Heart", "Spade", "Diamond", "Club"];
const VALUES = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
const valueMaps = {
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
        this.playerDeck = [];
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

    dealt(deck) {
        this.playerDeck = deck; 
        // this will add the deck that is cut in half after being shuffled to the Player class.
        // this will then push the dealt cards into the playerDeck on line 24 
        // line 39 and 24 must have the same name inorder for this to work
    }

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
        return VALUES.map(values => {
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

let player1 = new Player("Xee");
let player2 = new Player("Messa");



// to start a game
// beginGame(player1, player2)
function beginGame(player1, player2){
    // alert('Welcome to Card War. Let the games begin!!');
    // alert('Shuffle your deck');
    // console.log('starting new function');
    const deck = new Deck ();
    // console.log('begin new game');
    deck.shuffle();
    // console.log(deck) // check to see if it's shuffled


    player1.dealt(deck.cards.slice(0, 26));    // start from 0 - 26
    // console.log(player1.playerDeck); // check to see our player1's deck as an array
    // console.log(player1); // check to see our player1 name and deck as an object
    player2.dealt(deck.cards.slice(26, deck.totalCards));  // deck start at 26 - end of the deck
    // console.log(player2.playerDeck) // check to see our player2's deck
    
    // ** a different way I tried this and it also worked:
    // player1Deck = new Deck(deck.cards.slice(0, 26));
    //     console.log(player1Deck); // check to see our player1's deck
    // player2Deck = new Deck(deck.cards.slice(26, deck.totalCards));
    //     console.log(player2Deck); // check to see our player1's deck
    
    
}


// let Messa = new Player("Messa");
// let Xee = new Player("Xee");


// console.log(deck.shuffle);


// console.log(dealt(playerDeck));




function wonTheRound (player1, player2){
    for (let i = 0; i < player1.playerDeck.length; i++) {   
        // console.log(player1.playerDeck.length)  // should last the length of 26 cards from player1's deck of cards
        if (valueMaps[player1.playerDeck[i].values] > valueMaps[player2.playerDeck[i].values]){

            console.log(`=========================<   (^.^)    >==================================`);
            console.log(`Starting score for ${player1.playerName} is ${player1.score} and starting score for ${player2.playerName} is ${player2.score}`)
            console.log(`${player1.playerName}'s current hand is ${player1.playerDeck[i].values} of ${player1.playerDeck[i].suits} and won the round. ${player1.playerName} gets 1 point.`);
            console.log(`${player2.playerName}'s current hand is ${player2.playerDeck[i].values} of ${player2.playerDeck[i].suits} and lost the round.`);
            player1.score += 1;
            console.log(`${player1.playerName}'s new score is: ${player1.score}.`);
            console.log(`Total score at the end of this round ${player1.playerName} = ${player1.score} vs ${player2.playerName} = ${player2.score}`);
            console.log(`====/(^-^)/ =============================================================`);

        } else if (valueMaps[player1.playerDeck[i].values] < valueMaps[player2.playerDeck[i].values]){

            console.log(`=========================<   (^.^)    >==================================`);
            console.log(`${player2.playerName}'s current hand is ${player2.playerDeck[i].values} of ${player2.playerDeck[i].suits} and won the round. ${player2.playerName} gets 1 point.`);
            console.log(`${player1.playerName}'s current hand is ${player1.playerDeck[i].values} of ${player1.playerDeck[i].suits} and lost the round.`);
            player2.score += 1;
            console.log(`${player2.playerName}'s new score is: ${player2.score}.`);
            console.log(`Total score at the end of this round ${player1.playerName} = ${player1.score} vs ${player2.playerName} = ${player2.score}`);
            console.log(`============================================/(^-^)/ =====================`);


        } else {

            console.log(`=========================<   (^.^)    >==================================`);
            console.log(`${player1.playerName} and ${player2.playerName} tied this round. No score given out this round`);
            console.log(`${player1.playerName}'s current hand is ${player1.playerDeck[i].values} of ${player1.playerDeck[i].suits} and ${player2.playerName}'s current hand is ${player2.playerDeck[i].values} of ${player2.playerDeck[i].suits}`)
            player1.score += 0;
            player2.score += 0;
            console.log(`Total score at the end of this round ${player1.playerName} = ${player1.score} vs ${player2.playerName} = ${player2.score}`);
            console.log(`=====================/(^-^)/ ============================================`);
        }
    }

    gameWinner(player1, player2);
}
// console.log(valueMaps.player1.playerDeck[i].values);



function gameWinner(player1,player2){
    if ((player1.score) > (player2.score)) {
        console.log(`Winner of the game is ${player1.playerName} with a final score of ${player1.score}!!!`);
    } else if ((player1.score) < (player2.score)) {
        console.log(`Winner of the game is ${player2.playerName} with a final score of ${player2.score}!!!`);
    }  else if ((player1.score) === (player2.score)) {
    console.log(`Unbelieveable, this game is tie between ${player1.playerName} with a final score of ${player1.score} and ${player2.playerName} with a final score of ${player2.score}!!!`); 
    }
    
    
    
    // alert("Thank you for playing Card War. Have a wonderful day!")
}




let Xee = new Player("Xee");
let Messa = new Player("Messa");

beginGame(player1, player2);    
wonTheRound(player1, player2);
// gameWinner(player1, player2);

