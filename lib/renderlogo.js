const { Triangle, Circle, Square } = require('./shapes')

function renderLogo(shape,text,textColor,shapeColor) {
    switch (shape) {
        case 'Square':
            logo = new Square()
            break
        case 'Circle':
            logo = new Circle()
            break
        case 'Triangle':
            logo = new Triangle()
            break
        default:
            throw new Error(`Something went wrong, couldn't find user provided shape.`)
    }
    logo.setText(text)
    logo.setTextColor(textColor)
    logo.setShapeColor(shapeColor)
    return `
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg width="250" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${logo.renderSelf()}
    </svg>
    `
}

module.exports = renderLogo