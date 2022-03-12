function main() {
    let canvas = document.getElementById("canvas");

    if (!canvas.getContext) {
        alert("Canvas Unsupported");
        return;
    }

    let ctx = canvas.getContext("2d");

    // let p1 = new Point(25, 25, "rgb(25, 60, 40)");
    // p1.draw(ctx);
    // let p2 = new Point(300, 300, "rgb(80, 80, 180)");
    // p2.draw(ctx);
    //
    // let l1 = new Line(p1, p2, "rgb(150, 10, 45)");
    // l1.draw(ctx);

    let p1 = new Point(10, 10, '#000000');
    let p2 = new Point(150, 150, '#000000');
    let p3 = new Point(90, 20, '#000000');

    let polygon = new Polygon([p1, p2, p3], "#f0f000");
    // polygon.draw(ctx);

    p1 = new Point(10, 10, '#000000');
    p2 = new Point(150, 150, '#000000');
    p3 = new Point(90, 20, '#000000');
    let p4 = new Point(125, 33, '#000000');
    let p5 = new Point(190, 47, '#000000');
    let p6 = new Point(200, 250, '#000000');

    polygon = new Polygon([p1, p2, p3, p4, p5, p6], "#f0f000");
    polygon.draw(ctx);


    // ctx.fillStyle = "rgb(75, 25, 35)";
    // ctx.beginPath();
    // ctx.arc(50, 50, 25, 0, 2 * Math.PI);
    // ctx.fill();
    //
    //
    // ctx.fillStyle = "rgb(45, 25, 32)";
    // ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.lineTo(25, 50);
    // ctx.stroke();
}