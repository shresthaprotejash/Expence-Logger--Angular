import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { DataViewService } from './data/data-view/data-view.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material'; 
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { DataViewComponent } from './data/data-view/data-view.component';
import { DataCreateComponent } from './data/data-create/data-create.component';
import { BannerComponent} from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataViewComponent,
    DataCreateComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule 
  ],
  providers: [AppService, DataViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
