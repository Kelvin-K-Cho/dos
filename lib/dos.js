// const Game = require("./game");
import Game from "./game";

// window.onload = function() {
//   const game = new Game();
//   game.scale();
//   game.deal();
// };

//credit to dougtebay for logic & implementation
//https://github.com/dougtebay/

document.addEventListener("DOMContentLoaded", function() {
    const game = new Game();
    game.scale();
    game.deal();
});


/*
1. Fix cardId ** Fixed
2. Fix playWild (human) ** Fixed
3. Fix computerHand styling when adding cards. ** Fixed
4. Add title.
*/
