import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastsListComponent } from './core/forcast-list/forcast-list.component';
import { MainPageComponent } from './core/main-page/main-page.component';


const appRoutes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'forecast/:zipcode', component: ForecastsListComponent
  }
];
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
