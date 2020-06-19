import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { DisplayTableComponent } from './display-table/display-table.component';
import { DisplayCardComponent } from './display-card/display-card.component';
import { CardTabComponent } from './card-tab/card-tab.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    SearchTableComponent,
    DisplayTableComponent,
    DisplayCardComponent,
    CardTabComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
