var hej: string = "varw";
// console.log(hej);
//
// var myName: string = "Simon";
// var myAge: number = 23;
// var canVote: boolean = true;
//
// var yourName: string = "Bajs";
//
// interface Agent2{
//   name: string;
// }
//
// var testAgent: Agent = {
//   name: "Kiss"
// }
//
// //var agents: Agent[] = [];
//
// agents.push({
//   name: "Bert"
// });
//
//
// document.write(testAgent.name);
//
// var employees: string[] = ["bob", "sally", "Sam"];
//
// employees.push("5");
//
// let sampLet = 123; // Does not change from blocks
//
//
//
// // Loops
// var randArray = [6,6,7,8];
//
// for(var val in randArray){
//
// }
// var strArray = randArray.map(String);
//
// for(var val of strArray){
//
// }
//
// var getSum = function(num1: number, num2:number) : number{
//
//   return num1 + num2;
// }
// var addOne: any = (x)=>x+1;
// addOne(4);
//
// // Classes
// class Animal{
//   public favFood: string;
//
//   static numOfAnimals: number = 0;
//
//   constructor(private name: string, private owner: string){
//     Animal.numOfAnimals++;
//   }
//
//   ownerInfo(){
//     console.log("Owner: " + this.owner + ", Name: " + this.name);
//   }
//
//   static howManyAnimals(): number{
//     return Animal.numOfAnimals;
//   }
//
//   private _weight: number;
//   get weight(): number{return this.weight};
//
// }
//
// var spot = new Animal("Spot", "Swag");
//
// class Dog extends Animal{
//   constructor(name: string, owner: string){
//     super(name, owner);
//     Dog.numOfAnimals++;
//   }
// }
//
// var grover = new Dog("Grover", "Jimmy");
//
// interface Vehicle{
//   drive(): any;
// }
//
// class Car implements Vehicle{
//   constructor(private wheels: number){};
//
//   drive(): void{
//     console.log("yolo");
//   }
// }
//
// class Bicycle implements Vehicle{
//   constructor(private wheels: number){};
//
//   drive(): void{
//     console.log("yolo");
//   }
// }
//
// function GetType<T>(val: T): string{
//   return typeof(val);
// }
//
// function GetWheels<w extends Vehicle>(veh: w): number{
//    return veh.drive();
//  }
//
// function theSum(x,y,z): void{
//   console.log("Sum " + (x+y+z));
// }
//
// var args = [4, 5, 6];
//
// //theSum(...args);
//
// enum Emotion{
//   Happy = 1,
//   Sad,
//   Angry
// }
