//  Initialize()
//  var quad = new Quadtree(0, new FrameBox(0,0,600,600));

//  Update()
//  quad.clear();
//  for (int i = 0; i < allObjects.size(); i++) {
//      quad.insert(allObjects.get(i));
//  }

//  CheckForCollision()
//  var returnObjects = [];
//  for (int i = 0; i < allObjects.length; i++) {
//      returnObjects.Clear();
//      quad.retrieve(returnObjects, this.objects.get(i));
 
//  for (int x = 0; x < returnObjects.length; x++) {
//      // Run collision detection algorithm between objects
//      // Save in collider: collided with, in which point, 
//      }
//  }

import { ColliderType } from './Globals';
import Collider from './Colider';
import FrameBox from './FrameBox';

export default class QuadTree {
    constructor(level, frameBox, maxLevelDepth, maxObjectsPerNode) {
        this.level = level;                             // Type number
        this.frameBox = frameBox;                       // Type FrameBox
        this.maxLevelDepth = maxLevelDepth;             // Type number
        this.maxObjectsPerNode = maxObjectsPerNode;     // Type number

        this.objects = [];                              // Type Colliders[]
        this.nodes = [];                                // Type QuadTree[]
    }

    Split() {
        var subWidth = this.frameBox.width / 2;
        var subHeight = this.frameBox.height / 2;
        var x = this.frameBox.x;
        var y = this.frameBox.y;
    
        this.nodes[0] = new Quadtree(this.level + 1, new FrameBox(x + subWidth   , y             , subWidth, subHeight));
        this.nodes[1] = new Quadtree(this.level + 1, new FrameBox(x              , y             , subWidth, subHeight));
        this.nodes[2] = new Quadtree(this.level + 1, new FrameBox(x              , y + subHeight , subWidth, subHeight));
        this.nodes[3] = new Quadtree(this.level + 1, new FrameBox(x + subWidth   , y + subHeight , subWidth, subHeight));
    }

    /*
    * Insert the object into the quadtree. If the node
    * exceeds the capacity, it will split and add all
    * objects to their corresponding nodes.
    */
    Insert(pRect) {
        if (this.nodes[0] != null) {
            var index = this.GetIndex(pRect);
        
            if (index != -1) {
                this.nodes[index].Insert(pRect);
                return;
            }
        }
    
        this.objects.Add(pRect);
    
        if (this.objects.length > this.maxObjectsPerNode && this.level < this.maxLevelDepth) {
            if (this.nodes[0] == null) { 
                this.Split(); 
            }
        
            var i = 0;
            while (i < this.objects.size()) {
                var index = this.GetIndex(this.objects.Get(i));
                if (index != -1) {
                    this.nodes[index].Insert(this.objects.Remove(i));
                } else {
                    i++;
                }
            }
        }
    }



    /*
    * Determine which node the object belongs to. -1 means
    * object cannot completely fit within a child node and is part
    * of the parent node
    */
    GetIndex(pRect) {
        var index = -1;
        var verticalMidpoint = this.frameBox.x + (this.frameBox.width / 2);
        var horizontalMidpoint = this.frameBox.y + (this.frameBox.height / 2);
    
        // Object can completely fit within the top quadrants
        var topQuadrant = (pRect.GetY() < horizontalMidpoint && pRect.GetY() + pRect.GetHeight() < horizontalMidpoint);
        // Object can completely fit within the bottom quadrants
        var bottomQuadrant = (pRect.GetY() > horizontalMidpoint);
    
        if (pRect.GetX() < verticalMidpoint && pRect.GetX() + pRect.GetWidth() < verticalMidpoint) {
            if (topQuadrant) { return 1; }
            else if (bottomQuadrant) { return 2; }
        }
        else if (pRect.GetX() > verticalMidpoint) {
            if (topQuadrant) { return 0; }
            else if (bottomQuadrant) { return 3; }
        }
  
        return -1;
    }

    /*
    * Return all objects that could collide with the given object
    */
    Retrieve(returnObjects, pRect) {
        var index = this.GetIndex(pRect);
        if (index != -1 && this.nodes[0] != null) {
            this.nodes[index].Retrieve(returnObjects, pRect);
        }
    
        return returnObjects.AddAll(this.objects);
    }

    Clear() {
        this.objects.Clear();
        for (var i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i] != null) {
                this.nodes[i].Clear();
                this.nodes[i] = null;
            }
        }
    }
}