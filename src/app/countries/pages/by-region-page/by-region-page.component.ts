import { Component } from '@angular/core';

import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.scss'
})
export class ByRegionPageComponent {

  public regions:Country[]= [];

  constructor(
    private countriesService:CountriesService
  ) { }

  searchByRegion( term: string ): void{
    this.countriesService.searchCountries( term  , 'region')
      .subscribe( countries => {
        console.log(countries);
        this.regions = countries;
      });
  }
}
