var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function (x,y) {

var generatedNumbers =[];
var i,z;
var numGenerated[];
var inactiveNum[];
 i=Math.floor(((Math.random() * 10) + 1)-2);

    while(i>= 0 && i<=8) {
       i=Math.floor(((Math.random() * 10) + 1)-2);
       generatedNumbers.push(i);
    while(generatedNumbers.length <= 8) &&  (generatedNumbers.indexOf(i) = 1)){
    generatedNumbers.push(i);
  }

  }
  z = Math.floor(((Math.random() * 10) + 1)-2);
   numGenerated.push(z);
   numGenerated.push(z);
   inactiveNum.push(z);
     while(inactiveNum.indexOf(z) = 1){
       return numGenerated[z,z];
     }

};



/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
