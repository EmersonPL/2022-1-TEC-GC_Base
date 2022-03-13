function createPolygon(pointsArr, areaColor = null, areaSpeed = [null, null],
                       movePoints = false, keepPointsColor = false) {

    let polygonPoints = [];
    pointsArr.forEach(point => {
        let p = createPoint(...point);

        setupInnerPoint(p, areaColor, areaSpeed, movePoints, keepPointsColor);

        polygonPoints.push(p);
    });

    return new Polygon(polygonPoints, areaColor);
}