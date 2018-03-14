import Player from "./player";

class Human extends Player {
  constructor(){
    super();
  }

  startTurn(discardPile, computerHand, deck){

    if (discardPile[0].type === "Skip" && !(document.getElementById("discardPile").firstChild.classList.contains("disabled"))) {

      document.getElementById("discardPile").firstChild.setAttribute("class", "card " + discardPile[0].color + " disabled");

      computerHand.computerTurn(discardPile, this, deck);

    } else if (discardPile[0].type === "Draw Two" && !(document.getElementById("discardPile").firstChild.classList.contains("disabled"))){

      document.getElementById("discardPile").firstChild.setAttribute("class", "card " + discardPile[0].color + " disabled");

      this.draw(2, deck, discardPile, "humanHand");

      document.getElementById("humanHand").removeAttribute("class", "disabled");
      document.getElementById("drawButton").removeAttribute("class", "disabled");
      document.getElementById("computerFace").setAttribute("class", "mute");
      document.getElementById("humanFace").removeAttribute("class", "mute");

    } else if (discardPile[0].type === "Wild Draw Four" && !(document.getElementById("discardPile").firstChild.classList.contains("disabled"))) {

      document.getElementById("discardPile").firstChild.setAttribute("class", "card " + discardPile[0].color + " disabled");

      this.draw(4, deck, discardPile, "humanHand");

      document.getElementById("humanHand").removeAttribute("class", "disabled");
      document.getElementById("drawButton").removeAttribute("class", "disabled");
      document.getElementById("computerFace").setAttribute("class", "mute");
      document.getElementById("humanFace").removeAttribute("class", "mute");

    } else {

      document.getElementById("humanHand").removeAttribute("class", "disabled");
      document.getElementById("drawButton").removeAttribute("class", "disabled");
      document.getElementById("computerFace").setAttribute("class", "mute");
      document.getElementById("humanFace").removeAttribute("class", "mute");

    }

  }

  humanTurn(discardPile, computerHand, deck) {
    this.hover(this);
    document.addEventListener("click", function(event) {

      if(!(document.getElementById("welcomeMessage").classList.contains("hide")) && (event.target.parentNode.id === "humanHand" || event.target.innerHTML === "draw")) {
        document.getElementById("welcomeMessage").setAttribute("class", "hide");
      }

      if(document.getElementById("humanHand").className !== "disabled" && event.target.parentNode.id === "humanHand" && event.target.classList.contains("card")) {
        this.humanClickCard(event, discardPile, computerHand, deck);
      } else if (event.target.id === "drawButton" && event.target.className !== "disabled") {
        this.humanDrawCard(deck, discardPile, event);
      } else if (event.target.id === "passButton" && document.getElementById("drawButton").className === "disabled" && event.target.className !== "disabled") {
        this.humanPass(computerHand, discardPile, deck, event);
      } else if(event.target.id === "infoButton") {
        this.showInfo();
      }
    }.bind(this));
  }

  humanClickCard(event, discardPile, computerHand, deck) {
    let playable = this.findPlayable(discardPile);

    let cardClass = event.target.getAttribute("class");
    let cardId = event.target.getAttribute("id");

    for (let i = 0; i < playable.length; i++) {
      if (playable[i].id === cardId) {
        let card = playable[i];
        this.humanPlayCard(event, cardClass, card, discardPile, computerHand, deck);
      }

      if (i === (playable.length - 1) && !(event.target.classList.contains("playCard"))) {
        this.shake(event, cardClass);
      }
    }

    if(playable.length === 0 && !(event.target.classList.contains("playCard"))) {
      this.shake(event, cardClass);
    }
  }

  humanDrawCard(deck, discardPile, event) {
    this.draw(1, deck, discardPile, "humanHand");
    event.target.className = "disabled";
    document.getElementById("passButton").removeAttribute("class", "disabled");
  }

  humanPass(computerHand, discardPile, deck, event) {
    computerHand.computerTurn(discardPile, this, deck);
    event.target.className = "disabled";
    document.getElementById("humanHand").setAttribute("class", "disabled");
  }

  humanDrawCard(deck, discardPile, event) {
    this.draw(1, deck, discardPile, "humanHand");

    event.target.className = "disabled";

    document.getElementById("passButton").removeAttribute("class", "disabled");
  }

  humanPlayCard(event, cardClass, card, discardPile, computerHand, deck) {
    document.getElementById("humanHand").setAttribute("class", "disabled");
    document.getElementById("drawButton").setAttribute("class", "disabled");
    document.getElementById("passButton").setAttribute("class", "disabled");

    let cardRect = event.target.getBoundingClientRect();
    let discardPileRect = document.getElementById("discardPile").firstChild.getBoundingClientRect();

    //New Chrome update is stupid, breaks the animation on inserting rule.  Implemented error handling.
    try {
    document.styleSheets[0].insertRule(".playCard { -webkit-transform: translate(" + (discardPileRect.left - cardRect.left)
     + "px, " + (discardPileRect.top - cardRect.top) + "px); -moz-transform: translate(" + (discardPileRect.left - cardRect.left)
       + "px, " + (discardPileRect.top - cardRect.top) + "px); -ms-transform: translate(" + (discardPileRect.left - cardRect.left)
         + "px, " + (discardPileRect.top - cardRect.top) + "px); transform: translate(" + (discardPileRect.left - cardRect.left)
           + "px, " + (discardPileRect.top - cardRect.top) + "px); }", 0);
    }
    catch(error) {
      // console.log(error);
    }


    event.target.setAttribute("class", cardClass + " playCard");

    setTimeout(function(){

      try {
        document.styleSheets[0].deleteRule(0);
      }
      catch(error) {
        // console.log(error);
      }

      this.cleanup(card, "humanHand", discardPile);

        if (card.color === "Wild" && this.length > 0) {
        this.playWild("human", computerHand, discardPile, deck);
      } else if (this.length > 0) {
        computerHand.computerTurn(discardPile, this, deck);
      } else {
        this.gameOver("human");
      }

    }.bind(this), 300);

  }

  hover() {

    let oldStyle = "";
    let newStyle = "";

    document.getElementById("humanHand").addEventListener("mouseover", function(event) {
      if(event.target.classList.contains("card")) {
        if(event.target.hasAttribute("style")) {
          oldStyle = event.target.getAttribute("style");
          newStyle = oldStyle.replace(/z-index: \w*;/, "z-index: " + (this.length + 1) + ";");
          event.target.setAttribute("style", newStyle + "; bottom: 10px");
        } else {
          event.target.setAttribute("style", "z-index: 2; bottom: 10px");
        }
      }
    });

    document.getElementById("humanHand").addEventListener("mouseout", function(event) {
      if(event.target.classList.contains("card")) {
        if(event.target.style.right) {
          event.target.setAttribute("style", oldStyle);
        } else {
          event.target.removeAttribute("style");
        }
      }
    });

  }

  showInfo() {

    document.getElementById("overlay").removeAttribute("class", "hide");

    document.getElementById("infoScreen").removeAttribute("class", "hide");

    document.getElementById("infoScreen").onclick = function(event) {
      if(event.target.id === "exitButton") {
        document.getElementById("infoScreen").setAttribute("class", "hide");
        document.getElementById("overlay").setAttribute("class", "hide");
      }
    };
  }

  shake(event, cardClass) {
    event.target.setAttribute("class", cardClass + " shake");
    setTimeout(function() {
      event.target.setAttribute("class", cardClass);
    }, 500);
  }

}

export default Human;
