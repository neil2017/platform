import {Routes} from "@angular/router";
import {PartsAppComponent} from "./parts-app.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
export const ROUTER_CONFIG: Routes = [
  {
    path: 'parts', component: PartsAppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/parts/home' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent }
    ]
  }
];
