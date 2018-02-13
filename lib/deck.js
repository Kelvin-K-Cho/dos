const Card = require("./card");
import shuffle from 'lodash/shuffle';

class Deck extends Array {

  constructor() {
    super();

    let numbers = Card.numbers();
    let colors = Card.colors();
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

    

  }

  shuffle() {
    shuffle(this);
  }


}
