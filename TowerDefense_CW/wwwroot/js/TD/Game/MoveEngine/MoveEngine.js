import { MoveEngineTimer } from "../MoveEngine/MoveEngineTimer.js";
import { MoveEngineResource } from "../MoveEngine/MoveEngineResource.js";
import { Canvas } from "../../Canvas.js";

export class MoveEngine {

    /**
     * @type {MoveEngineTimer}
     * @private
     */
    _timer = new MoveEngineTimer();

    /**
     * @type {Array<MoveEngineResource>}
     * @private
     */
    _loadedResources = undefined

    /**
     * @type {Canvas}
     * @private
     */
    _canvas; /*= undefined*/

    /**
     * 
     * @param canvas {Canvas}
     */
    constructor(canvas) {
        this._canvas = canvas;
    }
    
    Init() {
        this._timer.Init(this.__redraw, 200, this); 
    }

    get isResourcesLoaded() {
        return this._loadedResources !== undefined;
    }


    /**
     * 
     * @param _this {MoveEngine}
     * @private
     */
    __redraw(_this) {
        //console.log("Timer works Yoo")

        //const canvasSize = _this._canvas.fieldSize;


        if (_this.isResourcesLoaded) {
            for (
                /**
                 * @type {MoveEngineResource}
                 * @name loadedResource
                 */
                let loadedResource of _this._loadedResources) {
                    loadedResource.Draw()
            }
        }
    }

    /**
     * 
     * @param resources {Array<MoveEngineResource>}
     * @function
     */
    LoadResources(resources) {
        if (this.isResourcesLoaded) {
            throw new Error("Resources is already loaded");
        }

        this._loadedResources = resources
    }

    UnloadResourcex() {
        this._loadedResources = undefined;
    }

    Start() {
        this._timer.Start();
    }

    Stop() {
        this._timer.Stop();
    }
}