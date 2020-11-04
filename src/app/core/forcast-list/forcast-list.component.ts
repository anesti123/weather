import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Store } from '@ngrx/store';
import { selectForecast, State } from '../../store/reducers';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forcast-list.component.html',
  styleUrls: ['./forcast-list.component.css']
})
export class ForecastsListComponent {

  forecast: any;

  constructor(private store: Store<State>, public weatherService: WeatherService) {
    this.weatherService.checkButtonState().next(false)
    store.select(selectForecast).subscribe((fcast) => this.forecast = fcast);

  }
}
