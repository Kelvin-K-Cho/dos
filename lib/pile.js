class Pile extends Array {
  constructor(){
    super();
  }

  show(cards, id) {
    for(let i = 0; i < cards; i++) {
      let cardDiv = document.createElement("div");

      document.getElementById(id).append(cardDiv);

      cardDiv.setAttribute("class", "card " + this[i].color);

      cardDiv.setAttribute("id", this[i].id);

      if(cards > 7){
        cardDiv.setAttribute("style", "z-index: " + (i + 1) + "; right: " + i * (((this.length - 7) * (0.1428 * 100)) / (this.length - 1)) + '%');
      }

      let cardTextDiv = document.createElement("div");

      document.getElementById(this[i].id).appendChild(cardTextDiv);

      cardTextDiv.innerHTML = this[i].type;

      cardTextDiv.setAttribute("class", "cardText");

      if (id === "computerHand") {
        cardTextDiv.innerHTML = "DOS";
      } else {
        cardTextDiv.innerHTML = this[i].type;
        if(typeof this[i].type === "number") {
          cardDiv.firstChild.setAttribute("style", "font-size: 210%; margin-top: 40.8%");
        }
      }
    }
  }

}

module.exports = Pile;
