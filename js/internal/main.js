"use strict";
var Main = (function () {
    function Main() {
        console.log("Generating world...");
        this._renderer = new Renderer();
        this._environment = new Environment();
        console.log("Done.");
    }
    Main.prototype.start = function () {
        this.update();
    };
    Main.prototype.update = function () {
        var _this = this;
        var time = Date.now() / 1000;
        var deltaTime = 0.3;
        this._renderer.render();
        this._environment.update(deltaTime);
        requestAnimationFrame(function () { return _this.update(); });
    };
    return Main;
}());
window.onload = function () {
    var main = new Main();
    main.start();
};
