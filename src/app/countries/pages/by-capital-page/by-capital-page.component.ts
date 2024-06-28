import {
  Component,
  OnInit,
} from '@angular/core';

import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss'
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public intialValue:string = '';

  constructor( private countriesService:CountriesService) { }
  ngOnInit(): void {

    this.countries = this.countriesService
      .cacheStore
      .byCapital
      .countries;
    this.intialValue = this.countriesService
      .cacheStore
      .byCapital
      .term

    console.log(this.countriesService);
  }

  searchByCapital( term: string ): void{
    this.isLoading = true;
   this.countriesService.searchCountries( term  , 'capital')
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
