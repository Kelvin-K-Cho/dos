const Game = require("./game");

window.onload = function() {
  const game = new Game();
  game.scale();
  game.deal();
};
