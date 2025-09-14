import { GraphicEngineResource } from "../GraphicEngine/GraphicEngineResource.js";
import { CanvasHelper } from "../Utilites/CanvasHelper.js";
import { Canvas } from "../Canvas.js";

export class FpsMeterResource extends GraphicEngineResource {
    /**
     * @constructor
     * @param leftPercent {number}
     * @param rightPercent {number}
     * @param topPercent {number}
     * @param bottomPercent {number}
     */
    constructor(/*canvasHelper, */leftPercent, rightPercent, topPercent, bottomPercent) {
        super();
        this._canvasHelper = new CanvasHelper();
        this._left = leftPercent;
        this._right = rightPercent;
        this._top = topPercent;
        this._bottom = bottomPercent;
    }

    /**
     * 
     * @param canvas {Canvas}
     * @function
     */
    OnDraw(canvas) {
        //throw new Error("IGraphicEngineResource.OnDraw not implemented.");
    }
}