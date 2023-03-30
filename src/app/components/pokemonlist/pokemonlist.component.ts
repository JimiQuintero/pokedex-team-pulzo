import { Component } from '@angular/core';
import { PokemonserviceService } from '../../service/pokemonservice.service';
import { Pokemon } from '../../models/pokemon.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css'],
})
export class PokemonlistComponent {
  pokemonName: string = '';
  pokemon: Pokemon = {
    abilities: [],
    name: '',
    sprite: {
      other: {
        dream_world: {
          front_default: '',
        },
      },
    },
  };
  team: Array<Pokemon> = [];

  constructor(private pokemonService: PokemonserviceService) {}

  searchPokemon() {
    this.pokemonService
      .getPokemonByName(this.pokemonName)
      .subscribe((pokemon: Pokemon) => {
        if (!pokemon) {
          Swal.fire('', `El Pokemon ${this.pokemonName} no existe`, 'warning');
          return;
        }
        this.pokemon = pokemon;
      });
  }

  addToTeam($pokemon: Pokemon) {
    if (this.team.length >= 6) {
      Swal.fire(
        '',
        'Tu equipo Pokémon está completo, no puedes agregar más Pokémons.',
        'warning'
      );
      return;
    }

    const exist: Pokemon | any = this.checkPokemonNameTeam();
    if (exist) {
      Swal.fire(
        '',
        `El Pokemon ${$pokemon.name} ya existe en el equipo`,
        'warning'
      );
      return;
    }
    this.team.push($pokemon);
  }

  checkPokemonNameTeam() {
    return this.team.find(
      (pokemon: Pokemon) => pokemon.name === this.pokemon.name
    );
  }
}
