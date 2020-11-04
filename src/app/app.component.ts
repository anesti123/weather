import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddZipcode, RemoveCity } from './store/actions/zipcode.actions';
import { selectCurrentConditionsList, selectZipcodeList, State } from './store/reducers';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  zipcodes: Array<string>;

  currentConditions: Map<string, any>;

  constructor(private store: Store<State>, public weatherService: WeatherService) {
    store.select(selectZipcodeList)
      .subscribe(zips => this.zipcodes = zips);

    store.select(selectCurrentConditionsList)
      .subscribe(conditions => this.currentConditions = conditions);
  }

  addLocation(zipcode: string) {
    this.store.dispatch(new AddZipcode(zipcode));
  }
  removeZip(zip: string) {
    this.store.dispatch(new RemoveCity(zip));
  }
}


