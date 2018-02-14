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

  humanTurn(discardPile, computerHand, deck) {
    this.hoverCard(this);
    document.addEventListener("click", function(event) {

      let playable = this.findPlayable(discardPile);

      if(document.getElementById("humanHand").className !== "disabled" && event.target.parentNode.id === "humanHand" && event.target.classList.contains("card")) {
        //WRITE THIS OUT; this.clickedCard()
      }

    });
  }

  humanDrawCard(deck, discardPile, event) {
    this.draw(1, deck, discardPile, "humanHand");

    event.target.className = "disabled";

    document.getElementById("passButton").removeAttribute("class", "disabled");
  }

  humanPlayCard(event, cardClass, card, discardPile, computerHand, deck) {
    document.getElementById("humanHand").setAttribute("class", "disabled");
    document.getElementById("drawButton").setAttribute("class", "disabled");
    document.getElementById("passButton").setAttribute("class", "disabled");

    let cardRect = event.target.getBoundingClientRect();
    let discardPileRect = document.getElementById("discardPile").firstChild.getBoundingClientRect();

    document.styleSheets[0].insertRule(".playCard { -webkit-transform: translate(" + (discardPileRect.left - cardRect.left)
      + "px, " + (discardPileRect.top - cardRect.top) + "px); -moz-transform: translate(" + (discardPileRect.left - cardRect.left)
        + "px, " + (discardPileRect.top - cardRect.top) + "px); -ms-transform: translate(" + (discardPileRect.left - cardRect.left)
          + "px, " + (discardPileRect.top - cardRect.top) + "px); transform: translate(" + (discardPileRect.left - cardRect.left)
            + "px, " + (discardPileRect.top - cardRect.top) + "px); }", 0);

    event.target.setAttribute("class", cardClass + " playCard");
    setTimeout(function(){

      document.styleSheets[0].deleteRule(0);

      this.cleanup(card, "playerHand", discardPile);

      if (card.color === "Wild" && this.length > 0) {
        this.playWild("player", computerHand, discardPile, deck);
      } else if (this.length > 0) {
        // Write this out;
      }

    }, 300);

  }



  hoverCard() {

    let oldStyle = "";
    let newStyle = "";

    document.getElementById("humanHand").addEventListener("mouseover", function(event) {
      if(event.target.classList.contains("card")) {
        if(event.target.hasAttribute("style")) {
          oldStyle = event.target.getAttribute("style");
          newStyle = oldStyle.replace(/z-index: \w*;/, "z-index: " + (this.length + 1) + ";");
          event.target.setAttribute("style", newStyle + "; bottom: 10px");
        } else {
          event.target.setAttribute("style", "z-index: 2; bottom: 10px");
        }
      }
    });

    document.getElementById("humanHand").addEventListener("mouseout", function(event) {
      if(event.target.classList.contains("card")) {
        if(event.target.style.right) {
          event.target.setAttribute("style", oldStyle);
        } else {
          event.target.removeAttribute("style");
        }
      }
    });

  }

  playCard(event, cardClass, card, discardPile, computerHand, deck) {

    document.getElementById("humanHand").setAttribute("class", "disabled");
    document.getElementById("drawButton").setAttribute("class", "disabled");
    document.getElementById("passButton").setAttribute("class", "disabled");

    let cardRect = event.target.getBoundingClientRect();

    let discardPileRect = document.getElementById("discardPile").firstChild.getBoundingClientRect();

    document.styleSheets[0].insertRule(".playCard { -webkit-transform: translate(" + (discardPileRect.left - cardRect.left)
      + "px, " + (discardPileRect.top - cardRect.top) + "px); -moz-transform: translate(" + (discardPileRect.left - cardRect.left)
        + "px, " + (discardPileRect.top - cardRect.top) + "px); -ms-transform: translate(" + (discardPileRect.left - cardRect.left)
          + "px, " + (discardPileRect.top - cardRect.top) + "px); transform: translate(" + (discardPileRect.left - cardRect.left) + "px, "
            + (discardPileRect.top - cardRect.top) + "px); }", 0);

    event.target.setAttribute("class", cardClass + " playCard");

    setTimeout(function() {
      document.styleSheets[0].deleteRule(0);
    });

    this.cleanup(card, "humanHand", discardPile);

    if(card.color === "Wild" && this.length > 0) {
      //WRITE THIS OUT playWild
    }



  }

  shakeCard(event, cardClass) {
    event.target.setAttribute("class", cardClass + " shake");
    setTimeout(function() {
      event.target.setAttribute("class", cardClass);
    }, 500);
  }

}

module.exports = Human;
