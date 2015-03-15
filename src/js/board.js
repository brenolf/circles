export default class Board {

    constructor (canvas_id) {
        let canvas = document.getElementById(canvas_id);

        this.bounds = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        canvas.setAttribute('width', this.bounds.width + 'px');
        canvas.setAttribute('height', this.bounds.height + 'px');

        this.context = canvas.getContext('2d');
    }

    reset () {
        let w = this.bounds.width;
        let h = this.bounds.height;

        return this.context.clearRect(0, 0, w, h);
    }

    get getContext () {
        return this.context;
    }

    get getBounds () {
        return this.bounds;
    }

    get randomPoint () {
        return {
            x: ~~(Math.random() * this.bounds.width),
            y: ~~(Math.random() * this.bounds.height)
        }
    }

}