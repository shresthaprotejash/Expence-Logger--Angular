import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material'; 
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

import { HeaderComponent } from './header/header.component';
import { DataViewComponent } from './data/data-view/data-view.component';
import { DataCreateComponent } from './data/data-create/data-create.component';
import { DateCreateDatePickerComponent } from './data/data-create/data-create-datepicker/data-create-datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataViewComponent,
    DataCreateComponent,
    DateCreateDatePickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
