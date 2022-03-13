function createLine(startPoint, endPoint, {
    lineColor = null,
    lineSpeed = [null, null]
}) {

    startPoint = createPoint(...startPoint);
    endPoint = createPoint(...endPoint);

    defineLinePoint(startPoint, lineColor, lineSpeed);
    defineLinePoint(endPoint, lineColor, lineSpeed);

    return new Line(startPoint, endPoint, lineColor);
}

function defineLinePoint(point, lineColor, lineSpeed) {
    point.setSpeed(definePointSpeed(lineSpeed, point));
    point.setColor(definePointColor(lineColor, point));
}

function definePointSpeed(lineMovement, point) {
    let pointSpeed = [
        lineMovement[0] != null ? lineMovement[0] : point.getSpeed()['x'],
        lineMovement[1] != null ? lineMovement[1] : point.getSpeed()['y'],
    ]

    return pointSpeed;
}

function definePointColor(lineColor, point) {
    return lineColor != null ? lineColor : point.getColor();
}