import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacterComponent {
  public character: Character = {
    name:'',
    power: 0
  };

  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();

  emitCharacter():void{
    console.log(this.character);
    if (this.character.name.length === 0 ) return;
    this.onNewCharacter.emit({...this.character});

    this.character.name = '';
    this.character.power = 0;
  }
 }
