import { GraphicEngine } from "./GraphicEngine/GraphicEngine.js"


export const Canvas = {
    _graphicEngine: new GraphicEngine(),

    
    __temp(_this) {
        _this._graphicEngine.Stop();
    },

    /**
     * 
     * @param id {string} id canvas элемент на странице
     * @constructor
     */
    Init(id) {
        this._graphicEngine.Init();
        this._graphicEngine.Start();
        setTimeout(this.__temp, 5000);

        /**
         * @type {HTMLCanvasElement}
         */
        let gameField = document.getElementById(id);
        let canvas = document.getElementById(id);

        console.log("gameField получено [", gameField, "].",
            " Проверка на тип - [", gameField instanceof HTMLCanvasElement, "]");

        let context = gameField.getContext('2d');

        context.setTransform(1, 0, 0, 1, 100, 100);
        context.rotate((Math.PI / 180) * 45);
        context.rect(-25, -25, 50, 50);
        context.stroke();
    },

}