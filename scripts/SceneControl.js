export default class SceneControl {
    constructor() {
        this.SceneList = new Map();
    }

    Add(name, scene) {
        this.SceneList.set(name, scene);
    }

    Remove() {
        
    }
}