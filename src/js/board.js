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

    getContext () {
        return this.context;
    }

    getBounds () {
        return this.bounds;
    }

    reset () {
        let w = this.bounds.width;
        let h = this.bounds.height;

        return this.context.clearRect(0, 0, w, h);
    }

}