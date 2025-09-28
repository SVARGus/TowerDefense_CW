import { CanvasHelper } from "../Utilites/CanvasHelper.js";
import { Canvas } from "../Canvas.js";
//import { FieldSize } from "../DataModel/FieldSize.js";
import { AbstractResource } from "../Base/AbstractResource.js";
import { Rect } from "../DataModel/Rect.js";

/**
 * @abstract абстрактный класс для работы с отображением элемента сцены
 */

export class GraphicEngineResource extends AbstractResource { // заменить потом на AbstractResource

    /**
     * @type {Canvas}
     * @private
     */
    _canvas;

    ///**
    // * @type {number}
    // * @protected
    // */
    //_left;
    ///**
    // * @type {number}
    // * @protected
    // */
    //_right;
    ///**
    // * @type {number}
    // * @protected
    // */
    //_top;
    ///**
    // * @type {number}
    // * @protected
    // */
    //_bottom;
    /**
     * @type {CanvasHelper}
     * @protected
     */
    _canvasHelper;

    /**
     * 
     * @param {Rect} percentRect
     * @param {Canvas} canvas
     */

    constructor(percentRect, canvas) {
        super();
        if (this.constructor === GraphicEngineResource) {
            throw new Error(`${typeof this} is abstact class and can not be initialized`);
        }

        this._canvas = canvas;
        this.fieldSize = canvas.fieldSize;
        this.resourceRectPercents = percentRect;
    }

    Draw() {
        this._PrepareDraw();
        this._OnDraw();
    }
    
    OnDraw() {
        this._PrepareDraw();
        this._OnDraw();
    }
}