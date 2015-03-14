require("babel/polyfill");

import Game from "./game.js";

window.onload = function () {
    window.game = new Game('game');
}