import Board from './board';
import Circle from './circle';

export default class Game {

    constructor (canvas_id) {
        this.board = new Board(canvas_id);
        this.queue = [];
        
        this.start();
    }

    start () {
        this._addBlob();
        this._resize();
        this.timer = window.requestAnimationFrame(this.start.bind(this));
    }

    stop () {
        cancelAnimationFrame(this.timer);
        this.timer = null;
    }

    _addBlob () {
        let c = new Circle(this.board.getContext);
        let position = this.board.randomPoint;
        position.radius = 50;

        this.queue.push(position);

        c.setPosition = [position.x, position.y];
        c.setRadius = position.radius;

        c.draw();
    }

    _resize () {

    }

}