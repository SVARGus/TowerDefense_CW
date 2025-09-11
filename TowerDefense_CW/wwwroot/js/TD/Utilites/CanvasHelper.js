
export class CanvasHelper {
    /**
     * @type {HTMLCanvasElement}
     * @private
     */
    _canvas

    /**
     * @constructor
     * @param htmlCanvasElement {HTMLCanvasElement}
     */
    constructor(htmlCanvasElement) {
        this._canvas = htmlCanvasElement;
    }
}