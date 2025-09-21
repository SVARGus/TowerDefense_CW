//import { GraphicEngine } from "./GraphicEngine/GraphicEngine.js"
import { FieldSize } from "./DataModel/FieldSize.js";

export class Canvas {
    /**
     * 
     * @type {HTMLCanvasElement}
     * @private
     */
    _htmlCanvasElement = undefined

    /**
     * 
     * @type {CanvasRenderingContext2D}
     * @private
     */
    _canvasContext = undefined

    /**
     * 
     * @param {string} htmlId
     */
    constructor(htmlId) {
        this._htmlCanvasElement = document.getElementById(htmlId);

        if (this._htmlCanvasElement === null || this._htmlCanvasElement === undefined) {
            throw new Error("No canvas element found.");
        }

        const context = this._htmlCanvasElement.getContext('2d');

        if (context === null) {
            throw new Error("Can't get canvas context.");
        }

        this._canvasContext = context;
    }

    get fieldSize() {
        return new FieldSize(this._htmlCanvasElement.width, this._htmlCanvasElement.height);
    }


    Init() {
        this._canvasContext.setTransform(1, 0, 0, 1, 100, 100);
        this._canvasContext.rotate((Math.PI / 180) * 45);
        this._canvasContext.rect(-25, -25, 50, 50);
        this._canvasContext.stroke();
    }

    /**
     * @public
     * @function
     //* @param canvasSize {FieldSize}
     */
    Clear(canvasSize) {
        this._canvasContext.resetTransform();
        this._canvasContext.clearRect(0, 0, this.fieldSize.width, this.fieldSize.height);
    }
}