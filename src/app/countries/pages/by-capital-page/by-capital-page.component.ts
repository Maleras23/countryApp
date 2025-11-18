import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {

  searchByCapital( term: string){
    console.log('desde mi capital page')
    console.log({term})
  }

}
