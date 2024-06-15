import { Component } from '@angular/core';

import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.scss'
})
export class ByCountryPageComponent {

  public countries : Country[] = [];

  constructor(
    private countrieServiec:CountriesService
  ) { }

  public searchByCountry ( term: string ): void {
    this.countrieServiec.searchCountries( term , 'name' )
      .subscribe( countries => {
        this.countries = countries
      });
  }
}
