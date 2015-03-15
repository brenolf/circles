export default class Text {

    constructor (context, x = 0, y = 0) {
        this.context = context;
        this.x = x;
        this.y = y;
    }

    draw (text, size = 30, font = 'sans-serif') {
        this.context.font = `${size}px ${font}`;
        this.context.fillText(text, this.x, this.y);
    }

}