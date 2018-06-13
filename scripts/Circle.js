class Circle extends GameObject {
    constructor(id, parent, position, offset, startAngle, endAngle, radius, color) {
        super(id, parent, position, offset);
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.radius =  radius;
        this.color = color;
    }

    Draw() {
        canvasContext.beginPath();
        canvasContext.arc(this.position.x, this.position.y, this.radius, this.startAngle, this.endAngle);
        canvasContext.fillStyle = this.color;
        canvasContext.fill();
        canvasContext.closePath();
    }

    ForceDraw() {
        canvasContext.beginPath();
        canvasContext.arc(this.position.x, this.position.y, this.radius, this.startAngle, this.endAngle);
        canvasContext.fillStyle = this.color;
        canvasContext.fill();
        canvasContext.closePath();
    }
}