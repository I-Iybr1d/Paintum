import { Controller as GameController }  from './GameControl';
import { Color } from './Globals';

var DeltaTime = 0;
var lastFrameLapse = 0;

function Initialize() {
    // GameController = new GameControl();
    // AudioController = new AudioSet();
    // GameController.DebugController.Activate();


    GameController.Initialize();
    GameController.Start();

    runLoop(0);
}

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



Initialize();