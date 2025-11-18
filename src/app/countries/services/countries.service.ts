
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  // base del url que usamos para hacer la llamada http
  private apiUrl: string = 'https://restcountries.com/v3.1'

  // aqui estamos inportando el httpClient para poder hacer las llamadas y tambien lo puedes importar en la app.module
  constructor(private http: HttpClient) { }

  // este es el metodo que hace la llamada http y retornar un observable que se importa de rxjs
  searchCapital(term: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]))
      );
  }

  searchCountry(term: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]))
      );

  }

  searchRegion(region: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]))
      );
  }


}
