import Board from './board';
import Circle from './circle';

export default class Game {

    constructor (canvas_id) {
        this.board = new Board(canvas_id);
        this.queue = [];
        this.n = 0;
        
        // this.start();
    }

    start () {
        this.n++;

        if (this.n < 10)
            this._addBlob();

        this._resize();
        
        this.timer = window.requestAnimationFrame(this.start.bind(this));
    }

    stop () {
        cancelAnimationFrame(this.timer);
        this.timer = null;
    }

    _addBlob () {
        let circle = new Circle(this.board.getContext);
        let position = this.board.randomPoint;
        position.radius = 50;

        circle.setPosition = [position.x, position.y];
        circle.setRadius = position.radius;

        this.queue.push(circle);

        circle.draw();
    }

    _resize () {
        for (let circle of this.queue) {
            circle.setRadius = circle.getRadius + 0.5;
            circle.draw();
        }
    }

}