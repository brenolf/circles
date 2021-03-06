export default class Circle {

    constructor (context, x = 0, y = 0, r = 50) {
        this.ctx = context;

        this.setPosition = [x, y];
        this.radius = r;
        this.bg = this.colour
    }

    draw () {
        this.ctx.save();
        this.ctx.fillStyle = this.bg;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.restore();
    }

    inside (x, y) {
        let square_dist = (this.x - x) * (this.x - x) + 
                          (this.y - y) * (this.y - y);

        return square_dist <= this.radius * this.radius;
    }

    get colour () {
        const colours = ['#34b827', '#F76C27', '#e76395', '#cade08',
        '#22b1bd', '#7E45D3', '#E73F3F'];

        return colours[ ~~(Math.random() * 7) ];
    }

    set setPosition ([x, y]) {
        this.x = x;
        this.y = y;
    }

    get getRadius () {
        return this.radius;
    }

    set setRadius (r) {
        this.radius = r;
    }
}