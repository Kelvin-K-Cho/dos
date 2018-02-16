import Game from "./game";

//credit to dougtebay for logic & implementation
//https://github.com/dougtebay/

document.addEventListener("DOMContentLoaded", function() {
    const game = new Game();
    game.scale();
    game.deal();
});
