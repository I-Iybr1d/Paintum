import GameObject from './GameObject';
import CollisionInfo from './ColisionInfo';

export default class Collider extends GameObject{
    constructor(id, position = Vector2.Zero, offset = Vector2.Zero, parent) {
        super(id, parent, position, offset);
        this.quadrant;
        this.collisionInfo = new CollisionInfo();
    }

    Update() {
        super.Update();
        this.UpdatePositionWithParent();
    }

    LateUpdate() {
        super.LateUpdate();
        this.CheckCollision();
    }

    CheckCollision() {
        // Returns boolean
        // Needs Quadrant Implementation
        // To be implemented
    }
}