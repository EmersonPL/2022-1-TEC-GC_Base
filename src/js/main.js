function main() {
    let canvas = document.getElementById("canvas");

    // let canvas = createCanvas(window.innerWidth, window.innerHeight)

    if (!canvas.getContext) {
        alert("Canvas Unsupported");
        return;
    }

    let ctx = canvas.getContext("2d", {alpha: false});

    setup(canvas);

    setInterval(render, 100, canvas, ctx);
}


function render(canvas, ctx) {
    setupWindowSize(canvas);
    updateSelectedItemInterface();
    ctx.fillStyle = getBgColor();
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    moveItems([...points, ...lines, ...polygons]);

    drawItems([...points, ...lines, ...polygons], ctx);
}


function setup(canvas) {
    setupWindowSize(canvas);
    setupMouseEvents(canvas);
    // setupColorEvents();
    setupObjectInfoDivEvents();
}

function setupWindowSize(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
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