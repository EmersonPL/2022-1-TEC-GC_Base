function setupMouseEvents(canvas) {
    canvas.addEventListener('click', (event) => {
        checkDrawAction(event)
    });
}

function checkDrawAction(evt) {
    // console.log(evt);
    // if (!evt) console.log("Nothing");
    if (evt.shiftKey) {
        polygonPoints = [];
        createCanvasLine(evt);
        return;
    }
    if (evt.ctrlKey) {
        lastLinePointPosition = null;
        createCanvasPolygon(evt);
        return;
    }
    if (evt.altKey) console.log("Alt");

    polygonPoints = [];
    lastLinePointPosition = null;
    createCanvasPoint(evt);
}


function createCanvasPoint(evt) {
    points.push(createPoint(...getMousePosition(evt),
        getElementColor(),
        getElementSpeed()));
}

let lastLinePointPosition = null;

function createCanvasLine(evt) {
    if (lastLinePointPosition === null) {
        lastLinePointPosition = getMousePosition(evt);
        return;
    }

    let firstPoint = createPoint(...lastLinePointPosition,
        getElementColor());

    let secondPoint = createPoint(...getMousePosition(evt),
        getElementColor());

    lines.push(createLine(firstPoint,
        secondPoint,
        getElementColor(),
        getElementSpeed()));

    lastLinePointPosition = null;
}

let polygonPoints = [];

function createCanvasPolygon(evt) {
    let point = createPoint(...getMousePosition(evt),
        getElementColor());

    if (polygonPoints.length < 2) {
        polygonPoints.push(point);
        return;
    }

    if (polygonPoints.length === 2) {
        polygonPoints.push(point);
        let polygon = createPolygon(polygonPoints,
            getElementColor(),
            getElementSpeed());

        polygons.push(polygon);
        return;
    }

    let polygon = polygons[polygons.length - 1];
    polygon.addPoint(point);
}


function getMousePosition(evt) {
    return [evt.clientX, evt.clientY];
}


function getElementColor() {
    return getColorPickerValue("objColor");
}

function getBgColor() {
    return getColorPickerValue("bgColor");
}

function getColorPickerValue(colorPickerId) {
    let colorPicker = document.getElementById(colorPickerId);
    return colorPicker.value;
}

function getElementSpeed() {
    let x = document.getElementById("speedX");
    let y = document.getElementById("speedY");

    return [parseInt(x.value), parseInt(y.value)];
}