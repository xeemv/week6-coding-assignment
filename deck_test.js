/**
 * create a variable that's going to import the chai expect method called chai expect 
 */
var expect = chai.expect;

// write unit test
describe('Card Wars', function(){
    describe('New Deck', function(){ // can change when ready, just setting this up
        it ('Should create a flat array of our suits', function(){
            // can change when ready, just setting this up 
            const SUITS = ["Heart", "Spade", "Diamond", "Club"];
            // expect(SUITS).to.be.a('array');
            expect(SUITS.length).to.equal(52);
        }); 
        it ('should create a map of our values', function(){
            const VALUES = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
        });
            expect(VALUES.length).to.equal(52);
        it ('should return a newly created array for a new deck of cards to start the next game with the suit and value', function(){
            new Card(suits, values);
        })
    })
})