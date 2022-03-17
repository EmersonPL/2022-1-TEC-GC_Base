function createLine(startPoint,
                    endPoint,
                    lineColor = "#ffffff",
                    lineSpeed = [0, 0],
                    movePoints = false,
                    keepPointColor = false
) {

    // startPoint = createPoint(...startPoint);
    // endPoint = createPoint(...endPoint);

    setupInnerPoint(startPoint, lineColor, lineSpeed, movePoints, keepPointColor);
    setupInnerPoint(endPoint, lineColor, lineSpeed, movePoints, keepPointColor);

    return new Line(startPoint, endPoint, lineColor);
}