import { Component } from "@angular/core";

@Component({
  selector: 'app-counter' ,
  template: `<hr>
  <h2> Mi contador es: {{ counter }} </h2>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent{
    public counter = 10;

    increaseBy( value: number):void{
      this.counter += value;
    }

    reset():void{
      this.counter = 10;
    }
  }

