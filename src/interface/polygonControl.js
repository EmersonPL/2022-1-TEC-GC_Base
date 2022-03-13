function createPolygon(pointsArr, areaColor = null, areaSpeed = [null, null]) {
    let polygonPoints = [];
    pointsArr.forEach(point => {
        // let p = new Point(point[0],
        //     point[1],
        //     point.length >= 3 ? point[2] : areaColor);

        let p = createPoint(...point);

        setupInnerPoint(p, areaColor, areaSpeed);

        polygonPoints.push(p);
    });

    return new Polygon(polygonPoints, areaColor);
}