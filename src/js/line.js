class Line {
    constructor(startPoint, endPoint, color) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.color = color;
    }

    getPoints() {
        return [this.startPoint, this.endPoint];
    }

    setPoints(startPoint, endPoint) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
    }

    setColor(color) {
        this.color = color;
    }

    draw(canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.strokeStyle = this.color;

        canvasCtx.moveTo(...this.startPoint.getPosition());
        canvasCtx.lineTo(...this.endPoint.getPosition());
        canvasCtx.stroke();
    }

    move() {
        this.startPoint.move();
        this.endPoint.move();
    }
}