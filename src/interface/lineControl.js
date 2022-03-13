function createLine(startPoint,
                    endPoint,
                    {
                        lineColor = null,
                        lineSpeed = [null, null]
                    }
) {

    startPoint = createPoint(...startPoint);
    endPoint = createPoint(...endPoint);

    setupInnerPoint(startPoint, lineColor, lineSpeed);
    setupInnerPoint(endPoint, lineColor, lineSpeed);

    return new Line(startPoint, endPoint, lineColor);
}