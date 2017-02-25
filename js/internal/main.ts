/// <reference path="environment.ts"/>
/// <reference path="renderer.ts"/>

"use strict";

class Main{

  private _renderer : Renderer;
  private _environment : Environment;

  constructor(){
    console.log("Generating world...");
    this._renderer = new Renderer();
    this._environment = new Environment();
    console.log("Done.");

  }

  start(): void{
    this.update();
  }

  update(): void{
    var time = Date.now() / 1000;
    var deltaTime = 0.3;
    this._renderer.render();
    this._environment.update(deltaTime);
    requestAnimationFrame(() => this.update());
  }
}

window.onload = () => {
    var main = new Main();
    main.start();
};
