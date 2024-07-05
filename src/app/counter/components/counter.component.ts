import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:  `
  <h3>Counter: {{counter}}</h3>

  <button (click)="increasyBy(1)">+1</button>
  <button (click)="increasyBy(-1)">-1</button>
  <button (click)="reset(10)">reset</button>`,

})
export class counterComponent{
  public counter: number = 10;


  increasyBy(value : number):void{
    this.counter += value;
  }

  reset(value : number):void{
    this.counter = value;
  }


}
