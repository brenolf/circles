require("babel/polyfill");

import Game from "./game.js";

window.onload = function () {
    var game = new Game('game');
}