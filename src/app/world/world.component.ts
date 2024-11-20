import { Component, Output, EventEmitter } from '@angular/core';
import { WorldMapApiService } from '../api.service';
import { CountryDetails } from '../types/country-details.type';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world.component.html',
  styleUrl: './world.component.css',
})
export class WorldMapComponent {
  @Output() countrySelected = new EventEmitter<CountryDetails>();

  constructor(private apiService: WorldMapApiService) {}

  onMapClickHandler(event: MouseEvent) {
    const target = event.target as SVGAElement;
    const countryCode = target.getAttribute('id');
    console.log('Country code:', countryCode);

    const previousSelectedCountry =
      document.querySelector('[stroke="#C8AF8F"]');
    previousSelectedCountry?.setAttribute('stroke', '#000000');
    previousSelectedCountry?.setAttribute('stroke-width', '');

    if (countryCode) {
      target.setAttribute('stroke', '#C8AF8F');
      target.setAttribute('stroke-width', '2');
      this.apiService
        .getCountryDetailsByCode(countryCode)
        .subscribe((countryDetails) => {
          this.countrySelected.emit(countryDetails);
        });
    } else {
      this.countrySelected.emit();
    }
  }
}