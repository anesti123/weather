import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';
import { ForecastsListComponent } from './core/forcast-list/forcast-list.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "home", component: MainPageComponent },
  {
    path: 'forecast/:zipcode', component: ForecastsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
