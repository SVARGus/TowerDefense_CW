import { CanvasHelper } from "../Utilites/CanvasHelper.js";

/**
 * @abstract абстрактный класс для работы с отображением элемента сцены
 */

export class GraphicEngineResource {
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

    constructor() {
        if (this.constructor === GraphicEngineResource) {
            throw new Error("GraphicEngineResource is abstract class and can not be initialized");
        }
    }
}