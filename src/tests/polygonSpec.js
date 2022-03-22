describe('Testing Polygon creation by classes constructor', () => {
    let p1 = new Point(10, 10, '#000000', [0, 0]);
    let p2 = new Point(20, 25, '#000000', [0, 0]);
    let p3 = new Point(15, 35, '#000000', [0, 0]);


    let points = [p1, p2, p3];
    let polygon = new Polygon(points, '#000000', [0, 0]);

    it('Should have the correct Lines', () => {
            let l1 = new Line(p1, p2, '#000000');
            let l2 = new Line(p2, p3, '#000000');
            let l3 = new Line(p3, p1, '#000000');

            expect(polygon.getLines()).toEqual([l1, l2, l3]);
        }
    )
    it("Should have the correct color", () => {
        expect(polygon.getColor()).toBe("#000000");
    })
})

describe("Testing Polygon creation by helper function", () => {
    let startingPos = [[10, 10],
        [25, 25],
        [50, 75]];

    let speeds = [[0, 0],
        [1, 1],
        [-1, -1]];

    let points = [createPoint(10, 10, "#ffffff", [0, 0]),
        createPoint(25, 25, "#00ff00", [1, 1]),
        createPoint(50, 75, "#0000ff", [-1, -1])];

    it("Should have the correct Points Starting Positions", () => {
        let pol = createPolygon(points);

        let polPoints = pol.getPoints();

        for (let i = 0; i < polPoints.length; i++) {
            expect(polPoints[i].getPosition()).toEqual([startingPos[i][0], startingPos[i][1]]);
        }
    });

    it("Should have the correct Points positions after moving", () => {
        let pol = createPolygon(points, "#ffffff", [0, 0], true, false);

        let polPoints = pol.getPoints();

        console.log(pol);

        for (let i = 0; i < polPoints.length; i++) {
            polPoints[i].move();
            let expectedPosition = [startingPos[i][0] + speeds[i][0],
                startingPos[i][1] + speeds[i][1]];

            expect(polPoints[i].getPosition()).toEqual(expectedPosition);
        }
    });
})

// it("Should have the correct color", () => {
//     expect(polygon.getColor()).toBe("#000000");