import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddZipcode, RemoveCity } from '../../store/actions/zipcode.actions';
import { selectCurrentConditionsList, selectZipcodeList, State } from '../../store/reducers';
import { WeatherService } from '../../services/weather.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

    listOfCity: Array<string>;

    currentConditions: Map<string, any>;

    constructor(private store: Store<State>, public weatherService: WeatherService) {
        store.select(selectZipcodeList)
            .subscribe(citys => this.listOfCity = citys);

        store.select(selectCurrentConditionsList)
            .subscribe(conditions => this.currentConditions = conditions);
    }

    /**
     * @city action
     * dispatch the action in order to remove the stored city
     */
    removeCity(city: string) {
        this.store.dispatch(new RemoveCity(city));
    }
}

