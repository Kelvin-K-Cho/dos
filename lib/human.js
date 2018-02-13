const Player = require("./player");

class Human extends Player {
  constructor(){
    super();
  }

  startTurn(discardPile, computerHand, deck){
    if (discardPile[0].type === "Skip" && !(document.getElementById("discardPile").firstChild.classList.contains("disabled"))) {

      document.getElementById("discardPile").firstChild.setAttribute("class", "card " + discardPile[0].color + " disabled");

      computerHand.computerTurn(discardPile, this, deck);

    } else if (discardPile[0].type === "Draw Two" && !(document.getElementById("discardPile").firstChild.classList.contains("disabled"))){

      document.getElementById("discardPile").firstChild.setAttribute("class", "card " + discardPile[0].color + " disabled");

      this.draw(2, deck, discardPile, "humanHand");
    } else if (discardPile[0].type === "Wild Draw Four" && !(document.getElementById("discardPile").firstChild.classList.contains("disabled"))) {

      document.getElementById("discardPile").firstChild.setAttribute("class", "card " + discardPile[0].color + " disabled");

      this.draw(4, deck, discardPile, "humanHand");
    }

    document.getElementById("playerHand").removeAttribute("class", "disabled");
    document.getElementById("drawButton").removeAttribute("class", "disabled");

  }


}

module.exports = Human;
