import { GraphicEngineTimer } from './GraphicEngineTimer.js';
import { IGraphicEngineResource } from "../Interfaces/IGraphicEngineResource.js";
import { Canvas } from "../Canvas.js";

export class GraphicEngine {

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
    // Переделать ниже 
    Init() {
        this._timer.Init(this.__redraw, 10);
    }

    get isResourcesLoaded() {
        return this._loadedResources !== undefined;
    }

    __redraw() {
        //console.log("Timer works Yoo")

        this._canvas.Clear()

        if (this.isResourcesLoaded) {
            for (
                /**
                 * @type {IGraphicEngineResource}
                 * @name loadedResource
                 */
                let loadedResource of this._loadedResources) {
                    loadedResource.OnDraw(this._canvas)
            }
        }
    }

    //__temp() {
    //    console.log("Timer works Yoo");
    //}

    /**
     * 
     * @param resources Array<IGraphicEngineResource>
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