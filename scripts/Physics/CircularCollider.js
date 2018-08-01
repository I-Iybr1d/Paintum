import { ColliderType } from './Globals';

export default class CircularCollider extends Collider{
    constructor(id, radius = 0, position = Vector2.Zero, offset = Vector2.Zero, parent) {
        super(id, position, offset, parent);
        this.type = ColliderType.CircularCollider;
        this.radius = radius;
        // this.width = width;
        // this.height = height;
    }
}

import { ColliderType } from './Globals';

export default class RectangleCollider extends Collider{
    constructor(id, width = 0, height = 0, position = Vector2.Zero, offset = Vector2.Zero, parent) {
        super(id, position, offset, parent);
        this.type = ColliderType.RectangleCollider;
        this.width = width;
        this.height = height;
    }
}