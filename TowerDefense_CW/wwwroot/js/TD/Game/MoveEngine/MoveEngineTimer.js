import {MoveEngine } from "../MoveEngine.js"
export class MoveEngineTimer {
    /**
     * 
     * @type {number}
     * @private
     */
    _timer = null;
    /**
     * 
     * @type {function(_this:MoveEngine, MovetimeSpan:number)}
     * @private
     */
    _function = null;
    /**
     * 
     * @type {number}
     * @private
     */
    _timeout = null;

    /**
     * Переменная _this для вызова переданной в Init функции
     * @type {MoveEngine}
     * @private
     */
    _context = null;

    /**
     * Дата/время предыдущего вызова callback таймера
     * @private
     * @type {number}
     */
    _previousTimeoutCallDate;

    //setTimeout -> Запускает определенную функцию, через определенный промежуток времени один раз
    //setInterval -> запускает определенную функцию, через определенный промежуток времени циклом

    /**
     * 
     * @param func {function(_this: MoveEngine, timeSpan:number)}
     * @param timeout {number}
     * @param _this {MoveEngine}
     * @method
     * @returns {Array}
     */
    Init(func, timeout, _this) {
        this._function = func;
        this._timeout = timeout;
        this._context = _this;
    }

    Start() {
        if (this._timer !== null) {
            this.Stop();
        }

        console.log("Таймер запущен");

        this._previousTimeoutCallDate = Date.now();

        this._timer = setTimeout(this.__OnTimeout, this._timeout, this);
    }

    Stop() {
        clearTimeout(this._timer);

        console.log("Таймер Остановлен");

        this._timer = null;
    }

    /**
     * 
     * @param _this {MoveEngineTimer}
     * @private
     */

    __OnTimeout(_this) {
        _this._function(_this._context, timestamp - this._previousTimeoutCallDate);

        _this._previousTimeoutCallDate = Date.now();
        //_this._timer = setTimeout(_this.__OnTimeout, _this._timeout, _this);
    }
}