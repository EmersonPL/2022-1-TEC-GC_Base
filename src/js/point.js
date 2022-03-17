class Point {
    constructor(x,
                y,
                color = "#000000",
                speed = [0, 0]) {

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
        this.speed = speed;
    }

    draw(canvasCtx) {
        canvasCtx.fillStyle = this.color;

        canvasCtx.beginPath();
        canvasCtx.arc(this.x, this.y, POINT_RADIUS, 0, Math.PI * 2);
        canvasCtx.fill();
    }

    move() {
        this.x += this.speed[0];
        this.y += this.speed[1];
    }
}

POINT_RADIUS = 3;