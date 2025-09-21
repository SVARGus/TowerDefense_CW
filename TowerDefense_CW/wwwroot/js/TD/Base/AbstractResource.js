import { Rect } from "../DataModel/Rect.js";
import { FieldSize } from "../DataModel/FieldSize.js";
//import { type } from "jquery";
//import { left } from "@popperjs/core/index.js";

export class AbstractResource {
    /**
     * @type {Rect}
     * @private
     */
    _resourceRect;

    /**
     * @type {Rect}
     * @private
     */
    _resourceRectPercents;


    /**
     * 
     * @type {FieldSize}
     * @private
     */
    _fieldSize;

    /**
     * 
     * @returns {Rect}
     */
    get resourceRect() {
        return this._resourceRect;
    }

    /**
     * 
     * @param value {Rect}
     */
    set resourceRect(value) {
        if (!this.fieldSize) {
            throw new Error(`${typeof this} field size is undefined. resourceRect can not be set.`);
        }

        this._resourceRect = value;

        const width = this._fieldSize.width;
        const height = this._fieldSize.height;

        this._resourceRectPercents = new Rect(
            value.left / width * 100,
            value.right / width * 100,
            value.top / height * 100,
            value.bottom / height * 100
        )
    }

    /**
     * 
     * @returns {Rect}
     */
    get resourceRectPercents() {
        return this._resourceRectPercents;
    }

    /**
     * 
     * @param value {Rect}
     */
    set resourceRectPercents(value) {
        if (!this.fieldSize) {
            throw new Error(`${typeof this} field size is undefined. resourceRect can not be set.`);
        }

        this._resourceRectPercents = value;

        const width = this._fieldSize.width;
        const height = this._fieldSize.height;

        this._resourceRect = new Rect(
            value.left / 100 * width,
            value.right / 100 * width,
            value.top / 100 * height,
            value.bottom / 100 * height
        )
    }

    /**
     * 
     * @returns {FieldSize}
     */

    get fieldSize() {
        return this._fieldSize;
    }

    /**
     * 
     * @param value {FieldSize}
     */
    set fieldSize(value) {
        this._fieldSize = value
    }

    get isGraphicEngineResource() {
        return this._fieldSize && this._resourceRect && this._resourceRectPercents;
    }

    constructor() {
        //super();
        if (this.constructor === AbstractResource) {
            throw new Error(`${typeof this} is abstract class and can not be initialized`);
        }
    }

    OnDraw(canvas) {
        throw new Error(`${typeof this}.OnDraw not implemented.`);
    }

}