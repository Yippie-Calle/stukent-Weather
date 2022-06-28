import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

//import weather reducer
import * as weatherReducer from './weather.reducer';
//register the reducer functions
export interface state {
  weather: weatherReducer.WeatherState;
}

export const reducers: ActionReducerMap<state> = {
  weather: weatherReducer.reducer,
};
//get full state
//export const getweatherState = (state:weatherReducer.weatherState) => state
export const selectWeatherState = createFeatureSelector('weather');

export const getWeatherData = createSelector(
  selectWeatherState,
  weatherReducer.getWeatherData
);

export const getWeatherLoading = createSelector(
  selectWeatherState,
  weatherReducer.getWeatherLoading
);

export const getWeatherLoaded = createSelector(
  selectWeatherState,
  weatherReducer.getWeatherLoaded
);
