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


function getObjectOnPosition(evt) {
    let pos = getMousePosition(evt);

    let linesPoints = lines.map(line => line.getPoints()).flat();
    let polygonsPoints = polygons.map(polygon => polygon.getPoints()).flat();

    let a = findObjectInPosition([...points,
            ...linesPoints,
            ...polygonsPoints],
        pos);

    return a;
}

function findObjectInPosition(arr, pos) {
    for (let i = 0; i < arr.length; i++) {
        if (isItemInPos(arr[i], pos)) {
            return arr[i];
        }
    }

    return null;
}

function isItemInPos(item, pos) {
    let [itemX, itemY] = item.getPosition();
    let [mouseX, mouseY] = pos;

    if (itemX + POINT_RADIUS >= mouseX
        && itemX - POINT_RADIUS <= mouseX
        && itemY + POINT_RADIUS >= mouseY
        && itemY - POINT_RADIUS <= mouseY) {

        return true;
    }

    return false;
}