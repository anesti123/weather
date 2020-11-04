import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { lightSpeedInAnimation, rubberBandAnimation } from 'angular-animations';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
  animations: [
    lightSpeedInAnimation(),
    rubberBandAnimation(),
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0 }),
        animate(200)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(400, style({ opacity: 0 })))
    ]),
    
  ]
})
export class CurrentConditionsComponent {
  date: Date;
  @Input()
  zipcodes: Array<String>;
  @Input()
  currentConditions: Map<string, any>;
  @Output()
  zipRemoved = new EventEmitter<string>();
  animationState = false
  constructor(public weatherService: WeatherService) {
    this.weatherService.checkButtonState().next(true)
    setInterval(() => {
      this.date = new Date()
    }, 1000)
    this.animationState = true
  }

  getConditions(zip: string) {
    return this.currentConditions.get(zip);
  }


}
