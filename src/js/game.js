import Board from "./board";
import Circle from "./circle";

export default class Game {

    constructor (canvas_id) {
        this.board = new Board(canvas_id);
        

        for (let i = 0; i < 1000; i++)
            new Circle(this.board);

    }

}