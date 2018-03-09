/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(8),
    getRawTag = __webpack_require__(33),
    objectToString = __webpack_require__(34);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pile__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deck__ = __webpack_require__(5);



class Player extends __WEBPACK_IMPORTED_MODULE_0__pile__["a" /* default */] {
  constructor() {
    super();
  }

  findPlayable(discardPile) {
    let playable = [];
    for (let i = 0; i < this.length; i++) {
      if(this[i].type === discardPile[0].type || this[i].color === discardPile[0].color || this[i].color === "Wild") {
        playable.push(this[i]);
      }
    }
    return playable;
  }

  draw(cards, deck, discardPile, id) {
    for (let i = 0; i < cards; i++) {
      deck.check(discardPile);
      let card = deck.take();
      this.push(card);
    }
    let hand = document.getElementById(id);

    while(hand.hasChildNodes()) {
      hand.removeChild(hand.lastChild);
    }
    this.show(this.length, id);
  }

  cleanup(card, id, discardPile) {
    for (let i = 0; i < this.length; i++) {
      if (this[i].id === card.id) {
        this.splice(i, 1);
      }
    }

    let hand = document.getElementById(id);

    while(hand.hasChildNodes()) {
      hand.removeChild(hand.lastChild);
    }
    this.show(this.length, id);

    discardPile.unshift(card);

    let pile = document.getElementById("discardPile");
    pile.removeChild(pile.firstChild);

    discardPile.show(1, "discardPile");
  }

  playWild(who, otherHand, discardPile, deck) {
    if (who === "human") {
      document.getElementById("wildMenu").removeAttribute("class", "hide");
      document.getElementById("wildMenu").onclick = function(event) {
        if(event.target.parentNode.id === "wildMenu" && event.target.classList.contains("wildButton")) {
          document.getElementById("wildMenu").setAttribute("class", "hide");
          document.getElementById("discardPile").firstChild.setAttribute("class", "card " + event.target.id);
          discardPile[0].color = event.target.id;
          otherHand.computerTurn(discardPile, this, deck);
        }
      }.bind(this);
    } else if (who === "computer") {
      let handColors = {};
      this.forEach(function(i) {
        handColors[i.color] = (handColors[i.color] || 0) + 1;
      });
      let sortedColors = [];
      sortedColors = Object.keys(handColors).sort(function(a,b){
        return handColors[b] - handColors[a];
      });
      if(sortedColors.indexOf("Wild") !== -1) {
        sortedColors.splice(sortedColors.indexOf("Wild"), 1);
      }
      if(sortedColors.length === 0) {
        sortedColors.push("Red");
      }
      setTimeout(function(){
        document.getElementById("discardPile").firstChild.setAttribute("class", "card " + sortedColors[0]);
        discardPile[0].color = sortedColors[0];
        otherHand.startTurn(discardPile, this, deck);
      }.bind(this), 1000);
    }
  }

  gameOver(winner) {
    let placeholder = document.createElement("div");
    placeholder.setAttribute("id", "placeholder");

    if (winner === "human") {
      document.getElementById("humanHand").appendChild(placeholder);
      document.getElementById("gameOverMessage").innerHTML = "You win!";

      let humanWinsImage = document.createElement("img");
      humanWinsImage.setAttribute("src", "./assets/YouWin.png");
      humanWinsImage.setAttribute("alt", "You win!");

      document.getElementById("gameOverScreen").appendChild(humanWinsImage);
    } else {
      document.getElementById("computerHand").appendChild(placeholder);
      document.getElementById("gameOverMessage").innerHTML = "You lose!";

      let computerWinsImage = document.createElement("img");

      computerWinsImage.setAttribute("src", "./assets/YouLose.png");
      computerWinsImage.setAttribute("alt", "You lose!");

      document.getElementById("gameOverScreen").appendChild(computerWinsImage);

      }
    setTimeout(function() {
      document.getElementById("overlay").removeAttribute("class", "hide");
      document.getElementById("gameOverScreen").removeAttribute("class", "hide");
    }, 500);

    document.querySelector("body").addEventListener("click", function(event) {
      if(event.target.id === "yesButton") {
        window.location.reload();
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Player);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  }

}

Card.numbers = Object.values(NUMBERS);
Card.colors = Object.values(COLORS);


/* harmony default export */ __webpack_exports__["a"] = (Card);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_shuffle__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_shuffle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_shuffle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_head__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_random__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_random___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_random__);





class Deck extends Array {

  constructor() {
    super();

    let numbers = __WEBPACK_IMPORTED_MODULE_0__card__["a" /* default */].numbers;
    let colors = __WEBPACK_IMPORTED_MODULE_0__card__["a" /* default */].colors;
    let dos = [1,2];
    let quattro = [1,2,3,4];

    for(let i = 0; i < colors.length; i++) {
      for(let j = 0; j < numbers.length; j++) {
        let card = new __WEBPACK_IMPORTED_MODULE_0__card__["a" /* default */](
          String([numbers[j] + __WEBPACK_IMPORTED_MODULE_3_lodash_random___default()(0, 10000)]),
          numbers[j],
          colors[i]);
        this.push(card);
      }
    }

    for(let i = 0; i < colors.length; i++) {
      for(let j = 1; j < numbers.length; j++) {
        let card = new __WEBPACK_IMPORTED_MODULE_0__card__["a" /* default */](
          String([numbers[j] + __WEBPACK_IMPORTED_MODULE_3_lodash_random___default()(0, 10000)]),
          numbers[j],
          colors[i]);
          this.push(card);
      }
    }

    for(let i = 0; i < colors.length; i++) {
      for(let j = 0; j < dos.length; j++) {
        let draw2 = new __WEBPACK_IMPORTED_MODULE_0__card__["a" /* default */](
          "D2" + colors[i] + dos[j],
          "Draw Two",
          colors[i]
        );
        let skip = new __WEBPACK_IMPORTED_MODULE_0__card__["a" /* default */](
          "Skip" + colors[i] + dos[j],
          "Skip",
          colors[i]
        );
        this.push(draw2);
        this.push(skip);
      }
    }

    for(let i = 0; i < quattro.length; i++) {
      let wild = new __WEBPACK_IMPORTED_MODULE_0__card__["a" /* default */](
        "Wild" + quattro[i],
        "Wild",
        "Wild"
      );
      let wild4 = new __WEBPACK_IMPORTED_MODULE_0__card__["a" /* default */](
        "Wild Draw Four" + quattro[i],
        "Wild Draw Four",
        "Wild"
      );
      this.push(wild);
      this.push(wild4);
    }

    this.shuffle();
  }

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
    return __WEBPACK_IMPORTED_MODULE_2_lodash_head___default()(this);
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

/* harmony default export */ __webpack_exports__["a"] = (Deck);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var baseRandom = __webpack_require__(7);

/**
 * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @param {number} [size=array.length] The size of `array`.
 * @returns {Array} Returns `array`.
 */
function shuffleSelf(array, size) {
  var index = -1,
      length = array.length,
      lastIndex = length - 1;

  size = size === undefined ? length : size;
  while (++index < size) {
    var rand = baseRandom(index, lastIndex),
        value = array[rand];

    array[rand] = array[index];
    array[index] = value;
  }
  array.length = size;
  return array;
}

module.exports = shuffleSelf;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeRandom = Math.random;

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

module.exports = baseRandom;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(9);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(10);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(45),
    isLength = __webpack_require__(14);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var baseRandom = __webpack_require__(7),
    isIterateeCall = __webpack_require__(47),
    toFinite = __webpack_require__(49);

/** Built-in method references without a dependency on `root`. */
var freeParseFloat = parseFloat;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min,
    nativeRandom = Math.random;

/**
 * Produces a random number between the inclusive `lower` and `upper` bounds.
 * If only one argument is provided a number between `0` and the given number
 * is returned. If `floating` is `true`, or either `lower` or `upper` are
 * floats, a floating-point number is returned instead of an integer.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Number
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @param {boolean} [floating] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 * @example
 *
 * _.random(0, 5);
 * // => an integer between 0 and 5
 *
 * _.random(5);
 * // => also an integer between 0 and 5
 *
 * _.random(5, true);
 * // => a floating-point number between 0 and 5
 *
 * _.random(1.2, 5.2);
 * // => a floating-point number between 1.2 and 5.2
 */
function random(lower, upper, floating) {
  if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
    upper = floating = undefined;
  }
  if (floating === undefined) {
    if (typeof upper == 'boolean') {
      floating = upper;
      upper = undefined;
    }
    else if (typeof lower == 'boolean') {
      floating = lower;
      lower = undefined;
    }
  }
  if (lower === undefined && upper === undefined) {
    lower = 0;
    upper = 1;
  }
  else {
    lower = toFinite(lower);
    if (upper === undefined) {
      upper = lower;
      lower = 0;
    } else {
      upper = toFinite(upper);
    }
  }
  if (lower > upper) {
    var temp = lower;
    lower = upper;
    upper = temp;
  }
  if (floating || lower % 1 || upper % 1) {
    var rand = nativeRandom();
    return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
  }
  return baseRandom(lower, upper);
}

module.exports = random;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

      if (cards > 7){
        cardDiv.setAttribute("style", "z-index: " + (i + 1) + "; right: " + i * (((this.length - 7) * (0.1428 * 100)) / (this.length - 1)) + '%');
      }

      let cardTextDiv = document.createElement("div");

      document.getElementById(this[i].id).appendChild(cardTextDiv);

      cardTextDiv.innerHTML = this[i].type;

      cardTextDiv.setAttribute("class", "cardText");

      if (id === "computerHand") {
        cardTextDiv.innerHTML = "DOS";
      } else {
        cardDiv.innerHTML = cardTextDiv.outerHTML;
        cardTextDiv.innerHTML = this[i].type;
        if(typeof this[i].type === "number") {
          cardDiv.firstChild.setAttribute("style", "font-size: 210%; margin-top: 40.8%");
        }
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Pile);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(19);


//credit to dougtebay for logic & implementation
//https://github.com/dougtebay/

document.addEventListener("DOMContentLoaded", function() {
    const game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */]();
    game.scale();
    game.deal();
});


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__human__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__computer__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pile__ = __webpack_require__(17);







class Game {

  constructor() {
    this.deck = new __WEBPACK_IMPORTED_MODULE_1__deck__["a" /* default */]();
    this.humanHand = new __WEBPACK_IMPORTED_MODULE_2__human__["a" /* default */]();
    this.computerHand = new __WEBPACK_IMPORTED_MODULE_3__computer__["a" /* default */]();
    this.discardPile = new __WEBPACK_IMPORTED_MODULE_5__pile__["a" /* default */]();
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

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var arrayShuffle = __webpack_require__(21),
    baseShuffle = __webpack_require__(23),
    isArray = __webpack_require__(11);

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * _.shuffle([1, 2, 3, 4]);
 * // => [4, 1, 3, 2]
 */
function shuffle(collection) {
  var func = isArray(collection) ? arrayShuffle : baseShuffle;
  return func(collection);
}

module.exports = shuffle;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var copyArray = __webpack_require__(22),
    shuffleSelf = __webpack_require__(6);

/**
 * A specialized version of `_.shuffle` for arrays.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function arrayShuffle(array) {
  return shuffleSelf(copyArray(array));
}

module.exports = arrayShuffle;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var shuffleSelf = __webpack_require__(6),
    values = __webpack_require__(24);

/**
 * The base implementation of `_.shuffle`.
 *
 * @private
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function baseShuffle(collection) {
  return shuffleSelf(values(collection));
}

module.exports = baseShuffle;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(25),
    keys = __webpack_require__(27);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(26);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(28),
    baseKeys = __webpack_require__(41),
    isArrayLike = __webpack_require__(15);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(29),
    isArguments = __webpack_require__(30),
    isArray = __webpack_require__(11),
    isBuffer = __webpack_require__(35),
    isIndex = __webpack_require__(13),
    isTypedArray = __webpack_require__(37);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(31),
    isObjectLike = __webpack_require__(1);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(0),
    isObjectLike = __webpack_require__(1);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(9),
    stubFalse = __webpack_require__(36);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(38),
    baseUnary = __webpack_require__(39),
    nodeUtil = __webpack_require__(40);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(0),
    isLength = __webpack_require__(14),
    isObjectLike = __webpack_require__(1);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(10);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(42),
    nativeKeys = __webpack_require__(43);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(44);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(0),
    isObject = __webpack_require__(2);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return (array && array.length) ? array[0] : undefined;
}

module.exports = head;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(48),
    isArrayLike = __webpack_require__(15),
    isIndex = __webpack_require__(13),
    isObject = __webpack_require__(2);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(50);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2),
    isSymbol = __webpack_require__(51);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(0),
    isObjectLike = __webpack_require__(1);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__(3);


class Human extends __WEBPACK_IMPORTED_MODULE_0__player__["a" /* default */] {
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

      let playable = this.findPlayable(discardPile);

      if(document.getElementById("humanHand").className !== "disabled" && event.target.parentNode.id === "humanHand" && event.target.classList.contains("card")) {
        this.humanClickCard(event, playable, discardPile, computerHand, deck);
      } else if (event.target.id === "drawButton" && event.target.className !== "disabled") {
        this.humanDrawCard(deck, discardPile, event);
      } else if (event.target.id === "passButton" && document.getElementById("drawButton").className === "disabled" && event.target.className !== "disabled") {
        this.humanPass(computerHand, discardPile, deck, event);
      } else if(event.target.id === "infoButton") {
        this.showInfo();
      }
    }.bind(this));
  }

  humanClickCard(event, playable, discardPile, computerHand, deck) {
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

/* harmony default export */ __webpack_exports__["a"] = (Human);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_random__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_random___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_random__);




class Computer extends __WEBPACK_IMPORTED_MODULE_0__player__["a" /* default */] {
  constructor(){
    super();
  }

  computerTurn(discardPile, humanHand, deck) {

    document.getElementById("humanFace").setAttribute("class", "mute");

    document.getElementById("computerFace").removeAttribute("class", "mute");

    if(discardPile[0].type === "Skip" && !(document.getElementById("discardPile").firstChild.classList.contains("disabled"))) {

      document.getElementById("discardPile").firstChild.setAttribute("class", "card " + discardPile[0].color + " disabled");

      humanHand.startTurn(discardPile, this, deck);
    } else {

      let playable = this.findPlayable(discardPile);

      if(discardPile[0].type === "Draw Two" && !(document.getElementById("discardPile").firstChild.classList.contains("disabled"))) {

        this.computerDrawCards(2, deck, discardPile, playable, humanHand);

      } else if(discardPile[0].type === "Wild Draw Four" && !(document.getElementById("discardPile").firstChild.classList.contains("disabled"))) {

        this.computerDrawCards(4, deck, discardPile, playable, humanHand);

      } else if (playable.length === 0) {

        this.computerDrawCard(deck, discardPile, playable, humanHand);

      } else {

        this.computerPlayCard(playable, discardPile, humanHand, deck);

      }
    }
  }

  computerDrawCard(deck, discardPile, playable, humanHand) {
    setTimeout(function() {
      this.draw(1, deck, discardPile, "computerHand");

      playable = this.findPlayable(discardPile);

      if (playable.length > 0) {
        this.computerPlayCard(playable, discardPile, humanHand, deck);
      } else {
        humanHand.startTurn(discardPile, this, deck);
      }

    }.bind(this), 1000);
  }

  computerDrawCards(cards, deck, discardPile, playable, humanHand) {
    setTimeout(function() {
      this.draw(cards, deck, discardPile, "computerHand");

      document.getElementById("discardPile").firstChild.setAttribute("class", "card " + discardPile[0].color + " disabled");

      playable = this.findPlayable(discardPile);

      if(playable.length === 0) {
        this.computerDrawCard(deck, discardPile, playable, humanHand);
      } else {
        this.computerPlayCard(playable, discardPile, humanHand, deck);
      }

    }.bind(this), 1000);
  }

  computerPlayCard(playable, discardPile, humanHand, deck) {

    setTimeout(function(){
      let chosen = playable[__WEBPACK_IMPORTED_MODULE_1_lodash_random___default()(0, playable.length-1)];

      let chosenCardRect = document.getElementById(chosen.id).getBoundingClientRect();

      let discardPileRect = document.getElementById("discardPile").firstChild.getBoundingClientRect();

      try {
      document.styleSheets[0].insertRule(".playCard { -webkit-transform: translate(" + (discardPileRect.left - chosenCardRect.left)
        + "px, " + (discardPileRect.top - chosenCardRect.top) + "px); -moz-transform: translate(" + (discardPileRect.left - chosenCardRect.left)
          + "px, " + (discardPileRect.top - chosenCardRect.top) + "px); -ms-transform: translate(" + (discardPileRect.left - chosenCardRect.left)
            + "px, " + (discardPileRect.top - chosenCardRect.top) + "px); transform: translate(" + (discardPileRect.left - chosenCardRect.left)
              + "px, " + (discardPileRect.top - chosenCardRect.top) + "px); }", 0);
      }
      catch(error) {
        // console.log(error);
      }

      let chosenClass = document.getElementById(chosen.id).getAttribute("class");

      document.getElementById(chosen.id).setAttribute("class", chosenClass + " playCard");

      if (this.length < 8) {
        document.getElementById(chosen.id).setAttribute("style", "z-index: 1");
      }

      setTimeout(function() {

        try{
          document.styleSheets[0].deleteRule(0);
        }
        catch(error) {
          // console.log(error);
        }

        this.cleanup(chosen, "computerHand", discardPile);

        if (chosen.color === "Wild" && this.length > 0) {
          this.playWild("computer", humanHand, discardPile, deck);
        } else if (this.length > 0) {
          humanHand.startTurn(discardPile, this, deck);
        } else {
          this.gameOver("computer");
        }
      }.bind(this), 400);



    }.bind(this), 1000);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Computer);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map