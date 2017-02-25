"use strict";
var Renderer = (function () {
    function Renderer() {
        var _this = this;
        this._container = null;
        this.onWindowResize = function (e) {
            _this._renderer.resize(window.innerWidth, window.innerHeight);
        };
        this._renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, { backgroundColor: 0x333333 });
        this._container = document.getElementById('canvas');
        this._container.appendChild(this._renderer.view);
        window.addEventListener('resize', this.onWindowResize, false);
    }
    Renderer.prototype.render = function () {
        this._renderer.render(Renderer._stage);
    };
    return Renderer;
}());
Renderer._stage = new PIXI.Container();
