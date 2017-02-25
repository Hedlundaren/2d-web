/// <reference path="sprite.ts"/>
declare var $V:any;

"use strict";

class Agent{

  private _position : any;
  private _velocity : any;
  private _acceleration : any;
  private _mass : number;
  private _goalPosition : any;
  private _sprite : any;
  static numOfAgents: number = 0;

  private _prev_pos_error : any;
  private _pos_integral : any;

  constructor(){
    Agent.numOfAgents++;
    this._position = $V([0, 0]);
    this._velocity = $V([0, 0]);
    this._acceleration = $V([0, 0]);
    this._mass = 1.0;
    this._goalPosition = $V([500, 100]);
    this._sprite = new Sprite("textures/test.png");

    this._prev_pos_error = $V([0,0]);
    this._pos_integral = $V([0,0]);

    window.addEventListener( 'mousedown', this.onMouseDown, false );
  }

  onMouseDown = (e) => {
    if (e) {
      this._goalPosition.setElements([e.clientX, e.clientY]);
    }
  }

  get position(): any{return this._position};
  get velocity(): any{return this._velocity};
  get goalPosition(): any{return this._goalPosition};

  public update(deltaTime) : void{
    this.move(deltaTime);
    this.updateSprite();
  }

  private move(deltaTime){
    // PID, the I is silent
    var kP : number = .0004;
    var kI : number = .0;
    var kD : number = .7;

    var pos_error = this._goalPosition.add(this._position.multiply(-1));
    this._pos_integral = this._pos_integral.add(pos_error.multiply(deltaTime));
    var pos_derivative = pos_error.add(this._prev_pos_error.multiply(-1)).multiply(1.0/deltaTime);

    var pos_adjustment = pos_error.multiply(kP).add(pos_derivative.multiply(kD)).add(this._pos_integral.multiply(kI));
    this._prev_pos_error = pos_error;
    this.addForce(pos_adjustment, deltaTime);
  }

  private addForce(force, deltaTime): void{

    // f = ma, a = f/m
    this._acceleration = force.multiply(1.0/this._mass);
    // v = v + a*t
    this._velocity = this._velocity.add(this._acceleration.multiply(deltaTime));
    // p = p + v*t
    this._position = this._position.add(this._velocity.multiply(deltaTime));

  }

  private updateSprite() : void{
    this._sprite.setPosition(this._position.elements[0], this._position.elements[1]);
  }

}
