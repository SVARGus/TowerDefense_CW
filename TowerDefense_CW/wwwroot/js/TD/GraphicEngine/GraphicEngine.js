import { GraphicEngineTimer } from './GraphicEngineTimer.js';
import { IGraphicEngineResource } from "../Interfaces/IGraphicEngineResource.js";
import { Canvas } from "../Canvas.js";

export class GraphicEngine {

    /**
     * @type {GraphicEngineTimer}
     * @private
     */
    _timer = new GraphicEngineTimer();

    /**
     * @type {Array<IGraphicEngineResource>}
     * @private
     */
    _loadedResources = undefined

    /**
     * @type {Canvas}
     * @private
     */
    _canvas = undefined

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

        const canvasSize = _this._canvas.fieldSize;

        _this._canvas.Clear(canvasSize)

        if (_this.isResourcesLoaded) {
            for (
                /**
                 * @type {IGraphicEngineResource}
                 * @name loadedResource
                 */
                let loadedResource of _this._loadedResources) {
                    loadedResource.OnDraw(_this._canvas)
            }
        }
    }

    /**
     * 
     * @param resources {Array<IGraphicEngineResource>}
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