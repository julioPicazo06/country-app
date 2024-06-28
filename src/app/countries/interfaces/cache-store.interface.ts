import { Country } from './country';

export interface cacheStore {
 byCapital: TermCountries;
  byCountries: TermCountries;
}

export interface TermCountries {
  term: string;
  countries: Country[];
}
