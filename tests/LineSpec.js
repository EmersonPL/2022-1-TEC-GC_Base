describe('Testing Line creation', () => {
    it('Should have the correct Points', () => {
            let p1 = new Point(10, 10, '#000000');
            let p2 = new Point(25, 47, '#530000');

            let line = new Line(p1, p2, '#000000')
            expect(line.getPoints()).toEqual([p1, p2]);
        }
    )
})