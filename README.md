## Dos

### Background and Overview

Dos is a javascript version of Uno.  The rules are the same aside from a few key differences.

1. There are no points.  Players only play against a single AI opponent.
2. There are no Reverse cards and Draw Two does not skip a turn.
3. Uno does not need to be declared.

### Functionality & MVP

In Dos,
- [x] Players can draw, play cards and pass turn.
- [x] AI plays cards as well and attempts to win.
- [x] Game is replayable.

### Wireframes

The app will be a single screen where users can either click to play viable cards, click to draw a card and click to pass the turn once a card has been drawn.

![wireframes](https://s3-us-west-1.amazonaws.com/hallyu-dev/images/Screen+Shot+2018-02-11+at+8.51.44+PM.png)

### Architecture and Technologies

This project will be implemented with the following:

- Vanilla Javascript for overall gameplay.
- HTML/CSS for visuals and styling.
- Webpack to for bundling and to keep the program modular, enforcing Separation of Concerns.

### Implementation Timeline

**Day 1**: Setup node modules.  Create webpack and get the outline for each class done.

- [ ] Setup webpack.
- [ ] Create all the classes inside the lib folder.

**Day 2**: Setup index.html.  Complete the basic game class along with the deck functionality.
- [ ] Setup index.html
- [ ] Write game class.
- [ ] Write deck class.

**Day 3**: Write player/computer classes along with their functionalities.
- [ ] Write player class.
- [ ] Write computer class.

**Day 4**: Style the webpage and fix up outstanding errors.
- [ ] Style the html page.
