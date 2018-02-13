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

}

module.exports = Player;
