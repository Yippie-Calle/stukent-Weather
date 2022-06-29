import { Action } from '@ngrx/store';

//action names
export const FETCH_WEATHER = 'fetch_weather';
export const FETCH_WEATHER_FAIL = 'fetch_weather_fail';
export const FETCH_WEATHER_SUCCESS = 'fetch_weather_sucess';

//actions
export class FetchWeather implements Action {
  readonly type = FETCH_WEATHER;

  constructor(public payload: any) {}
}
export class FetchWeatherFail implements Action {
  readonly type = FETCH_WEATHER_FAIL;
  //payload to pass a message
  constructor(public payload: any) {}
}
export class FetchWeatherSuccess implements Action {
  readonly type = FETCH_WEATHER_SUCCESS;
  //payload to match a response
  constructor(public payload: any) {}
}

//export actions
export type WeatherActions =
  | FetchWeather
  | FetchWeatherFail
  | FetchWeatherSuccess;
