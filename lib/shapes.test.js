const { Triangle, Circle, Square } = require('./shapes')

describe('Shapes.js', () => {

    // checks setting the color of the shapes
    describe('Shape Colors', () => {

        it('should set the triangle color to black', () => {
            const triangle = new Triangle();
            triangle.setShapeColor('#000')
            expect(triangle.renderShape()).toEqual(`<path d="M 127.16651,84.016145 200,149.8037 H 50.000001 Z" fill="#000"/>`);
        });
  
        it('should set the circle color to blue', () => {
            const circle = new Circle();
            circle.setShapeColor('#0000FF')
            expect(circle.renderShape()).toEqual(`<circle cx="125" cy="125" r="75" fill="#0000FF"/>`);
        });
  
        it('should set the square color to green', () => {
            const square = new Square();
            square.setShapeColor('green')
            expect(square.renderShape()).toEqual(`<rect x="50" y="50" width="150" height="150" fill="green"/>`);
        });

    });

    // checks setting the text
    describe('Text', () => {

        it('should set the text to 123', () => {
            const triangle = new Triangle();
            triangle.setTextColor('#fff')
            triangle.setText('123')
            expect(triangle.renderText()).toEqual(`<text x="110" y="130" font-size="16px" fill="#fff">123</text>`);
        });

        it('should set the text to abc', () => {
            const circle = new Circle();
            circle.setTextColor('#fff')
            circle.setText('abc')
            expect(circle.renderText()).toEqual(`<text x="110" y="130" font-size="16px" fill="#fff">abc</text>`);
        });

        it('should set the text to a1', () => {
            const square = new Square();
            square.setTextColor('#fff')
            square.setText('a1')
            expect(square.renderText()).toEqual(`<text x="110" y="130" font-size="16px" fill="#fff">a1</text>`);
        });

    });

    // checks setting the color of the text
    describe('Text Color', () => {

        it('should set the text color to white', () => {
            const triangle = new Triangle();
            triangle.setText('abc')
            triangle.setTextColor('#fff')
            expect(triangle.renderText()).toEqual(`<text x="110" y="130" font-size="16px" fill="#fff">abc</text>`);
        });

        it('should set the text color to blue', () => {
            const circle = new Circle();
            circle.setText('abc')
            circle.setTextColor('blue')
            expect(circle.renderText()).toEqual(`<text x="110" y="130" font-size="16px" fill="blue">abc</text>`);
        });

        it('should set the text color to black', () => {
            const square = new Square();
            square.setText('abc')
            square.setTextColor('#000')
            expect(square.renderText()).toEqual(`<text x="110" y="130" font-size="16px" fill="#000">abc</text>`);
        });

    });

});