/// <reference path="agent.ts"/>

class Environment{

  private _agent : Agent;

  constructor(){
    this._agent = new Agent();
  }

  public update(deltaTime){
    this._agent.update(deltaTime);
  }
}
