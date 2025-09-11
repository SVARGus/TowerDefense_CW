import { GraphicEngineTimer } from './GraphicEngineTimer.js';

export class GraphicEngine {

    _timer = new GraphicEngineTimer();

    Init() {
        this._timer.Init(() => this.__temp(), 1000);
    }

    __temp() {
        console.log("Timer works Yoo");
    }

    LoadResources(resources) {

    }

    Start() {
        this._timer.Start();
    }

    Stop() {
        this._timer.Stop();
    }
}