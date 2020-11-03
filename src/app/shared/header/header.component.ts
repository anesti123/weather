import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()
  zipAdded = new EventEmitter<string>();


}
