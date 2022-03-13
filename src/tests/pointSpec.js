describe('Testing Point creation', () => {
    it('Should have the correct Positions', () => {
            let p1 = new Point(10, 10, '#000000');

            expect(p1.getPosition()).toEqual([10, 10]);
        }
    )
})