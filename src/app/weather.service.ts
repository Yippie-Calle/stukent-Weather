import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeatherData(city: string): Observable<any> {
    //httpclient returns an observable
    return this.httpClient.get(
      'http://api.weatherapi.com/v1/current.json?key=8917024130644835a8732603222806=${city}'
    );
  }
}
