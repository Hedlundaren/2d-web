var Environment = (function () {
    function Environment() {
        this._agent = new Agent();
    }
    Environment.prototype.update = function (deltaTime) {
        this._agent.update(deltaTime);
    };
    return Environment;
}());
