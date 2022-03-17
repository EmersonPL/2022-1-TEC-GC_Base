class Polygon {
    constructor(points, areaColor, areaSpeed) {
        this.points = points;
        this.areaColor = areaColor;
        this.areaSpeed = areaSpeed;
        this.lines = this.createLines(this.points);
    }

    createLines(points) {
        let lines = [];
        for (let i = 0; i < points.length - 1; i++) {
            lines.push(createLine(points[i], points[i + 1], this.areaColor, this.areaSpeed));
        }
        lines.push(createLine(points[points.length - 1], points[0], this.areaColor, this.areaSpeed));

        return lines;
    }

    addPoint(point) {
        this.points.push(point);
        this.lines = this.createLines(this.points);
    }

    getLines() {
        return this.lines;
    }

    getPoints() {
        return this.points;
    }

    getColor() {
        return this.areaColor;
    }

    draw(canvasCtx) {
        this.fill(canvasCtx);


        this.points.forEach(p => {
            p.draw(canvasCtx);
        });

        this.lines.forEach(l => {
            l.draw(canvasCtx);
        })
    }

    fill(canvasCtx) {
        canvasCtx.fillStyle = this.areaColor;

        canvasCtx.beginPath();

        this.points.forEach(p => {
            canvasCtx.lineTo(...p.getPosition());
        });

        canvasCtx.save();
        canvasCtx.clip();

        canvasCtx.fillRect(0, 0, canvasCtx.canvas.width, canvasCtx.canvas.height);
        canvasCtx.restore();
    }

    move() {
        this.points.forEach(point => {
            point.move();
        });
    }
}