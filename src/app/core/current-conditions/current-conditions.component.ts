import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {
  date: Date;
  @Input()
  zipcodes: Array<String>;
  @Input()
  currentConditions: Map<string, any>;
  @Output()
  zipRemoved = new EventEmitter<string>();

  constructor(public weatherService: WeatherService) {
    this.weatherService.checkButtonState().next(true)
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }

  getConditions(zip: string) {
    return this.currentConditions.get(zip);
  }

}
