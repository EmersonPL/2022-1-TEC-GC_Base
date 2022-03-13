function createPoint(x,
                     y,
                     color = "#000000",
                     movement = [0, 0]) {

    return new Point(x, y, {
        color: color,
        movement: {'x': movement[0], 'y': movement[1]}
    });
}