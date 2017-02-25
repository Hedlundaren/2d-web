"use strict";
var Agent = (function () {
    function Agent() {
        var _this = this;
        this.onMouseDown = function (e) {
            if (e) {
                _this._goalPosition.setElements([e.clientX, e.clientY]);
            }
        };
        Agent.numOfAgents++;
        this._position = $V([0, 0]);
        this._velocity = $V([0, 0]);
        this._acceleration = $V([0, 0]);
        this._mass = 1.0;
        this._goalPosition = $V([500, 100]);
        this._sprite = new Sprite("textures/test.png");
        this._prev_pos_error = $V([0, 0]);
        this._pos_integral = $V([0, 0]);
        window.addEventListener('mousedown', this.onMouseDown, false);
    }
    Object.defineProperty(Agent.prototype, "position", {
        get: function () { return this._position; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Agent.prototype, "velocity", {
        get: function () { return this._velocity; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Agent.prototype, "goalPosition", {
        get: function () { return this._goalPosition; },
        enumerable: true,
        configurable: true
    });
    ;
    Agent.prototype.update = function (deltaTime) {
        this.move(deltaTime);
        this.updateSprite();
    };
    Agent.prototype.move = function (deltaTime) {
        var kP = .0004;
        var kI = .0;
        var kD = .7;
        var pos_error = this._goalPosition.add(this._position.multiply(-1));
        this._pos_integral = this._pos_integral.add(pos_error.multiply(deltaTime));
        var pos_derivative = pos_error.add(this._prev_pos_error.multiply(-1)).multiply(1.0 / deltaTime);
        var pos_adjustment = pos_error.multiply(kP).add(pos_derivative.multiply(kD)).add(this._pos_integral.multiply(kI));
        this._prev_pos_error = pos_error;
        this.addForce(pos_adjustment, deltaTime);
    };
    Agent.prototype.addForce = function (force, deltaTime) {
        this._acceleration = force.multiply(1.0 / this._mass);
        this._velocity = this._velocity.add(this._acceleration.multiply(deltaTime));
        this._position = this._position.add(this._velocity.multiply(deltaTime));
    };
    Agent.prototype.updateSprite = function () {
        this._sprite.setPosition(this._position.elements[0], this._position.elements[1]);
    };
    return Agent;
}());
Agent.numOfAgents = 0;
