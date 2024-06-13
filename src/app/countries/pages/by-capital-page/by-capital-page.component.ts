import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss'
})
export class ByCapitalPageComponent {

  constructor( private countriesService:CountriesService) { }

  searchByCapital( term: string ): void{
    console.log("hello from by-capital-page.component.ts")
    console.log({term});
  }
}
