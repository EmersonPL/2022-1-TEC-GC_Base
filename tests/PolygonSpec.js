describe('Testing Polygon creation', () => {
    it('Should have the correct Lines', () => {
            let p1 = new Point(10, 10, '#000000');
            let p2 = new Point(20, 25, '#000000');
            let p3 = new Point(15, 35, '#000000');

            let l1 = new Line(p1, p2, '#000000');
            let l2 = new Line(p2, p3, '#000000');
            let l3 = new Line(p3, p1, '#000000');

            let points = [p1, p2, p3];

            let polygon = new Polygon(points, '#000000');
            expect(polygon.getLines()).toEqual([l1, l2, l3]);
        }
    )
})