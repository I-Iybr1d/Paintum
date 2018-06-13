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

    // Implement Rotation
    /**
     * Updates its position with the parent position 
     * if the parent exists, is valid and is a GameObject
     */
    UpdatePositionWithParent() {
        var parentPos = GameController.GameObjects.GetGameObjectById(this.parent).position;
        if( parentPos !== null && parentPos !== undefined && parentPos instanceof GameObject) {
            this.position = parentPos;
        }
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