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
     * @param {string} htmlId
     */
    constructor(htmlId) {
        this._htmlCanvasElement = document.getElementById(htmlId);

        if (this._htmlCanvasElement === null || this._htmlCanvasElement === undefined) {
            throw new Error("No canvas element found.");
        }
    }
    get fieldSize() {
        return new FieldSize(this._htmlCanvasElement.width, this._htmlCanvasElement.height);
    }

    /**
     * 
     * @param id {string} id canvas элемент на странице
     * @constructor
     */
    Init(id) {
        /**
         * @type {HTMLCanvasElement}
         */
        let gameField = document.getElementById(id);

        console.log("gameField получено [", gameField, "].",
            " Проверка на тип - [", gameField instanceof HTMLCanvasElement, "]");

        let context = gameField.getContext('2d');

        context.setTransform(1, 0, 0, 1, 100, 100);
        context.rotate((Math.PI / 180) * 45);
        context.rect(-25, -25, 50, 50);
        context.stroke();
    }

    /**
     * @public
     * @function
     */
    Clear() {

    }
}