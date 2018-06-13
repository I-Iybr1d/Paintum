var canvas = document.getElementById('canvas');
var canvasContext = canvas.getContext('2d');

// TODO: Move global objects to their right places

var GameController;
var DebugController;
var DeltaTime = 0;
var lastFrameLapse = 0;
var Input = {
    mousePosition: new Vector2()
}
var _mousePosition = new Vector2();
//
var canvasMargin = 4;

function runLoop(currentTimeLapse) {
    DeltaTime = (currentTimeLapse - lastFrameLapse) / 1000;
    if (currentTimeLapse < lastFrameLapse + (60 / 1000)) {
        requestAnimationFrame(runLoop);
        return;
    }
    lastFrameLapse = currentTimeLapse;

    // Logic
    GameController.ClearScreen(Color.Black);
    GameController.Update();
    //

    requestAnimationFrame(runLoop);
}

function Initialize() {
    GameController = new GameControl();
    // AudioController = new AudioSet();
    // GameController.DebugController.Activate();


    GameController.Initialize();
    GameController.Start();

    runLoop(0);
}

Initialize();