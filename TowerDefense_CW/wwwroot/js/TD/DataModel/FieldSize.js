export class FieldSize {
    /**
     * 
     * @type {number}
     * @private
     */
    _width = undefined
    /**
     * 
     * @type {number}
     * @private
     */
    _height = undefined

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    /**
     * 
     * @param {number} width
     * @param {number} height
     */
    constructor(width, height) {
        if (width === undefined) {
            throw new Error("Parameter 'width must be a number");
        }
        if (height === undefined) {
            throw new Error("Parameter 'height must be a number");
        }
        this._width = width;
        this._height = height;
    }
}