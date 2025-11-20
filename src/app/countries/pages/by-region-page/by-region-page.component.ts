import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa'| 'Americas'| 'Asia'| 'Europe'| 'Oceania';

@Component({
  selector: 'countries-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  public countries: Country[] = [];


  constructor(private countriesService: CountriesService){}

  searchByRegion ( region: Region):void{
    this.selectedRegion = region
    this.countriesService.searchRegion(region).subscribe( countries => {
      this.countries = countries })
  }
}
