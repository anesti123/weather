import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {LocationService} from "../app/services/location.service";

import {WeatherService} from "../app/services/weather.service";

import { MainPageComponent } from './core/main-page/main-page.component';
import { ForecastsListComponent } from './core/forcast-list/forcast-list.component';
import { CurrentConditionsComponent } from './core/current-conditions/current-conditions.component';
import { HeaderComponent } from './shared/header/header.component';

import {HttpClientModule} from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CurrentConditionsEffects } from '../app/store/effects/current-conditions.effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {ForecastEffects} from '../app/store/effects/forecast.effects';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


@NgModule({
  declarations: [
    AppComponent,
    ForecastsListComponent,
    CurrentConditionsComponent,
    MainPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    // RouterModule.forRoot([]),
    EffectsModule.forRoot([CurrentConditionsEffects, ForecastEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({stateKey: 'router'})
  ],
  entryComponents:[HeaderComponent],
  providers: [LocationService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
