import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const API_URL = 'https://api.worldbank.org/v2/country/';

@Injectable({
  providedIn: 'root',
})
export class WorldMapApiService {
  constructor(private http: HttpClient) {}

  getCountryDetailsByCode(countryCode: string) {
    return this.http.get(`${API_URL}${countryCode}?format=json`).pipe(
      map((data: any) => {
        const countryData = data[1][0];
        return {
          name: countryData.name,
          capitalCity: countryData.capitalCity,
          region: countryData.region.value,
          incomeLevel: countryData.incomeLevel.value,
          lendingType: countryData.lendingType.value,
          longitude: countryData.longitude,
        };
      })
    );
  }
}