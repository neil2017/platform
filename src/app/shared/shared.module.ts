import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { DropdownDirective } from './dropdown';
import {PagerComponent} from "./pager/pager.component";
import {AppFooterComponent} from "./app-footer/app-footer.component";
import {AppHeaderComponent} from "./app-header/app-header.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [
    AppFooterComponent,
    AppHeaderComponent,
    DropdownDirective,
    PagerComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    AppFooterComponent,
    AppHeaderComponent,
    DropdownDirective,
    PagerComponent
  ]
})
export class SharedModule {

}
