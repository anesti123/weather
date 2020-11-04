import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()
  zipAdded = new EventEmitter<string>();
  switchButton
  constructor(private _router: Router, public weatherService: WeatherService) {
    //listen if the status of switchButton changed
    this.weatherService.checkButtonState().subscribe(
      res => {
        this.switchButton = res
      },
      err => {
        throw new Error(err)
      });
  }



}
