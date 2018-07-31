import Vector2 from './Vector2';
import { Controller as GameController }  from './GameControl';

export default class GameObject {
    constructor(id = "No Id", parent = null, position = new Vector2(0, 0), offset = new Vector2(0, 0)) {
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
        var parentPos = GameController.GetGameObjectById(this.parent).position;
        if( parentPos !== null && parentPos !== undefined && parentPos instanceof GameObject) {
            this.position = parentPos;
        }
    }

}