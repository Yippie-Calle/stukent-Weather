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
//select the part of the state that you need
//using the createFeatureSelector and adding the name of the state slice
export const selectWeatherState = createFeatureSelector('weather');

//get the state slices as needed

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
