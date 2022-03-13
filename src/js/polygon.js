class Polygon {
    constructor(points, areaColor) {
        this.points = points;
        this.areaColor = areaColor;
        this.lines = this.createLines(this.points);
    }

    createLines(points) {
        let lines = [];
        for (let i = 0; i < points.length - 1; i++) {
            lines.push(new Line(points[i], points[i + 1], this.areaColor));
        }
        lines.push(new Line(points[points.length - 1], points[0], this.areaColor))

        return lines;
    }

    getLines() {
        return this.lines;
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