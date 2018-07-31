export default class Vector2 {
    constructor(x, y) {
        if(x === undefined || x === null) {
            this.x = 0;
            this.y = 0;
        }
        else if(y === undefined || y === null) {
            if(x instanceof Vector2) {
                this.x = x.x;
                this.Y = x.y;
            }
        }
        else {
            this.x = x;
            this.y = y;
        }
    }

    Add(vector) {
        if(vector instanceof Vector2) {
            return new Vector2(this.x + vector.x, this.y + vector.y);
        }
        return new Vector2(this.x + vector, this.y + vector);
    }

    Minus(vector) {
        if(vector instanceof Vector2) {
            return new Vector2(this.x - vector.x, this.y - vector.y);
        }
        return new Vector2(this.x - vector, this.y - vector);
    }

    Multiply(vector) {
        if(vector instanceof Vector2) {
            return new Vector2(this.x * vector.x, this.y * vector.y);
        }
        return new Vector2(this.x * vector, this.y * vector);
    }

    Divide(vector) {
        if(vector instanceof Vector2) {
            return new Vector2(this.x / vector.x, this.y / vector.y);
        }
        return new Vector2(this.x / vector, this.y / vector);
    }

    Equals(vector) {
        return this.x === vector.x && this.y === vector.y;
    }

    Dot(vector) {
        return this.x * vector.x + this.y * vector.y;
    }

    Length() {
        return Math.sqrt();
    }

    Absolute() {
        return new Vector2(
            this.x < 0 ? -this.x : this.x,
            this.y < 0 ? -this.y : this.y
        );
    }

    Normalize() {
        var vector = this.Absolute();
        return new Vector2(this.x / vector.x, this.y / vector.y);
    }

    SetX() {
        
    }
}

Vector2.Zero = new Vector2(0, 0);
Vector2.One = new Vector2(1, 1);
Vector2.Up = new Vector2(0, 1);
Vector2.Down = new Vector2(0, -1);
Vector2.Left = new Vector2(-1, 0);
Vector2.Right = new Vector2(1, 0);

