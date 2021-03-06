import Player from "./player";
import random from 'lodash/random';


class Computer extends Player {
  constructor(){
    super();
  }

  computerTurn(discardPile, humanHand, deck) {

    document.getElementById("humanFace").setAttribute("class", "mute");

    document.getElementById("computerFace").removeAttribute("class", "mute");

    if(discardPile[0].type === "Skip" && !(document.getElementById("discardPile").firstChild.classList.contains("disabled"))) {

      document.getElementById("discardPile").firstChild.setAttribute("class", "card " + discardPile[0].color + " disabled");

      humanHand.startTurn(discardPile, this, deck);
    } else {

      let playable = this.findPlayable(discardPile);

      if(discardPile[0].type === "Draw Two" && !(document.getElementById("discardPile").firstChild.classList.contains("disabled"))) {

        this.computerDrawCards(2, deck, discardPile, humanHand);

      } else if(discardPile[0].type === "Wild Draw Four" && !(document.getElementById("discardPile").firstChild.classList.contains("disabled"))) {

        this.computerDrawCards(4, deck, discardPile, humanHand);

      } else if (playable.length === 0) {

        this.computerDrawCard(deck, discardPile, humanHand);

      } else {

        this.computerPlayCard(discardPile, humanHand, deck);

      }
    }
  }

  computerDrawCard(deck, discardPile, humanHand) {
    setTimeout(function() {
      this.draw(1, deck, discardPile, "computerHand");

      let playable = this.findPlayable(discardPile);

      if (playable.length > 0) {
        this.computerPlayCard(discardPile, humanHand, deck);
      } else {
        humanHand.startTurn(discardPile, this, deck);
      }

    }.bind(this), 1000);
  }

  computerDrawCards(cards, deck, discardPile, humanHand) {
    setTimeout(function() {
      this.draw(cards, deck, discardPile, "computerHand");

      document.getElementById("discardPile").firstChild.setAttribute("class", "card " + discardPile[0].color + " disabled");

      let playable = this.findPlayable(discardPile);

      if(playable.length === 0) {
        this.computerDrawCard(deck, discardPile, humanHand);
      } else {
        this.computerPlayCard(discardPile, humanHand, deck);
      }

    }.bind(this), 1000);
  }

  computerPlayCard(discardPile, humanHand, deck) {

    let playable = this.findPlayable(discardPile);

    setTimeout(function(){
      let chosen = playable[random(0, playable.length-1)];

      let chosenCardRect = document.getElementById(chosen.id).getBoundingClientRect();

      let discardPileRect = document.getElementById("discardPile").firstChild.getBoundingClientRect();

      try {
      document.styleSheets[0].insertRule(".playCard { -webkit-transform: translate(" + (discardPileRect.left - chosenCardRect.left)
        + "px, " + (discardPileRect.top - chosenCardRect.top) + "px); -moz-transform: translate(" + (discardPileRect.left - chosenCardRect.left)
          + "px, " + (discardPileRect.top - chosenCardRect.top) + "px); -ms-transform: translate(" + (discardPileRect.left - chosenCardRect.left)
            + "px, " + (discardPileRect.top - chosenCardRect.top) + "px); transform: translate(" + (discardPileRect.left - chosenCardRect.left)
              + "px, " + (discardPileRect.top - chosenCardRect.top) + "px); }", 0);
      }
      catch(error) {
        // console.log(error);
      }

      let chosenClass = document.getElementById(chosen.id).getAttribute("class");

      document.getElementById(chosen.id).setAttribute("class", chosenClass + " playCard");

      if (this.length < 8) {
        document.getElementById(chosen.id).setAttribute("style", "z-index: 1");
      }

      setTimeout(function() {

        try{
          document.styleSheets[0].deleteRule(0);
        }
        catch(error) {
          // console.log(error);
        }

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

export default Computer;
