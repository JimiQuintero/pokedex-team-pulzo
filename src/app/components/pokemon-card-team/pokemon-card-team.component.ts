import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card-team',
  templateUrl: './pokemon-card-team.component.html',
  styleUrls: ['./pokemon-card-team.component.css'],
})
export class PokemonCardTeamComponent {
  @Input() team: any;
  constructor() {
    console.log(this.team);
  }
}
