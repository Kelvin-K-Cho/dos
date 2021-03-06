import Card from "./card";
import Deck from './deck';
import Human from './human';
import Computer from './computer';
import Player from './player';
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

    setTimeout(function() {
      document.getElementById("welcomeMessage").removeAttribute("class", "hide");
    }, 500);

    this.humanHand.humanTurn(this.discardPile, this.computerHand, this.deck);
  }

}

export default Game;
