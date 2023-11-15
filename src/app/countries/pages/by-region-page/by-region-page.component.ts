import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  opcionSeleccionada: string = '';
  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ) {}

  searchByRegion():void  {
    this.countriesService.searchRegion( this.opcionSeleccionada )
      .subscribe( countries => {
        this.countries = countries;
      });

  }
  // onChange() {
  //   console.log('Opción seleccionada:', this.opcionSeleccionada);
  //   // Aquí puedes realizar cualquier acción que desees con el valor seleccionado
  //   // Por ejemplo, puedes enviarlo a un servicio, realizar una acción en función de la selección, etc.
  // }

}
