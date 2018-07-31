
export default class Scene {
    constructor() {
        this.GameObjectList = {};
    }

    Add(object) {

    }

    Remove(id) {
        
    }



    Update() {
        this.GameObjectList.forEach(gameObj => {
            if(gameObj.isActive && gameObj.isStarted) {
                gameObj.Update();
            }
        });
    }
}