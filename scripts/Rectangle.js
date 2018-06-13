class Rectangle extends GameObject {
    constructor(id, parent, position, offset, width, height, color) {
        super(id, parent, position, offset);
        this.width = width;
        this.height = height;
        this.color = color;
        this.parent = parent;
    }

    Draw() {
        canvasContext.beginPath();
        canvasContext.rect(this.position.x, this.position.y, this.width, this.height);
        canvasContext.fillStyle = this.color;
        canvasContext.fill();
        canvasContext.closePath();
    }
}