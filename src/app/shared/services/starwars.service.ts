import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StarWarsAPI, Result } from '../../interfaces/starwars-api';

@Injectable({
  providedIn: 'root',
})
export class StarwarsService {
  constructor(private readonly http: HttpClient) {}

  searchPeople(searchText: string): Observable<Result[]> {
    return this.http
      .get<StarWarsAPI>('https://swapi.dev/api/people', {
        params: {
          search: searchText,
        },
      })
      .pipe(map((value: StarWarsAPI) => value.results));
  }
}
