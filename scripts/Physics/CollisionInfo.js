import Vector2 from "../Vector2";

export default class CollisionInfo{
    constructor(isColliding = false, colisionPoint = new Vector2(), distanceToCenters = new Vector2()) {
        this.isColliding = isColliding;
        this.colisionPoint = colisionPoint;
        this.distanceToCenters = distanceToCenters;
    }

    Reset() {
        this.isColliding = false;
        this.colisionPoint = new Vector2();
        this.distanceToCenters = new Vector2();
    }
}