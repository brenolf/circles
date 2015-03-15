import Board from './board';
import Circle from './circle';

export default class Game {

    constructor (canvas_id) {
        this.board = new Board(canvas_id);
        this.queue = [];
        this.n = 30;
        this.threshold = 1000;
        this.timer = null;

        this.bindClick();
        this.bindKeyPress();
        
        // this.start();
    }

    start () {
        this.board.reset();

        if (this.queue.length < this.n)
            this.addBlob();
        
        this.resize();
        
        this.timer = window.requestAnimationFrame(this.start.bind(this));
    }

    stop () {
        cancelAnimationFrame(this.timer);
        this.timer = null;
    }

    bindClick () {
        let _ = this;

        window.onclick = function (event) {
            let [x, y] = [event.pageX, event.pageY];
            _.propagate(x, y);
        };
    }

    bindKeyPress () {
        let _ = this;

        window.onkeyup = function (event) {
            if (event.keyCode === 32) {
                if (_.timer === null)
                    _.start();

                else
                    _.stop();
            }
        };
    }

    propagate (x, y) {
        let length = this.queue.length;

        for (let i = 0; i < length; i++) {
            let circle = this.queue[i];

            if (circle.inside(x, y)) {
                this.queue.splice(i, 1);
                break;
            }
        }
    }

    addBlob () {
        let circle = new Circle(this.board.getContext);
        let position = this.board.randomPoint;
        position.radius = 0;

        circle.setPosition = [position.x, position.y];
        circle.setRadius = position.radius;

        this.queue.push(circle);

        circle.draw();
    }

    resize () {
        let length = this.queue.length - 1;

        for (let i = length; i >= 0; i--) {
            let circle = this.queue[i];

            circle.setRadius = circle.getRadius + 0.3;
            circle.draw();

            if (circle.getRadius >= this.threshold)
                this.queue.splice(i, 1);
        }
    }

}