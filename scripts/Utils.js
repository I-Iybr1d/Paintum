class Utils {
    static ClampNumber(number, min, max) {
        return number > max ? max : number < min ? min : number;
    }

    static Interpolate(currentPos, destinyPos, divisor, gap) {
        var newDistance = new Vector2(destinyPos.x - currentPos.x, destinyPos.y - currentPos.y);
        var moveDistance = new Vector2(newDistance.x / divisor, newDistance.y / divisor);
        var finalPos = new Vector2(currentPos.x + moveDistance.x, currentPos.y + moveDistance.y);
        return gap < AbsoluteVector2(finalPos) ? destinyPos : finalPos;
    }

    static AbsoluteVector2(vector) {
        return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
    }

    static NormalizeVector2(vector, abs) {
        return new Vector2(vector.x / abs, vector.y / abs);
    }
}
