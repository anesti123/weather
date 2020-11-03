import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './core/main-page/main-page.component';
import { ForcastListComponent } from './core/forcast-list/forcast-list.component';
import { CurrentConditionsComponent } from './core/current-conditions/current-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ForcastListComponent,
    CurrentConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
