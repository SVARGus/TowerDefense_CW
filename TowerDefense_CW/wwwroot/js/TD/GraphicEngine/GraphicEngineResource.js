import { IGraphicEngineResource } from "../Interfaces/IGraphicEngineResource.js";
import { CanvasHelper } from "../Utilites/CanvasHelper.js";

/**
 * @abstract абстрактный класс для работы с отображением элемента сцены
 */

export class GraphicEngineResource extends IGraphicEngineResource {
    /**
     * @type {number}
     * @protected
     */
    _left;
    /**
     * @type {number}
     * @protected
     */
    _right;
    /**
     * @type {number}
     * @protected
     */
    _top;
    /**
     * @type {number}
     * @protected
     */
    _bottom;
    /**
     * @type {CanvasHelper}
     * @protected
     */
    _canvasHelper;

    constructor() {
        super();
        if (this.constructor === GraphicEngineResource) {
            throw new Error(`${typeof this} is abstract class and can not be initialized`);
        }
    }

    Draw() {
        this.__PrepareDraw();
        this._OnDraw();
    }

    __PrepareDraw() {

    }

    _OnDraw() {
        throw new Error("onDrow cannot be called in abstract class");
    }
}