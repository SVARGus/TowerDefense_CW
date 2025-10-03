import { GraphicEngineTimer } from "../GraphicEngine/GraphicEngineTimer.js";
import { GraphicEngineResource } from "../GraphicEngine/GraphicEngineResource.js";
import { Canvas } from "../../Canvas.js";

export class GraphicEngine {

    /**
     * @type {GraphicEngineTimer}
     * @private
     */
    _timer = new GraphicEngineTimer();

    /**
     * @type {Array<GraphicEngineResource>}
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
        this._timer.Init(this.__redraw, 10, this); 
    }

    get isResourcesLoaded() {
        return this._loadedResources !== undefined;
    }


    /**
     * 
     * @param _this {GraphicEngine}
     * @private
     */
    __redraw(_this) {
        //console.log("Timer works Yoo")

        //const canvasSize = _this._canvas.fieldSize;

        _this._canvas.Clear()

        if (_this.isResourcesLoaded) {
            for (
                /**
                 * @type {GraphicEngineResource}
                 * @name loadedResource
                 */
                let loadedResource of _this._loadedResources) {
                    loadedResource.Draw()
            }
        }
    }

    /**
     * 
     * @param resources {Array<GraphicEngineResource>}
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