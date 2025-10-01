import { Rect } from "../DataModel/Rect.js"

export class AssetSettings {

    /**
     * Путь к картинке от wwwroot
     * @type {string}
     * @private
     */
    _imagePath;

    /**
     * Исходная область картинки для копирования
     * @type {Rect}
     * @private
     */
    _sourceRect;

    /**
     * Путь к картинке от wwwroot
     * @return {string}
     * @public
     */
    get imagePath() {
        return this._imagePath;
    }

    /**
     * Исходная область картинки для копирования
     * @return {Rect}
     * @public
     */
    get sourceRect() {
        return this._sourceRect;
    }

    /**
     * 
     * @param {string} imagePath - Путь к картинке от wwwroot
     * @param {number} sourceLeft - Исходная область картинки для копирования (left)
     * @param {number} sourceRight - Исходная область картинки для копирования (righr)
     * @param {number} sourceTop - Исходная область картинки для копирования (top)
     * @param {number} sourceBottom - Исходная область картинки для копирования (bottom)
     */
    constructor(imagePath, sourceLeft, sourceRight, sourceTop, sourceBottom) {
        this._imagePath = imagePath;
        this._sourceRect = new Rect(sourceLeft, sourceRight, sourceTop, sourceBottom);
    }
}