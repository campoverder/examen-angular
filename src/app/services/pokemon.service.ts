import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonApiResponse} from "../interfaces/pokemon.interface";
import {environment} from "../../environments/environment";

const API_URL: string = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getPokemons(URL: string | null= null): Observable<PokemonApiResponse> {
    if(URL !== null)
      return this.httpClient.get<PokemonApiResponse>(URL);

    return this.httpClient.get<PokemonApiResponse>(API_URL);
  }
}
