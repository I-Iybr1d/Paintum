var ColliderType = {
    Undefined: 0,
    Squared: 1,
    Circular: 2
}

class Collider extends GameObject{
    constructor(id, type = ColliderType.Squared, width = 0, height = 0, position = Vector2.Zero, offset = Vector2.Zero, parent) {
        super(id, parent, position, offset);
        this.type = type;
        this.width = width;
        this.height = height;
        this.parent = parent;
        this.quadrant;
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
        // To be implemented
    }
}