import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input() pokemon: any;
  @Output() addToTeamEvent = new EventEmitter<Pokemon>();
  addToTeam() {
    //console.log('this.pokemon: ', this.pokemon);
    this.addToTeamEvent.emit(this.pokemon);
  }
}
