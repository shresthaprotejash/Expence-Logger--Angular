import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DataViewService } from '../data/data-view/data-view.service';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css']
})

export class BannerComponent{
     constructor(public dataViewService : DataViewService){
         
     }
    
month_name = function(dt){
let mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return mlist[dt.getMonth()];
};

   
     date = new Date();
     currentMonth = this.month_name(this.date);
}