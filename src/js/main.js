function main() {
    let canvas = document.getElementById("canvas");

    // let canvas = createCanvas(window.innerWidth, window.innerHeight)

    if (!canvas.getContext) {
        alert("Canvas Unsupported");
        return;
    }

    let ctx = canvas.getContext("2d", {alpha: false});

    setup(ctx);

    setInterval(render, 100, ctx);
}


function render(ctx) {
    // ctx.fillStyle = backGroundColor;
    setupWindowSize(ctx);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    moveItems(points);
    moveItems(lines);
    moveItems(polygons);

    drawItems(points, ctx);
    drawItems(lines, ctx);
    drawItems(polygons, ctx);

    // Test
    ctx.strokeStyle = "#f000ff"
    ctx.moveTo(10, 10);
    ctx.lineTo(100, 100);
    ctx.stroke();
}


function setup(ctx) {
    setupWindowSize(ctx);
}

function setupWindowSize(ctx) {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}


function moveItems(arr) {
    arr.forEach(item => {
        item.move();
    })
}


function drawItems(arr, ctx) {
    arr.forEach(item => {
        item.draw(ctx);
    })
}

let points = [];
let lines = [];
let polygons = [];