function setupMouseEvents(canvas) {
    canvas.addEventListener('click', (e) => {
        checkDrawAction(e)
    });
}

function checkDrawAction(evt) {
    let clickedObject = getObjectOnPosition(evt);

    if (clickedObject !== null) {
        openObjectInfo(clickedObject);
        return;
    }

    selectedItem = null;
    hideObjectInfo();

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


function openObjectInfo(item) {
    changeObjectInfoValues(item);
    showObjectInfo();
}