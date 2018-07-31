import GameObject from './GameObject';
import { canvasContext, canvas, canvasMargin } from './Globals';
import Vector2 from './Vector2';
import Collider from './Collider';

export default class Circle extends GameObject {
    constructor(id, parent, position, offset, startAngle, endAngle, radius, color) {
        super(id, parent, position, offset);
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.radius =  radius;
        this.color = color;
        this.collider = new Collider(
            this.id + "_collider",
            ColliderType.Circle,
            radius,
            position,
            offset,
            this.id
        );
        this.velX = 5;
        this.velY = 5;
    }

    Update() {
        super.Update();
        
        if (this.position.x + this.radius + canvasMargin >= canvas.width) {
            this.position = new Vector2(canvas.width - 10, this.position.y);
            this.velX *= -1;
        }
        else if (this.position.x - canvasMargin <= 0) {
            this.position = new Vector2(10, this.position.y);
            this.velX *= -1;
        }


        if (this.position.y + this.radius + canvasMargin >= canvas.height) {
            this.position = new Vector2(this.position.x, canvas.height - 10);
            this.velY *= -1;
        }
        else if(this.position.y - canvasMargin <= 0) {
            this.position = new Vector2(this.position.x, 10);
            this.velY *= -1;
        }

        this.position = new Vector2(this.position.x + this.velX, this.position.y + this.velY);

        console.log('velX', this.velX);
        console.log('PosX', this.position.x);
        console.log('velY', this.velY);
        console.log('PosY', this.position.y);
        // Child Updates
        this.collider.Update();
        var colisionHappened = this.collider.CheckCollision();
        if(colisionHappened) {
            // effect
        }
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