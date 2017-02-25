var Sprite = (function () {
    function Sprite(texture) {
        this.texture = texture;
        this._texture = PIXI.Texture.fromImage(texture);
        this._sprite = new PIXI.Sprite(this._texture);
        this._sprite.scale.x = 0.02;
        this._sprite.scale.y = 0.02;
        this._sprite.anchor.x = 0.5;
        this._sprite.anchor.y = 0.5;
        Renderer._stage.addChild(this._sprite);
    }
    Sprite.prototype.setPosition = function (x, y) {
        this._sprite.position.x = x;
        this._sprite.position.y = y;
    };
    return Sprite;
}());
