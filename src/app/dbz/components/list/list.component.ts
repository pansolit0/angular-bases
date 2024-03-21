import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponents {


  @Input()
  public characterList : Character[]=[{
    name:'Trunks',
    power: 10
  }]

 }
