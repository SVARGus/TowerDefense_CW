import { GraphicEngineResource } from "../GraphicEngine/GraphicEngineResource.js";
//import { CanvasHelper } from "../Utilites/CanvasHelper.js";
import { Canvas } from "../Canvas.js";
//import { FieldSize } from "../DataModel/FieldSize.js";
import { Rect } from "../DataModel/Rect.js";
//import { bottom, right } from "@poppersjs/core/index.js";

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
     * @type {DOMMatrix}
     * @private
     */
    _transform;

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
    }

    __computeCurrentFps(_this) {
        _this._currentFps = _this._fpsCounter;
        _this._fpsCounter = 0;
    }


    _PrepareDraw() {
        this._fpsCounter++;

        this._canvas.SetTransform(this._transform)
    }

    _OnDraw() {
        const text = `FPS: ${this._currentFps}`;
        const red = "#FF0000";
        const shadow = "#000000";
        const width = this._resourceRect.width;
        const height = this._resourceRect.height;

        this._canvas.DrawFilledShadowedText(text, red, shadow, width, height, 1);
    }

    Destroy() {
        super.Destroy();

        clearInterval(this._intervalId);
    }
}