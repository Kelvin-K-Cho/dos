const Pile = require("./pile");
const Deck = require("./deck");

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
          document.getELementById("discardPile").firstChild.setAttribute("class", "card " + event.target.id);
          discardPile[0].color = event.target.id;
        }
      };
    } else if (who === "computer") {

      let handColors = {};

      this.forEach(function(i) {
        handColors[i.color] = (handColors[i.color] || 0) + 1;
      });

      let sortedColors = [];

      //WRITE THIS.
    }
  }

}

module.exports = Player;
