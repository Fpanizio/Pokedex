import { Component, Input } from '@angular/core';
import { test } from '../utils/test';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  pokemon!: string;

  @Input()
  number!: number;

  getPokemonName() {
    return 
  }

  getPokemonImage() {
    const FormatNumber = test.leadingzero(this.number);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${FormatNumber}.png`;
  }
}
