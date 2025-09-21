import { GraphicEngineResource } from "../GraphicEngine/GraphicEngineResource.js";
import { CanvasHelper } from "../Utilites/CanvasHelper.js";
import { Canvas } from "../Canvas.js";
import { FieldSize } from "../DataModel/FieldSize.js";
import { Rect } from "../DataModel/Rect.js";
import { bottom, right } from "@poppersjs/core/index.js";

export class FpsMeterResource extends GraphicEngineResource {
    /**
     * @constructor
     * @param leftPercent {number}
     * @param rightPercent {number}
     * @param topPercent {number}
     * @param bottomPercent {number}
     * @param canvas {Canvas} // Нужно уточнить!!!
     */
    constructor(leftPercent, rightPercent, topPercent, bottomPercent, canvas) {
        super(new Rect(leftPercent, right, topPercent, bottomPercent), canvas);
        //this._canvasHelper = new CanvasHelper();
        //this._left = leftPercent;
        //this._right = rightPercent;
        //this._top = topPercent;
        //this._bottom = bottomPercent;
    }

    /**
     * 
     * @param {FieldSize} fieldSize
     * @constructor
     */
    Init(fieldSize) {
        super.Init(fieldSize);


    }

    /**
     * 
     * @param canvas {Canvas}
     * @function
     */
    OnDraw(/*canvas*/) {
        //throw new Error("IGraphicEngineResource.OnDraw not implemented.");
    }

    __PrepareDraw() {
        // throw new Error("onDraw cannot be called in abstract class");
    }

    _OnDraw() {
        //throw new Error("onDraw cannot be called in abstract class");
    }
}