//import { IGraphicEngineResource } from "../Interfaces/IGraphicEngineResource.js"; //  позже закоментировать
import { CanvasHelper } from "../Utilites/CanvasHelper.js";
import { Canvas } from "../Canvas.js";
import { FieldSize } from "../DataModel/FieldSize.js";
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

    ///**
    // * @type {FieldSize}
    // * @private
    // */
    //_fieldSize;

    /**
     * 
     * @param {Rect} prcentRect
     * @param {Canvas} canvas
     */

    constructor(prcentRect, canvas) {
        super();
        if (this.constructor === GraphicEngineResource) {
            throw new Error(`${typeof this} is abstact class and can not be initialized`);
        }

        this._canvas = canvas;
        this.fieldSize = canvas.fieldSize;
        this.resourceRectPercents = percentRect;
    }

    // Проверить надоли править Init после просмотра занятия от 19.09.25!!!
    /**
     * 
     * @param {FieldSize} fieldSize
     * @constructor
     */
    Init(fieldSize) {
        this._fieldSize = fieldSize;
    }

    /**
     * 
     * @param {FieldSize} fieldSize
     */
    Draw(fieldSize) {
        this.__PrepareDraw(fieldSize);
        this._OnDraw();
    }

    // Проверить надоли править __PrepareDraw после просмотра занятия от 19.09.25!!!
    /**
     * 
     * @param {FieldSize} fieldSize
     */
    __PrepareDraw(fieldSize) {
        if ((this._fieldSize.height !== fieldSize.height) ||
            (this._fieldSize.width !== fieldSize.width)) {
            this.Init(fieldSize);
        }
    }



    _OnDraw() {
        throw new Error("onDrow cannot be called in abstract class");
    }
}