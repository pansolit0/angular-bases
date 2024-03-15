import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})


export class HeroComponent {
  public name: string = 'iron man';
  public age: number = 45;

  public n1:string = this.name;
  public a1:number = this.age;

  get capatillizedName():string{
    return this.name.toUpperCase();

  }

   getHeroDescription():string{
    return`${this.name} - ${this.age}`

  }

  resetForm():void{
    this.age = this.a1;
    this.name = this.n1;

  }

  changeHero():void{
    this.name = 'Galactus';
  }

  changeAge():void{
    this.age = 10000000000;
  }


}
