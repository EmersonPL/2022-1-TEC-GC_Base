class Point {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;

        this.color = color;
    }

    getPosition() {
        return [this.x, this.y];
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    setColor(color) {
        this.color = color;
    }

    draw(canvasCtx) {
        canvasCtx.fillStyle = this.color;

        canvasCtx.beginPath();
        canvasCtx.arc(this.x, this.y, POINT_RADIUS, 0, Math.PI * 2);
        canvasCtx.fill();
    }
}

POINT_RADIUS = 3;