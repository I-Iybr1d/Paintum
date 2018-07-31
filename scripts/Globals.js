import Vector2 from './Vector2';

export var canvas = document.getElementById('canvas');
export var canvasContext = canvas.getContext('2d');
export var Color = Object.freeze({
    Black: "#000000",
    White:"#FFFFFF",
    Red: "#FF0000",
    Green: "#00FF00",
    Blue: "#0000FF",
    Yellow: "#FFFF00",
    Magenta: "#FF00FF",
    Cyan: "#00FFFF"
});
export var ColliderType = {
    Undefined: 0,
    Squared: 1,
    Circular: 2
}
export var Input = {
    mousePosition: new Vector2()
}
export var canvasMargin = 4;
export var DebugController;
export var _mousePosition = new Vector2();