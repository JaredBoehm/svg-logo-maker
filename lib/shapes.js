class Shape {
    constructor(text,textColor,shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    setText(txt) {
        this.text = txt
    }
    setTextColor(color) {
        this.textColor = color
    }
    setShapeColor(color) {
        this.shapeColor = color 
    }
}

class Square extends Shape {
    constructor(text,textColor,shapeColor) {
        super(text,textColor,shapeColor)
    }
    renderShape() {
        return `
        <rect x="50" y="50" width="150" height="150" fill="${this.shapeColor}"/>
        <text x="110" y="130" font-size="16px" fill="${this.textColor}">${this.text}</text>
        `
    }
}

class Circle extends Shape {
    constructor(text,textColor,shapeColor) {
        super(text,textColor,shapeColor)
    }
    renderShape() {
        return `
        <circle cx="125" cy="125" r="75" fill="${this.shapeColor}"/>
        <text x="110" y="130" font-size="16px" fill="${this.textColor}">${this.text}</text>
        `
    }
}

class Triangle extends Shape {
    constructor(text,textColor,shapeColor) {
        super(text,textColor,shapeColor)
    }
    renderShape() {
        return `
        <path d="M 127.16651,84.016145 200,149.8037 H 50.000001 Z" fill="${this.shapeColor}"/>
        <text x="110" y="130" font-size="16px" fill="${this.textColor}">${this.text}</text>
        `
    }
}

module.exports = {
    Square: Square,
    Circle: Circle,
    Triangle: Triangle,
}