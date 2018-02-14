const COLORS = {
  red: "Red",
  yellow: "Yellow",
  green: "Green",
  blue: "Blue"
};

const NUMBERS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

class Card {

  constructor(id, type, color) {
    this.id = id;
    this.type = type;
    this.color = color;
    // this.numbers = Object.values(NUMBERS);

  }

  // numbers() {
  //   return Object.values(this.NUMBERS);
  // }
  //
  // colors() {
  //   return Object.values(COLORS);
  // }

}

Card.numbers = Object.values(NUMBERS);
Card.colors = Object.values(COLORS);


// module.exports = Card;
export default Card;
