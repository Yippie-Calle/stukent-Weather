import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//importstore

import { Store } from '@ngrx/store';

//import our store (reducer /actions)
import * as WeatherStore from '../weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private store: Store<WeatherService.state>) {}

  public weatherForm = new FormGroup({
    city: new FormControl('', Validators.required),
  });

  fetchWeather(formData: FormData) {
    //get value inside formdata
    let city = formData['city'];

    //dispatch the action
    //so we can populate the weather state

    this.store.dispatch(new WeatherStore.FetchWeather(city));
  }

  weatherData;

  ngOnInit() {// get the full stte

  //select from out store using the created store selectors

  this.store.select(WeatherStore.getWeatherStateData).subscribe((state)) => {
    //console.log(data);
    if(Object.keys(state).length !==0){
      this.weatherData = state;
      console.log(this.weatherData)
    }
  }}

}
