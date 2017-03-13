import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Platform and Environment providers/directives/pipes


import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {ROUTER_CONFIG} from "./app.routes";
import {SharedModule} from "./shared/shared.module";
import {RouterModule} from "@angular/router";
import {PartsAppModule} from "./parts-app/parts-app.module";
// Application wide providers
const APP_PROVIDERS = [];

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(ROUTER_CONFIG),
    PartsAppModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ...APP_PROVIDERS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
