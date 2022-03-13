class Point {
    constructor(x, y, {
        movement: speed = {'x': 0, 'y': 0},
        color = "#000000"
    }) {

        this.x = x;
        this.y = y;

        this.color = color;

        this.speed = speed;
    }

    getPosition() {
        return [this.x, this.y];
    }

    getColor() {
        return this.color;
    }

    getSpeed() {
        return this.speed;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    setColor(color) {
        this.color = color;
    }

    setSpeed(speed) {
        this.speed['x'] = speed[0];
        this.speed['y'] = speed[1];
    }

    draw(canvasCtx) {
        canvasCtx.fillStyle = this.color;

        canvasCtx.beginPath();
        canvasCtx.arc(this.x, this.y, POINT_RADIUS, 0, Math.PI * 2);
        canvasCtx.fill();
    }

    move() {
        this.x += this.speed['x'];
        this.y += this.speed['y'];
    }
}

POINT_RADIUS = 3;