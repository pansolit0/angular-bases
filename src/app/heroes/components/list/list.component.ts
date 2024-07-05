import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesName:string[] =['spiderman', 'She Hulk', 'Iron Man', 'Thor'];
  public deletedHero?: string ;

  removeLastHeores():void{
    this.deletedHero = this.heroesName.pop();
  }


}
