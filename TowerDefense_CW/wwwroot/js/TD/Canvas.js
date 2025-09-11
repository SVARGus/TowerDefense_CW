import { GraphicEngine } from "./GraphicEngine/GraphicEngine.js"


export const Canvas = {
    _graphicEngine: new GraphicEngine(),

    
    __temp() {
        this._graphicEngine.Stop();
        console.log("GraphicEngine остановлен __temp");
    },

    /**
     * 
     * @param id {string} id canvas элемент на странице
     * @constructor
     */
    Init(id) {
        this._graphicEngine.Init();
        this._graphicEngine.Start();
        setTimeout(this.__temp.bind(this), 5000);

        /**
         * @type {HTMLCanvasElement}
         */
        let gameField = document.getElementById(id);
        if (!gameField || !(gameField instanceof HTMLCanvasElement)) {
            console.error("Canvas not found or is not canvas:", id, gameField);
            return;
        }
        let canvas = document.getElementById(id);

        console.log("gameField получено [", gameField, "].",
            " Проверка на тип - [", gameField instanceof HTMLCanvasElement, "]");

        let context = gameField.getContext('2d');
        if (!context) {
            console.error("2D context not available");
            return;
        }

        context.save();
        context.beginPath();
        context.setTransform(1, 0, 0, 1, 100, 100);
        context.rotate((Math.PI / 180) * 45);
        context.rect(-25, -25, 50, 50);
        context.stroke();
        context.restore();
    },

}