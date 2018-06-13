class GameObject {
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
    }

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
    
    // SetLocalOrigin(position) {
    //     this.position = position - this.offset;
    // }

    /**
     * Sets the Offsetted X Position of the object
     * @param {number} xPos 
     */
    SetX(xPos) {
        this.position.x = xPos + this.offset.x;
    }

    /**
     * Sets the Offsetted Y Position of the object
     * @param {number} yPos 
     */
    SetY(yPos) {
        this.position.y = yPos + this.offset.y;
    }
}