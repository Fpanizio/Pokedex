import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type Pokemon = {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  pokemons: Pokemon[] =  [];

  constructor(private httpClient: HttpClient) { 
    this.loadPokemons();
  }


  async loadPokemons() {
    const require = await this.httpClient
    .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
    .toPromise();

    this.pokemons = require.results;
    console.log(this.pokemons)
  }
}
