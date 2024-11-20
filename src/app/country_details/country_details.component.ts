import { Component, Input } from '@angular/core';
import { CountryDetails } from '../types/country-details.type';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [],
  templateUrl: './country_details.component.html',
  styleUrl: './country_details.component.css',
})
export class CountryDetailsComponent {
  @Input() countryDetails: CountryDetails | null = null;
}