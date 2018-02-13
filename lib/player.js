class Player extends Array {
  constructor() {
    super();
  }

  showCards(numberOfCards, id, cards) {
    for(let i = 0; i < numberOfCards; i++) {
      let cardDiv = document.createElement("div");

      document.getElementById(id).append(cardDiv);

      cardDiv.setAttribute("class", "card " + cards[i].color);

      cardDiv.setAttribute("id", cards[i].id);

      if(numberOfCards > 7){
        cardDiv.setAttribute("style", "z-index: " + (i + 1) + "; right: " + i * (((cards.length - 7) * (0.1428 * 100)) / (cards.length - 1)) + '%');
      }

      let cardTextDiv = document.createElement("div");

      document.getElementById(cards[i].id).appendChild(cardTextDiv);

      cardTextDiv.innerHTML = cards[i].type;
    }
  }
}
