const Card = require("./card");
const Deck = require("./deck");
const Human = require("./human");
const Computer = require("./computer");
const Player = require("./player");
const Pile = require("./pile");

class Game {

  constructor() {
    this.deck = new Deck();
    this.humanHand = new Human();
    this.computerHand = new Computer();
    this.discardPile = new Pile();
  }

  scale() {
    let container = document.getElementById("container");

    container.scale = function() {
      const widthToHeight = 1920 / 1080;
      let newWidth = window.innerWidth;
      let newHeight = window.innerHeight;
      let newWidthToHeight = newWidth / newHeight;
      if (widthToHeight >= newWidthToHeight) {
        newHeight = newWidth / widthToHeight;
        this.style.height = newHeight + "px";
        this.style.width = newWidth + "px";
      } else {
        newWidth = newHeight * widthToHeight;
        this.style.width = newWidth + "px";
        this.style.height = newHeight + "px";
      }
      this.style.marginTop = (-newHeight / 2) + "px";
      this.style.marginLeft = (-newWidth / 2) + "px";
      document.body.style.fontSize = (newWidth * 0.14) + "%";
    };

    container.scale();
    window.onresize = function() {
      container.scale();
    };
  }

  deal(deck) {

    for (let i = 0; i < 7; i++) {
      this.humanHand.push(deck.take());
      this.computerHand.push(deck.take());
    }

    while(deck.first().color === "Wild") {
      let mulligan = deck.take();
      deck.push(mulligan);
    }

    this.discardPile.push(deck.take());

    this.humanHand.show(this.humanHand.length, "playerHand");
    this.computerHand.show(this.computerHand.length, "computerHand");
    this.discardPile.show(1, "discardPile");

    //Write the execute player turn here.

  }

}

module.exports = Game;
