import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';

import { effects } from './effects';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ weather: reducers.weather }),
    EffectsModule.forRoot(effects),
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
