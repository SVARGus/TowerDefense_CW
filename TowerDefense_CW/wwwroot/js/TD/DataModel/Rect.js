
export class Rect {


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


    get left() {
        return this._left;
    }

    set left(valeu) {
        this._left = value;
    }

    get right() {
        return this._right;
    }

    set right(value) {
        this._right = value;
    }

    get top() {
        return this._top;
    }

    set top(valeu) {
        this._top = value;
    }

    get bottom() {
        return this._bottom;
    }

    set bottom(value) {
        this._bottom = value;
    }

    get width() {
        return this._right - this._left;
    }

    get height() {
        return this._bottom - this._top;
    }

    /**
     * 
     * @param {number} left
     * @param {number} right
     * @param {number} top
     * @param {number} bottom
     */
    constructor(left = 0, right = 0, top = 0, bottom = 0) {
        this._left = left;
        this._right = right;
        this._top = top;
        this._bottom = bottom;
    }
}