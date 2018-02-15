// const Player = require("./player");
import Player from "./player";
import random from 'lodash/random';


class Computer extends Player {
  constructor(){
    super();
  }

  computerTurn(discardPile, humanHand, deck) {

    if(discardPile[0].type === "Skip" && !(document.getElementById("discardPile").firstChild.classList.contains("disabled"))) {

      document.getElementById("discardPile").firstChild.setAttribute("class", "card " + discardPile[0].color + " disabled");

      humanHand.startTurn(discardPile, this, deck);
    } else {

      let playable = this.findPlayable(discardPile);

      if(discardPile[0].type === "Draw Two" && !(document.getElementById("discardPile").firstChild.classList.contains("disabled"))) {

        this.computerDrawCards(2, deck, discardPile, playable, humanHand);

      } else if(discardPile[0].type === "Wild Draw Four" && !(document.getElementById("discardPile").firstChild.classList.contains("disabled"))) {

        this.computerDrawCards(4, deck, discardPile, playable, humanHand);

      } else if (playable.length === 0) {

        this.computerDrawCard(deck, discardPile, playable, humanHand);

      } else {

        this.computerPlayCard(playable, discardPile, humanHand, deck);

      }
    }
  }

  computerDrawCard(deck, discardPile, playable, humanHand) {
    setTimeout(function() {
      this.draw(1, deck, discardPile, "computerHand");

      playable = this.findPlayable(discardPile);

      if (playable.length > 0) {
        this.computerPlayCard(playable, discardPile, humanHand, deck);
      } else {
        humanHand.startTurn(discardPile, this, deck);
      }

    }.bind(this), 1000);
  }

  computerDrawCards(cards, deck, discardPile, playable, humanHand) {
    setTimeout(function() {
      this.draw(cards, deck, discardPile, "computerHand");

      document.getElementById("discardPile").firstChild.setAttribute("class", "card " + discardPile[0].color + " disabled");

      playable = this.findPlayable(discardPile);

      if(playable.length === 0) {
        this.computerDrawCard(deck, discardPile, playable, humanHand);
      } else {
        this.computerPlayCard(playable, discardPile, humanHand, deck);
      }

    }.bind(this), 1000);
  }

  computerPlayCard(playable, discardPile, humanHand, deck) {

    setTimeout(function(){
      let chosen = playable[random(0, playable.length-1)];

      let chosenCardRect = document.getElementById(chosen.id).getBoundingClientRect();

      let discardPileRect = document.getElementById("discardPile").firstChild.getBoundingClientRect();

      document.styleSheets[0].insertRule(".playCard { -webkit-transform: translate(" + (discardPileRect.left - chosenCardRect.left)
        + "px, " + (discardPileRect.top - chosenCardRect.top) + "px); -moz-transform: translate(" + (discardPileRect.left - chosenCardRect.left)
          + "px, " + (discardPileRect.top - chosenCardRect.top) + "px); -ms-transform: translate(" + (discardPileRect.left - chosenCardRect.left)
            + "px, " + (discardPileRect.top - chosenCardRect.top) + "px); transform: translate(" + (discardPileRect.left - chosenCardRect.left)
              + "px, " + (discardPileRect.top - chosenCardRect.top) + "px); }", 0);

      let chosenClass = document.getElementById(chosen.id).getAttribute("class");

      document.getElementById(chosen.id).setAttribute("class", chosenClass + " playCard");

      if (this.length < 8) {
        document.getElementById(chosen.id).setAttribute("style", "z-index: 1");
      }

      setTimeout(function() {
        document.styleSheets[0].deleteRule(0);

        this.cleanup(chosen, "computerHand", discardPile);

        if (chosen.color === "Wild" && this.length > 0) {
          this.playWild("computer", humanHand, discardPile, deck);
        } else if (this.length > 0) {
          humanHand.startTurn(discardPile, this, deck);
        } else {
          this.gameOver("computer");
        }
      }.bind(this), 400);



    }.bind(this), 1000);
  }

}

// module.exports = Computer;
export default Computer;
