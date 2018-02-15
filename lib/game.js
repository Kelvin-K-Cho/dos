// const Card = require("./card");
import Card from "./card";
// const Deck = require("./deck");
import Deck from './deck';
// const Human = require("./human");
import Human from './human';
// const Computer = require("./computer");
import Computer from './computer';
// const Player = require("./player");
import Player from './player';
// const Pile = require("./pile");
import Pile from './pile';

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

  deal() {

    for (let i = 0; i < 7; i++) {
      this.humanHand.push(this.deck.take());
      this.computerHand.push(this.deck.take());
    }

    while(this.deck.first().color === "Wild") {
      let mulligan = this.deck.take();
      this.deck.push(mulligan);
    }

    this.discardPile.push(this.deck.take());

    this.computerHand.show(this.computerHand.length, "computerHand");
    this.humanHand.show(this.humanHand.length, "humanHand");
    this.discardPile.show(1, "discardPile");

    this.humanHand.humanTurn(this.discardPile, this.computerHand, this.deck);
  }

}

// module.exports = Game;
export default Game;
