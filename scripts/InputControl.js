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
        this.mousePosition = new Vector2(0, 0);

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
        Input.mousePosition = new Vector2(
            (event.clientX - bounding.left) / scaleX,
            (event.clientY - bounding.top) / scaleY
        );
    }
    //#endregion Mouse Inputs



}