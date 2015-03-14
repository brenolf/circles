export default class Circle {

    constructor (board) {
        this.ctx = board.getContext();
        this.clipping_size = board.getBounds();
        this.bounds = this.draw();
    }

    draw () {
        let position = this._getPosition();
        let radius = 20;

        this.ctx.save();
        this.ctx.fillStyle = this._getColor();
        this.ctx.beginPath();
        this.ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.restore();

        return {
            x: position.x,
            y: position.y,
            r: radius
        };
    }

    _getColor () {
        let colours = ['#34b827', '#F76C27', '#6D9DD1', '#e76395', '#cade08',
        '#22b1bd', '#7E45D3', '#E73F3F'];

        return colours[ ~~(Math.random() * 8) ];
    }

    _getPosition () {
        return {
            x: ~~(Math.random() * this.clipping_size.width),
            y: ~~(Math.random() * this.clipping_size.height)
        }
    }

}