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
