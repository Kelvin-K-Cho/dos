// const Pile = require("./pile");
import Pile from "./pile";
// const Deck = require("./deck");
import Deck from "./deck";

class Player extends Pile {
  constructor() {
    super();
  }

  findPlayable(discardPile) {
    let playable = [];
    for (let i = 0; i < this.length; i++) {
      if(this[i].type === discardPile[0].type || this[i].color === discardPile[0].color || this[i].color === "Wild") {
        playable.push(this[i]);
      }
    }
    return playable;
  }

  draw(cards, deck, discardPile, id) {
    for (let i = 0; i < cards; i++) {
      deck.check(discardPile);
      let card = deck.take();
      this.push(card);
    }
    let hand = document.getElementById(id);

    while(hand.hasChildNodes()) {
      hand.removeChild(hand.lastChild);
    }
    this.show(this.length, id);
  }

  cleanup(card, id, discardPile) {
    for (let i = 0; i < this.length; i++) {
      if (this[i].id === card.id) {
        this.splice(i, 1);
      }
    }

    let hand = document.getElementById(id);

    while(hand.hasChildNodes()) {
      hand.removeChild(hand.lastChild);
    }
    this.show(this.length, id);

    discardPile.unshift(card);

    let pile = document.getElementById("discardPile");
    pile.removeChild(pile.firstChild);

    discardPile.show(1, "discardPile");
  }

  playWild(who, otherHand, discardPile, deck) {
    if (who === "human") {
      document.getElementById("wildMenu").removeAttribute("class", "hide");
      document.getElementById("wildMenu").onclick = function(event) {
        if(event.target.parentNode.id === "wildMenu" && event.target.classList.contains("wildButton")) {
          document.getElementById("wildMenu").setAttribute("class", "hide");
          document.getElementById("discardPile").firstChild.setAttribute("class", "card " + event.target.id);
          discardPile[0].color = event.target.id;
          otherHand.computerTurn(discardPile, this, deck);
        }
      }.bind(this);
    } else if (who === "computer") {
      let handColors = {};
      this.forEach(function(i) {
        handColors[i.color] = (handColors[i.color] || 0) + 1;
      });
      let sortedColors = [];
      sortedColors = Object.keys(handColors).sort(function(a,b){
        return handColors[b] - handColors[a];
      });
      if(sortedColors.indexOf("Wild") !== -1) {
        sortedColors.splice(sortedColors.indexOf("Wild"), 1);
      }
      if(sortedColors.length === 0) {
        sortedColors.push("Red");
      }
      setTimeout(function(){
        document.getElementById("discardPile").firstChild.setAttribute("class", "card " + sortedColors[0]);
        discardPile[0].color = sortedColors[0];
        otherHand.startTurn(discardPile, this, deck);
      }.bind(this), 1000);
    }
  }

  gameOver(winner) {
    let placeholder = document.createElement("div");
    placeholder.setAttribute("id", "placeholder");

    if (winner === "human") {
      document.getElementById("humanHand").appendChild(placeholder);
      document.getElementById("gameOverMessage").innerHTML = "You win!";

      let humanWinsImage = document.createElement("img");
      humanWinsImage.setAttribute("src", "./assets/YouWin.png");
      humanWinsImage.setAttribute("alt", "You win!");

      document.getElementById("gameOverScreen").appendChild(humanWinsImage);
    } else {
      document.getElementById("computerHand").appendChild(placeholder);
      document.getElementById("gameOverMessage").innerHTML = "You lose!";

      let computerWinsImage = document.createElement("img");

      computerWinsImage.setAttribute("src", "./assets/YouLose.png");
      computerWinsImage.setAttribute("alt", "You lose!");

      document.getElementById("gameOverScreen").appendChild(computerWinsImage);

      setTimeout(function() {
        document.getElementById("overlay").removeAttribute("class", "hide");
        document.getElementById("gameOverScreen").removeAttribute("class", "hide");
      }, 500);

      document.querySelector("body").addEventListener("click", function(event) {
        if(event.target.id === "yesButton") {
          window.location.reload();
        }
      });

    }
  }

}

// module.exports = Player;
export default Player;
