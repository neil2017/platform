import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { HomeComponent } from './home';

import { RouterModule } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {PartsAppComponent} from "./parts-app.component";
import {ROUTER_CONFIG} from "./parts-app.routes";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  providers: [

  ],
  declarations: [
    PartsAppComponent,
    AboutComponent,
    HomeComponent
  ]
})
export class PartsAppModule {
}
