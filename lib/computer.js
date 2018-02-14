const Player = require("./player");

class Computer extends Player {
  constructor(){
    super();
  }

  computerTurn(discardPile, humanHand, deck) {

    if(discardPile[0].type === "Skip" && !(document.getElementById("discardPile").firstChild.classList.contains("disabled"))) {
      document.getElementById("discardPile").firstChild.setAttribute("class", "card " + discardPile[0].color + " disabled");

      humanHand.startTurn(discardPile, this, deck);
    } else {
      
    }
  }
}

module.exports = Computer;
