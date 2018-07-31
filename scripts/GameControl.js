import InputControl from './InputControl';
import GameObject from './GameObject';
import Vector2 from './Vector2';
import Paddle from './Paddle';
import Circle from './Circle';
import { canvas, canvasContext, Color } from './Globals';

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
        this.GameObjects.forEach(obj => { obj.Initialize(), obj.isInitialized = true });
    }

    StartAllGameObjects() {
        this.GameObjects.forEach(obj => {
            if(obj.isInitialized && obj.isReady) { obj.Start(), obj.isStarted = true }
        });
    }

    UpdateAllGameObjects() {
        this.GameObjects.forEach(obj => {
            if(obj.isStarted && obj.isActive) { obj.Update(), obj.isUpdated = true }
        });
    }

    LateUpdateAllGameObjects() {
        this.GameObjects.forEach(obj => {
            if(obj.isStarted && obj.isActive) { obj.LateUpdate(), obj.isUpdated = true }
        });
    }

    DrawAllGameObjects() {
        this.GameObjects.forEach(obj => {
            if(obj.isUpdated && obj.isActive) { obj.Draw(), obj.IsDrawn = true }
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
        canvas.width = 960;
        canvas.height = 640;
        this.ClearScreen(Color.Black);
    }

    ClearScreen(color) {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        canvasContext.fillStyle = color;
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    }
    //#endregion GameController Run Logic

    //#region Game Specific Run Logic
    InitializeBreakout() {
        this.CreatePaddle("paddle", null, new Vector2(32, 620), 256, 16, "white");
        this.CreateBall("circle", null, new Vector2(32, 32), new Vector2(0, 0), 0, Math.PI * 2, 8, "white");

    }

    CreatePaddle(id, parent, position, width, height, color) {
        this.AddNewGameObject(new Paddle(id, parent, position, new Vector2(width / 2, height), width, height, color));
    }

    CreateBall(id, parent, position, offset, startAngle, endAngle, radius, color) {
        this.AddNewGameObject(new Circle(id, parent, position, offset, startAngle, endAngle, radius, color));
    }

    //#endregion Game Specific Run Logic
}

export var Controller = new GameControl();