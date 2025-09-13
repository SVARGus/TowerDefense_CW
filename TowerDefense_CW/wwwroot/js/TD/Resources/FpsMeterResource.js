import { GraphicEngineResource } from "../GraphicEngine/GraphicEngineResource.js";
import { CanvasHelper } from "../Utilites/CanvasHelper.js";

export class FpsMeterResource extends GraphicEngineResource {
    /**
     * @constructor
     * @param canvasHelper {CanvasHelper}
     * @param left {number}
     * @param right {number}
     * @param top {number}
     * @param bottom {number}
     */
    constructor(canvasHelper, left, right, top, bottom) {
        super();
        this._canvasHelper = canvasHelper;
        this._left = left;
        this._right = right;
        this._top = top;
        this._bottom = bottom;
    }
}