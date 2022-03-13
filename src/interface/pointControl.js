function createPoint(x,
                     y,
                     color = "#000000",
                     speed = [0, 0]) {

    return new Point(x, y, {
        color: color,
        speed: {'x': speed[0], 'y': speed[1]}
    });
}

function setupInnerPoint(point, outerColor, outerSpeed, moveTogether = false, keepPointColor = false) {
    point.setSpeed(setInnerPointSpeed(outerSpeed, point, moveTogether));
    point.setColor(setInnerPointColor(outerColor, point, keepPointColor));
}

function setInnerPointSpeed(outerSpeed, point, moveTogether) {
    if (outerSpeed[0] != null) {
        return [moveTogether ? outerSpeed[0] + point.getSpeed()['x'] : outerSpeed[0],
            moveTogether ? outerSpeed[1] + point.getSpeed()['y'] : outerSpeed[1]];
    }

    return [point.getSpeed()['x'], point.getSpeed()['y']];
}

function setInnerPointColor(outerColor, point, keepPointColor) {
    return outerColor != null && !keepPointColor ? outerColor : point.getColor();
}