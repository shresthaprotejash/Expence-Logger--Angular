import { Component, OnInit } from '@angular/core';
import  { AppService } from './app.service';
import  { DataViewService } from './data/data-view/data-view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Work under progress';

constructor (public appService :AppService, public dataViewService: DataViewService){}
OnInit(){
 this.appService.data =0;
 
}

  createData(){
  this.appService.data = 1
  }

  
  
}
