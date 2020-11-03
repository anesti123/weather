import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';
import { ForcastListComponent } from './core/forcast-list/forcast-list.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: MainPageComponent },
  { path: "home", component: MainPageComponent },
  {
    path: 'forecast/:zipcode', component: ForcastListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
