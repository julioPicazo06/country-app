import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  catchError,
  map,
  Observable,
  of,
  tap,
} from 'rxjs';

import { cacheStore } from '../interfaces/cache-store.interface';
import { Country } from '../interfaces/country';
import { CountryID } from '../interfaces/countryId';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl:string = 'https://restcountries.com/v3.1';

  public cacheStore : cacheStore = {
    byCapital: {
      term: '',
      countries: []
    },
    byCountries: {
      term: '',
      countries: []
    },
    byRegion: {
      region: '',
      countries: []
    }
  }


  constructor(
    private http: HttpClient
  ) { }

  private getCountriesRequest( term:string ): Observable<Country[]>{
    return this.http.get<Country[]>( term )
    .pipe(
      tap(
        countries => this.cacheStore.byCapital = {
          term ,
          countries
        }
        )
    );
  }


  searchCountryByAlphaCode(id :string): Observable<CountryID | null> {
    const url:string = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<CountryID[]>(url)
    .pipe(
      map( countries => countries.length >0 ?countries[0] : null),
      catchError( err => of(null))
    )
  }

  searchCountries (term: string , type:string): Observable<Country[]> {
    const url:string = `${this.apiUrl}/${type}/${term}`;
    return this.getCountriesRequest(url);
  }


}

