'use strict';

class Vector2$1 {
    constructor(x, y) {
        if(x === undefined || x === null) {
            this.x = 0;
            this.y = 0;
        }
        else if(y === undefined || y === null) {
            if(x instanceof Vector2$1) {
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
        if(vector instanceof Vector2$1) {
            return new Vector2$1(this.x + vector.x, this.y + vector.y);
        }
        return new Vector2$1(this.x + vector, this.y + vector);
    }

    Minus(vector) {
        if(vector instanceof Vector2$1) {
            return new Vector2$1(this.x - vector.x, this.y - vector.y);
        }
        return new Vector2$1(this.x - vector, this.y - vector);
    }

    Multiply(vector) {
        if(vector instanceof Vector2$1) {
            return new Vector2$1(this.x * vector.x, this.y * vector.y);
        }
        return new Vector2$1(this.x * vector, this.y * vector);
    }

    Divide(vector) {
        if(vector instanceof Vector2$1) {
            return new Vector2$1(this.x / vector.x, this.y / vector.y);
        }
        return new Vector2$1(this.x / vector, this.y / vector);
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
        return new Vector2$1(
            this.x < 0 ? -this.x : this.x,
            this.y < 0 ? -this.y : this.y
        );
    }

    Normalize() {
        var vector = this.Absolute();
        return new Vector2$1(this.x / vector.x, this.y / vector.y);
    }

    SetX() {
        
    }
}

Vector2$1.Zero = new Vector2$1(0, 0);
Vector2$1.One = new Vector2$1(1, 1);
Vector2$1.Up = new Vector2$1(0, 1);
Vector2$1.Down = new Vector2$1(0, -1);
Vector2$1.Left = new Vector2$1(-1, 0);
Vector2$1.Right = new Vector2$1(1, 0);

var canvas$1 = document.getElementById('canvas');
var canvasContext = canvas$1.getContext('2d');
var Color = Object.freeze({
    Black: "#000000",
    White:"#FFFFFF",
    Red: "#FF0000",
    Green: "#00FF00",
    Blue: "#0000FF",
    Yellow: "#FFFF00",
    Magenta: "#FF00FF",
    Cyan: "#00FFFF"
});
var ColliderType = {
    Undefined: 0,
    Squared: 1,
    Circular: 2
};
var Input = {
    mousePosition: new Vector2$1()
};
var canvasMargin = 4;
var _mousePosition = new Vector2$1();

class InputControl {
    constructor(id) {
        // singleton?
        this.id = id;
        this.isActive = true;
        this.isReady = true;
        this.isInitialized = true;

        this.keys = {};
        this.keysDown = {};
        this.keysUp = {};
        this.mousePosition = new Vector2$1(0, 0);

        // this.lastMousePosition;
        // this.currentMousePosition;

        // this.lastFrameMouseClick;
        // this.currentFrameMouseClick;

        // this.lastFrameKeyboardPress;
        // this.currentFrameKeyboardPress;
    }

    Initialize() {
        // canvas.addEventListener("keydown", this.GetKeyboardPressDown, true);
        // canvas.addEventListener("keyup", this.GetKeyboardPressUp, true);

        // canvas.addEventListener("mousedown", this.GetMouseClickDown, true);
        // canvas.addEventListener("mouseup", this.GetMouseClickUp, true);
        canvas.addEventListener("mousemove", this.CheckMousePosition, true);
    }

    Start() {
        
    }

    LateUpdate() {
        this.keysDown = {};
        this.keysUp = {};
    }

    //#region Keyboard Inputs
    GetKeyboardPressDown(event) {
		if (!this.keys[event.keyCode]) {
			this.keysDown[event.keyCode] = true;
		}
		this.keys[event.keyCode] = true;
    }

    GetKeyboardPressUp(event) {
        this.keys[event.keyCode] = false;
		this.keysUp[event.keyCode] = true;
    }
    //#endregion Keyboard Inputs

    //#region Mouse Inputs
    GetMouseClickDown(event) {
        var mouseButton;
        switch(event.button) {
            case 0: mouseButton = "leftMouse"; break;
            case 1: mouseButton = "middleMouse"; break;
            case 2: mouseButton = "rightMouse"; break;
            default: mouseButton = "NotFound"; break;
        }
		if (!this.keys[mouseButton]) {
			this.keysDown[mouseButton] = true;
		}
		this.keys[mouseButton] = true;
    }

    GetMouseClickUp(event) {
        var mouseButton;
        switch(event.button) {
            case 0: mouseButton = "leftMouse"; break;
            case 1: mouseButton = "middleMouse"; break;
            case 2: mouseButton = "rightMouse"; break;
            default: mouseButton = "NotFound"; break;
        }
        this.keys[mouseButton] = false;
		this.keysUp[mouseButton] = true;
    }

    CheckMousePosition(event) {
		var bounding = canvas.getBoundingClientRect();
		var scaleY = -(bounding.top - bounding.bottom) / canvas.height;
        var scaleX = -(bounding.left - bounding.right) / canvas.width;
        Input.mousePosition = new Vector2$1(
            (event.clientX - bounding.left) / scaleX,
            (event.clientY - bounding.top) / scaleY
        );
    }
    //#endregion Mouse Inputs



}

class GameObject {
    constructor(id = "No Id", parent = null, position = new Vector2$1(0, 0), offset = new Vector2$1(0, 0)) {
        this.id = id;
        this.position = position;
        this.offset = offset;
        this.isActive = true;
        this.isReady = true;
        this.isInitialized = false;
        this.isStarted = false;
        this.isUpdated = false;
        this.isDrawn = false;
        this.parent = parent;
        // Define update parent position with itself in this class
    }

    // Set the hook functions to be exposed as public
    // but make them call a private function where the validations
    // are made as weel the object logic

    Initialize() {
        /**
         * Add initialize code here
         */
    }

    Start() {
        /**
         * Add start code here
         */
    }

    Update() {
        /**
         * Add update code here
         */
    }

    LateUpdate() {
        /**
         * Add late update code here
         */
    }

    Draw() {
        /**
         * Add draw code here
         */
    }

    ForceDraw() {
        /**
         * Add draw code here
         */
    }
    
    // SetLocalOrigin(position) {
    //     this.position = position - this.offset;
    // }

    /**
     * Sets the Offsetted X Position of the object
     * @param {number} xPos 
     */
    SetX(xPos) {
        this.position.x = xPos - this.offset.x;
    }

    /**
     * Sets the Offsetted Y Position of the object
     * @param {number} yPos 
     */
    SetY(yPos) {
        this.position.y = yPos - this.offset.y;
    }

    /**
     * Sets the Offsetted Position of the object
     * @param {Vector2} pos 
     */
    SetPosition(pos) {
        this.position = pos.Minus(this.offset);
    }

        // Implement Rotation
    /**
     * Updates its position with the parent position 
     * if the parent exists, is valid and is a GameObject
     */
    UpdatePositionWithParent() {
        var parentPos = Controller.GetGameObjectById(this.parent).position;
        if( parentPos !== null && parentPos !== undefined && parentPos instanceof GameObject) {
            this.position = parentPos;
        }
    }

}

class Rectangle extends GameObject {
    constructor(id, parent, position, offset, width, height, color) {
        super(id, parent, position, offset);
        this.width = width;
        this.height = height;
        this.color = color;
        this.parent = parent;
    }

    Draw() {
        canvasContext.beginPath();
        canvasContext.rect(this.position.x, this.position.y, this.width, this.height);
        canvasContext.fillStyle = this.color;
        canvasContext.fill();
        canvasContext.closePath();
    }
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
        // Needs Quadrant Implementation
        // To be implemented
    }
}

class Utils {
    static ClampNumber(number, min, max) {
        return number > max ? max : number < min ? min : number;
    }

    static Interpolate(currentPos, destinyPos, divisor, gap) {
        var newDistance = new Vector2$1(destinyPos.x - currentPos.x, destinyPos.y - currentPos.y);
        var moveDistance = new Vector2$1(newDistance.x / divisor, newDistance.y / divisor);
        var finalPos = new Vector2$1(currentPos.x + moveDistance.x, currentPos.y + moveDistance.y);
        return gap < AbsoluteVector2(finalPos) ? destinyPos : finalPos;
    }

    static AbsoluteVector2(vector) {
        return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
    }

    static NormalizeVector2(vector, abs) {
        return new Vector2$1(vector.x / abs, vector.y / abs);
    }
}

class Paddle extends Rectangle {
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
        this.SetX(Utils.ClampNumber(Input.mousePosition.x, this.width / 2 + canvasMargin, canvas$1.width - (this.width / 2) - canvasMargin));
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

class Circle extends GameObject {
    constructor(id, parent, position, offset, startAngle, endAngle, radius, color) {
        super(id, parent, position, offset);
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.radius =  radius;
        this.color = color;
    }

    Draw() {
        canvasContext.beginPath();
        canvasContext.arc(this.position.x, this.position.y, this.radius, this.startAngle, this.endAngle);
        canvasContext.fillStyle = this.color;
        canvasContext.fill();
        canvasContext.closePath();
    }

    ForceDraw() {
        canvasContext.beginPath();
        canvasContext.arc(this.position.x, this.position.y, this.radius, this.startAngle, this.endAngle);
        canvasContext.fillStyle = this.color;
        canvasContext.fill();
        canvasContext.closePath();
    }
}

class GameControl {
    constructor() {
        this.GameObjects = new Map();
        this.InputController = new InputControl();
    }

    Initialize() {
        this.InputController.Initialize();

        this.InitializeCanvas();
        this.InitializeBreakout();
    }

    Start() {
        this.InitializeAllGameObjects();
        this.StartAllGameObjects();
    }

    Update() {
        this.UpdateAllGameObjects();
        this.LateUpdateAllGameObjects();

        this.ClearScreen();
        this.DrawAllGameObjects();
    }

    //#region GameObject Run Logic
    GetGameObjectById(id) {
        return this.GameObjects.get(id);
    }

    AddNewGameObject(gameObject) {
        if(gameObject instanceof GameObject) {
            this.GameObjects.set(gameObject.id, gameObject);
        }
    }

    InitializeAllGameObjects() {
        this.GameObjects.forEach(obj => { obj.Initialize(), obj.isInitialized = true; });
    }

    StartAllGameObjects() {
        this.GameObjects.forEach(obj => {
            if(obj.isInitialized && obj.isReady) { obj.Start(), obj.isStarted = true; }
        });
    }

    UpdateAllGameObjects() {
        this.GameObjects.forEach(obj => {
            if(obj.isStarted && obj.isActive) { obj.Update(), obj.isUpdated = true; }
        });
    }

    LateUpdateAllGameObjects() {
        this.GameObjects.forEach(obj => {
            if(obj.isStarted && obj.isActive) { obj.LateUpdate(), obj.isUpdated = true; }
        });
    }

    DrawAllGameObjects() {
        this.GameObjects.forEach(obj => {
            if(obj.isUpdated && obj.isActive) { obj.Draw(), obj.IsDrawn = true; }
        });
        this.GameObjects.forEach(obj => obj.ForceDraw());
    }

    CheckIfGameObjectExists(id) {
        return this.GameObjects.has(id);
    }

    ClearAllGameObjects() {
        this.GameObjects.clear();
    }

    DestroyGameObject(id) {
        this.GameObjects.delete(id);
    }
    //#endregion GameObject Run Logic

    //#region GameController Run Logic
    InitializeCanvas() {
        canvas$1.width = 960;
        canvas$1.height = 640;
        this.ClearScreen(Color.Black);
    }

    ClearScreen(color) {
        canvasContext.clearRect(0, 0, canvas$1.width, canvas$1.height);
        canvasContext.fillStyle = color;
        canvasContext.fillRect(0, 0, canvas$1.width, canvas$1.height);
    }
    //#endregion GameController Run Logic

    //#region Game Specific Run Logic
    InitializeBreakout() {
        this.CreatePaddle("paddle", null, new Vector2$1(32, 620), 256, 16, "white");
        this.AddNewGameObject(new Circle("circle", null, new Vector2$1(32, 32), new Vector2$1(0, 0), 0, Math.PI * 2, 8, "white"));
    }

    CreatePaddle(id, parent, position, width, height, color) {
        this.AddNewGameObject(new Paddle(id, parent, position, new Vector2$1(width / 2, height), width, height, color));
    }

    //#endregion Game Specific Run Logic
}

var Controller = new GameControl();

var lastFrameLapse = 0;

function Initialize() {
    // GameController = new GameControl();
    // AudioController = new AudioSet();
    // GameController.DebugController.Activate();


    Controller.Initialize();
    Controller.Start();

    runLoop(0);
}

function runLoop(currentTimeLapse) {
    if (currentTimeLapse < lastFrameLapse + (60 / 1000)) {
        requestAnimationFrame(runLoop);
        return;
    }
    lastFrameLapse = currentTimeLapse;

    // Logic
    Controller.ClearScreen(Color.Black);
    Controller.Update();
    //

    requestAnimationFrame(runLoop);
}



Initialize();
