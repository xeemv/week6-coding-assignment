/**
 * create a variable that's going to import the chai expect method called chai expect 
 */
var expect = chai.expect;

// write unit test
describe('MyFunction', function(){
    describe('#newDeck', function(){ // can change when ready, just setting this up
        it ('should create deck with a length of 52', function(){
            const deck = new Deck ();
            expect(deck.cards.length).to.be.eql(52);
        }); 
        it ('should have be an array', function(){
            const deck = new Deck ();
            expect(deck.cards).to.be.a('array');
        });
    });
})