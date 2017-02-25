class Sprite{
  private _texture : any;
  private _sprite : any;

  constructor(private texture: string){
    this._texture = PIXI.Texture.fromImage(texture);
    this._sprite = new PIXI.Sprite(this._texture);
    this._sprite.scale.x = 0.02;
    this._sprite.scale.y = 0.02;
    this._sprite.anchor.x = 0.5;
    this._sprite.anchor.y = 0.5;
    Renderer._stage.addChild(this._sprite);
  }

  setPosition(x : number, y : number) : void{
    this._sprite.position.x = x;
    this._sprite.position.y = y;
  }
}
