// const Card = require("./card");
import Card from "./card";
import shuffle from 'lodash/shuffle';
import head from 'lodash/head';

class Deck extends Array {

  constructor() {
    super();

    let numbers = Card.numbers;
    let colors = Card.colors;
    let dos = [1,2];
    let quattro = [1,2,3,4];

    for(let i = 0; i < colors.length; i++) {
      for(let j = 0; j < numbers.length; j++) {
        let card = new Card(
          String([numbers[j]]),
          numbers[j],
          colors[i]);
        this.push(card);
      }
    }

    for(let i = 0; i < colors.length; i++) {
      for(let j = 1; j < numbers.length; j++) {
        let card = new Card(
          String([numbers[j]]),
          numbers[j],
          colors[i]);
        this.push(card);
      }
    }

    for(let i = 0; i < colors.length; i++) {
      for(let j = 0; j < dos.length; j++) {
        let draw2 = new Card(
          "D2" + colors[i] + dos[j],
          "Draw Two",
          colors[i]
        );
        let skip = new Card(
          "Skip" + colors[i] + dos[j],
          "Skip",
          colors[i]
        );
        this.push(draw2);
        this.push(skip);
      }
    }

    for(let i = 0; i < quattro.length; i++) {
      let wild = new Card(
        "Wild" + quattro[i],
        "Wild",
        "Wild"
      );
      let wild4 = new Card(
        "Wild Draw Four" + quattro[i],
        "Wild Draw Four",
        "Wild"
      );
      this.push(wild);
      this.push(wild4);
    }
    this.shuffle();
  }

  // shuffle() {
  //   let shuffled = shuffle(this);
  //   return shuffled;
  // }

  shuffle() {
    let i = this.length;
    while (i) {
      let x = Math.floor(Math.random() * i--);
      let y = this[i];
      this[i] = this[x];
      this[x] = y;
    }
  }

  empty() {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  take() {
    if (this.empty()) {
      throw "Deck is empty";
    } else {
      return this.shift();
    }
  }

  first() {
    return head(this);
  }

  check(discardPile) {
    if (this.empty) {
      for (let i = 1; i < discardPile.length; i++) {
        if(discardPile[i].type === "Wild" || discardPile[i].type === "Wild Draw Four") {
          discardPile[i].color = "Wild";
        }
        this.push(discardPile[i]);
      }
      discardPile.splice(1, discardPile.length);
      this.shuffle();
    }
  }



}

// module.exports = Deck;
export default Deck;
