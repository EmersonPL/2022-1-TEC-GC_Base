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