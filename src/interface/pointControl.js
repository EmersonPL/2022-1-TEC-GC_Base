function createPoint(x,
                     y,
                     color = "#000000",
                     speed = [0, 0]) {

    return new Point(x,
        y,
        color,
        speed);
}

function setupInnerPoint(point, outerColor, outerSpeed, moveTogether = false, keepPointColor = false) {
    point.setSpeed(setInnerPointSpeed(outerSpeed, point, moveTogether));
    point.setColor(setInnerPointColor(outerColor, point, keepPointColor));
}

function setInnerPointSpeed(outerSpeed, point, moveTogether) {
    if (outerSpeed[0] !== 0) {
        return [moveTogether ? outerSpeed[0] + point.getSpeed()[0] : outerSpeed[0],
            moveTogether ? outerSpeed[1] + point.getSpeed()[1] : outerSpeed[1]];
    }

    return [moveTogether ? point.getSpeed()[0] : 0,
        moveTogether ? point.getSpeed()[1] : 0];
}

function setInnerPointColor(outerColor, point, keepPointColor) {
    return outerColor != null && !keepPointColor ? outerColor : point.getColor();
}