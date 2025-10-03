import { GraphicEngineResource } from "../Game/GraphicEngine/GraphicEngineResource.js";
import { Canvas } from "../Canvas.js";
import { Rect } from "../DataModel/Rect.js";

export class FpsMeterResource extends GraphicEngineResource {

    /**
     * @type {number}
     * @private
     */
    _fpsCounter;


    /**
     * @type {number}
     * @private
     */
    _currentFps;

    /**
     * @type {number}
     * @private
     */
    _intervalId;

    /**
     * @type {string}
     * @private
     */
    _currentFpsText;

    /**
     * @type {DOMMatrix}
     * @private
     */
    _transform;

    /**
     * 
     * @type {string}
     * @private
     * @constant
     */
    _red = "#FF0000";

    /**
     * 
     * @type {string}
     * @private
     * @constant
     */
    _shadow = "#000000";

    /**
     * @constructor
     * @param leftPercent {number}
     * @param rightPercent {number}
     * @param topPercent {number}
     * @param bottomPercent {number}
     * @param canvas {Canvas}
     */
    constructor(leftPercent, rightPercent, topPercent, bottomPercent, canvas) {
        super(new Rect(leftPercent, rightPercent, topPercent, bottomPercent), canvas);

        this._intervalId = setInterval(this.__computeCurrentFps, 1000, this);
        this._currentFps = 0;
        this._fpsCounter = 0;
        this._transform = canvas.GetTransform(super.resourceRect.left, super.resourceRect.top, 0);
        this._currentFpsText = "";
    }

    __computeCurrentFps(_this) {
        _this._currentFps = _this._fpsCounter;
        _this._fpsCounter = 0;
        _this._currentFpsText = `FPS: ${_this._currentFps}`;
    }


    _PrepareDraw() {
        this._fpsCounter++;

        this._canvas.SetTransform(this._transform)
    }

    _OnDraw() {
        const width = this._resourceRect.width;
        const height = this._resourceRect.height;

        this._canvas.DrawFilledShadowedText(this._currentFpsText, this._red, this._shadow, width, height, 1);
    }

    Destroy() {
        super.Destroy();

        clearInterval(this._intervalId);
    }
}