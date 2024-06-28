import { Component } from '@angular/core';

import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.scss'
})
export class ByRegionPageComponent {

  public countries:Country[]= [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectRegion?: Region;

  constructor(
    private countriesService:CountriesService
  ) { }

  public searchByRegion( region: Region ): void{

    this.selectRegion = region;

    this.countriesService.searchCountries( region , 'region').subscribe( countries => {
      this.countries = countries;
    });
  }
}
