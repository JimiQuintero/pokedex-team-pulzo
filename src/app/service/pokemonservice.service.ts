import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class PokemonserviceService {
  Api: string = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) {}

  getPokemonByName(nombrePokemon: string): Observable<Pokemon | any> {
    return this.http
      .get<Pokemon>(`${this.Api}pokemon/${nombrePokemon}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      Swal.fire('Ocurrió un error:', 'Error el Pokemon no existe', 'error');
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // Error del lado del servidor
      Swal.fire('Ocurrió un error:', 'Error el Pokemon no existe', 'error');
      console.error(
        `El servidor respondió con el código ${error.status}, ` +
          `el mensaje de error es: ${error.error}`
      );
    }
    // Lanza un error personalizado
    return throwError(
      'Algo salió mal; por favor, inténtelo de nuevo más tarde.'
    );
  }
}
