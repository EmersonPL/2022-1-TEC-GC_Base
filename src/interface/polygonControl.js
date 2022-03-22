function createPolygon(pointsArr,
                       areaColor = "#ffffff",
                       areaSpeed = [0, 0],
                       movePoints = false,
                       keepPointsColor = false) {

    let polygonPoints = [];
    pointsArr.forEach(point => {
        // let p = createPoint(...point);

        setupInnerPoint(point, areaColor, areaSpeed, movePoints, keepPointsColor);

        polygonPoints.push(point);
    });

    return new Polygon(polygonPoints, areaColor, areaSpeed);
}