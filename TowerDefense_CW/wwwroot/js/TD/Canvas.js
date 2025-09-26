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
     * @type {CanvasRenderingContext2D}
     * @private
     */
    _canvasContext = undefined

    /**
     * 
     * @param {string} htmlId
     */
    constructor(htmlId) {
        this._htmlCanvasElement = document.getElementById(htmlId);

        if (this._htmlCanvasElement === null || this._htmlCanvasElement === undefined) {
            throw new Error("No canvas element found.");
        }

        const context = this._htmlCanvasElement.getContext('2d');

        if (context === null) {
            throw new Error("Can't get canvas context.");
        }

        this._canvasContext = context;
    }

    get fieldSize() {
        return new FieldSize(this._htmlCanvasElement.width, this._htmlCanvasElement.height);
    }


    Init() {
        this._canvasContext.setTransform(1, 0, 0, 1, 100, 100);
        this._canvasContext.rotate((Math.PI / 180) * 45);
        this._canvasContext.rect(-25, -25, 50, 50);
        this._canvasContext.stroke();
    }

    /**
     * @public
     * @function
     //* @param canvasSize {FieldSize}
     */
    Clear(canvasSize) {
        this.ResetTransform();
        this._canvasContext.clearRect(0, 0, this.fieldSize.width, this.fieldSize.height);
    }

    ResetTransform() {
        this._canvasContext.resetTransform()
    }


    /**
     * @public
     * @param {number} moveX перемещение начала координат по осит Х в пикселях
     * @param {number} moveY перемещение начала координат по осит Y в пикселях
     * @param {number} angle угол поворота в градусах
     * @function
     */
    GetTransform(moveX, moveY, angle) {
        this.ResetTransform();
        this._canvasContext.translate(moveX, moveY);
        this._canvasContext.rotate(angle * Math.PI / 180);

        return this._canvasContext.getTransform();
    }

    /**
     * @public
     * @param {DOMMatrix} transform Матрица трансформации, получения при помощи GetTransform
     * @function
     */
    SetTransform(transform) {
        this._canvasContext.setTransform(transform);
    }

    /**
     * @public
     * @param {string} text текст для отображения
     * @param {string} textColor цвет текста
     * @param {number} textWidth ширина для отображения
     * @param {number} textHeight высота для отображения
     * @function
     */
    DrawFilledText(text, textColor, textWidth, textHeight) {
        this._canvasContext.font = `${textHeight}px Arial`;
        this._canvasContext.fillStyle = textColor;
        this._canvasContext.fillText(text, 0, 0, textWidth);
    }

    /**
     * @public
     * @param {string} text текст для отображения
     * @param {string} textColor цвет текста
     * @param {string} shadowColor цвет тени
     * @param {number} textWidth ширина для отображения
     * @param {number} textHeight высота для отображения
     * @param {number} shadowDistance расстояние тени
     * @function
     */
    DrawFilledShadowedText(text, textColor, shadowColor, textWidth, textHeight, shadowDistance) {
        this._canvasContext.translate(shadowDistance, shadowDistance);
        this.DrawFilledText(text, shadowColor, textWidth, textHeight);
        this._canvasContext.translate(-shadowDistance, -shadowDistance);
        this.DrawFilledText(text, textColor, textWidth, textHeight);
    }

}