# Dos Production Readme

Dos, is a reimagined version of the classic card game, Uno.  Written in JavaScript, the rules are the same aside from a few key differences.

1. There are no points.  Players only play against a single AI opponent.
2. There are no Reverse cards and Draw Two does not skip a turn.
3. Uno does not need to be declared.

Application Link: [Dos](https://kelvin-k-cho.github.io/dos/)

![Game](https://s3-us-west-1.amazonaws.com/hallyu-dev/images/Screen+Shot+2018-02-16+at+10.10.20+PM.png)

# Features

+ Players can draw, play cards and pass turn.
+ AI plays cards as well and attempts to win.
+ Game is replayable.

# Challenges
1.  Rendering the hands would sometimes bug out because the id's of the cards would overlap and the app would draw over a drawn card.  In order to minimize this occurrence, I added some randomization to the id generated when constructing a deck of color coded cards.

```
for(let i = 0; i < colors.length; i++) {
  for(let j = 0; j < numbers.length; j++) {
    let card = new Card(
      String([numbers[j] + random(0, 10000)]),
      numbers[j],
      colors[i]);
    this.push(card);
  }
}
```
2.  In order to provide user interaction with the game, event listeners were added onto the card elements.  However, due to separating the functions under each class, the context is lost when invoking another instance method.  In order to preserve the context, binding was needed.

```
document.addEventListener("click", function(event) {

  let playable = this.findPlayable(discardPile);

  if(document.getElementById("humanHand").className !== "disabled" && event.target.parentNode.id === "humanHand" && event.target.classList.contains("card")) {
    this.humanClickCard(event, playable, discardPile, computerHand, deck);
  } else if (event.target.id === "drawButton" && event.target.className !== "disabled") {
    this.humanDrawCard(deck, discardPile, event);
  } else if (event.target.id === "passButton" && document.getElementById("drawButton").className === "disabled" && event.target.className !== "disabled") {
    this.humanPass(computerHand, discardPile, deck, event);
  }

}.bind(this));
```

# Technology

Dos is designed with the following:

- Vanilla Javascript for overall gameplay.
- HTML/CSS for visuals and styling.
- Webpack to bundle and modularize program, enforcing Separation of Concerns.

# Future Implementation
+ Add a modal with an event listener to display how to play to users.
