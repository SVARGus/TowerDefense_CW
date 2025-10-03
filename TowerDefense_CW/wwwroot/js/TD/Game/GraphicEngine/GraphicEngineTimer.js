export class GraphicEngineTimer {
    /**
     * 
     * @type {number}
     * @private
     */
    _timer = null;
    /**
     * 
     * @type {function()}
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
     * @type {any}
     * @private
     */
    _context = null;

    //setTimeout -> Запускает определенную функцию, через определенный промежуток времени один раз
    //setInterval -> запускает определенную функцию, через определенный промежуток времени циклом

    /**
     * 
     * @param func {function(_this:any)}
     * @param timeout {number}
     * @param _this {any}
     * @constructor
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

        this._timer = setTimeout(this.__OnTimeout, this._timeout, this);
    }

    Stop() {
        clearTimeout(this._timer);

        console.log("Таймер Остановлен");

        this._timer = null;
    }

    /**
     * 
     * @param _this {GraphicEngineTimer}
     * @private
     */

    __OnTimeout(_this) {
        _this._function(_this._context);
        _this._timer = setTimeout(_this.__OnTimeout, _this._timeout, _this);
    }
}