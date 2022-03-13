function createLine(startPoint,
                    endPoint,
                    {
                        lineColor = null,
                        lineSpeed = [null, null]
                    },
                    movePoints = false,
                    keepPointColor = false
) {

    startPoint = createPoint(...startPoint);
    endPoint = createPoint(...endPoint);

    setupInnerPoint(startPoint, lineColor, lineSpeed, movePoints, keepPointColor);
    setupInnerPoint(endPoint, lineColor, lineSpeed, movePoints, keepPointColor);

    return new Line(startPoint, endPoint, lineColor);
}