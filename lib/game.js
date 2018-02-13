const Deck = require("./deck");

class Game {

  constructor() {

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



}
