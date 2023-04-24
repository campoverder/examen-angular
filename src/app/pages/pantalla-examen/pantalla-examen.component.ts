import {Component, inject, OnInit} from '@angular/core';
import {PokemonApiResponse, PokemonResult} from "../../interfaces/pokemon.interface";
import {PokemonService} from "../../services/pokemon.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-pantalla-examen',
  templateUrl: './pantalla-examen.component.html',
  styleUrls: ['./pantalla-examen.component.css']
})
export class PantallaExamenComponent implements OnInit{
  private readonly pokemonService: PokemonService =  inject(PokemonService);
  private readonly messageService: MessageService = inject(MessageService);

  title: string = "Listado de Pokemons";
  loading: boolean = false;
  count!: number;
  next!: string | null;
  previous!: string | null;
  pokemons!: PokemonResult[];

  ngOnInit(): void {
    this.loading = true;
    this.pokemonService.getPokemons().subscribe({
      next: (res: PokemonApiResponse): void => {
        this.loading = false;
        this.count = res.count;
        this.next = res.next;
        this.previous = res.previous;
        this.pokemons = res.results;
        this.messageService.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Exito' });
      },
      error: (error: any): void => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      }
    });
  }

  nextPage(): void {
    this.pokemonService.getPokemons(this.next).subscribe({
      next: (res: PokemonApiResponse): void => {
        this.count = res.count;
        this.next = res.next;
        this.previous = res.previous;
        this.pokemons = res.results;
        this.messageService.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Exito' });
      },
      error: (error: any): void => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      }
    });
  }

  prevPage(): void {
    this.pokemonService.getPokemons(this.previous).subscribe({
      next: (res: PokemonApiResponse): void => {
        this.count = res.count;
        this.next = res.next;
        this.previous = res.previous;
        this.pokemons = res.results;
        this.messageService.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Exito' });
      },
      error: (error: any): void => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      }
    });
  }
}
