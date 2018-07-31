import Rectangle from './Rectangle';
import Collider from './Collider';
import Utils from './Utils';
import { ColliderType, Input, canvasMargin, canvas } from './Globals';

export default class Paddle extends Rectangle {
    constructor(id, parent, position, offset, width, height, color) {
        super(id, parent, position, offset, width, height, color);
        this.velocity = 0; // To be implemented with physics
        this.isCollidable = true;
        this.collider = new Collider(
            this.id + "_collider",
            ColliderType.Squared,
            width,
            height,
            position,
            offset,
            this.id
        );
    }

    Start() {
        super.Start();
    }

    Update() {
        // Parent Updates
        super.Update();
        this.SetX(Utils.ClampNumber(Input.mousePosition.x, this.width / 2 + canvasMargin, canvas.width - (this.width / 2) - canvasMargin));
        // Child Updates
        this.collider.Update();
    }

    LateUpdate() {
        super.LateUpdate();
        if(this.isCollidable) {
            this.collider.LateUpdate();
        }
    }

    Draw() {
        super.Draw();
    }
}