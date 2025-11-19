import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  standalone: false,
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRouted: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ){}


  ngOnInit(): void {
    this.activatedRouted.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode(id)),
      )
      .subscribe( country => {
        if (!country) return  this.router.navigateByUrl('');
        return this.country = country;
      })
  }

  // searchCountry( code: string){
  //   this.countriesService.searchCountryByAlphaCode(code)
  //     .subscribe(country => {
  //         console.log({country})
  //       });
  // }

}
