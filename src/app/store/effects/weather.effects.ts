import { Injectable } from '@angular/core';
//import actions and effects
import { Actions, Effect, ofType } from '@ngrx/effects';
//import our actions
import * as weatherActions from '../actions/weather.action';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';

import { WeatherService } from '../weather.service';
//import the service
import { Observable, of } from 'rxjs';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
  @Effect()
  loadedWeather$: Observable<Action> = this.actions$.pipe(
    ofType(weatherActions.FETCH_WEATHER),
    switchMap((action: any) => {
      //must return an observable
      return this.weatherService.getWeatherData(action.payload).pipe(
        //map result
        map((data) => ({
          type: weatherActions.FETCH_WEATHER_SUCCESS,
          payload: data,
        })),
        catchError((err) => {
          //call the action if there is an error
          return of(new weatherActions.FetchWeatherFail(err['message']));
        })
      );
    })
  );
}
