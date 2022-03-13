function createPolygon(pointsArr, areaColor = "#000000") {
    let points = [];
    pointsArr.forEach(point => {
        let p = new Point(point[0],
            point[1],
            point.length >= 3 ? point[2] : areaColor);

        points.push(p);
    });

    return new Polygon(points, areaColor);
    // let polygon = new Polygon(points, areaColor);
    // polygons.push(polygon);
}