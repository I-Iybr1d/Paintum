class Ball extends Circle {
    constructor(id, parent, position, offset, startAngle, endAngle, radius, color) {
        super(id, parent, position, offset, startAngle, endAngle, radius, color);
        this.velocity = 5; // To be implemented with physics
        this.isCollidable = true;
        // this.collider = new Collider(
        //     this.id + "_collider",
        //     ColliderType.Circle,
        //     startAngle,
        //     endAngle,
        //     position,
        //     offset,
        //     this.id
        // );
        // Collider needs to be made a inheritable class for:
        // -> CircularCollider
        // -> SquaredCollider
        // Check needed for ColliderType reason to exist
    }

    Start() {
        super.Start();
    }

    Update() {
        // Parent Updates
        super.Update();
        this.position(Utils.ClampNumber(Input.mousePosition.x, this.width / 2 + canvasMargin, canvas.width - (this.width / 2) - canvasMargin));
        // Child Updates
        // this.collider.Update();
    }

    LateUpdate() {
        super.LateUpdate();
        if(this.isCollidable) {
            // this.collider.LateUpdate();
        }
    }

    Draw() {
        super.Draw();
    }
}