class World {
    ctx;
    canvas;
    img;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
        this.loadImage('img/background-light/water/l.png');
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.img, 100, 100, 200, 200);
    }
}