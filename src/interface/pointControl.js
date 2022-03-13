function createPoint(x,
                     y,
                     color = "#000000",
                     speed = [0, 0]) {

    return new Point(x, y, {
        color: color,
        speed: {'x': speed[0], 'y': speed[1]}
    });
}

function setupInnerPoint(point, outerColor, outerSpeed) {
    point.setSpeed(setInnerPointSpeed(outerSpeed, point));
    point.setColor(setInnerPointColor(outerColor, point));
}

function setInnerPointSpeed(outerSpeed, point) {
    return [
        outerSpeed[0] != null ? outerSpeed[0] : point.getSpeed()['x'],
        outerSpeed[1] != null ? outerSpeed[1] : point.getSpeed()['y'],
    ]
}

function setInnerPointColor(outerColor, point) {
    return outerColor != null ? outerColor : point.getColor();
}