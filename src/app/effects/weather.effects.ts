import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';

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
          type: WeatherActions.FETCH_WEATHER_SUCCESS,
          payload: data,
        })),
        catchError((err) => {
          //call the action if there is an error
          return of(new WeatherActions.FETCH_WEATHER_FAIL(err['message']));
        })
      );
    })
  );
}
