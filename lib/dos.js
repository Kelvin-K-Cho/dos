// const Game = require("./game");
import Game from "./game";

// window.onload = function() {
//   const game = new Game();
//   game.scale();
//   game.deal();
// };


document.addEventListener("DOMContentLoaded", function() {
    const game = new Game();
    game.scale();
    game.deal();
});
