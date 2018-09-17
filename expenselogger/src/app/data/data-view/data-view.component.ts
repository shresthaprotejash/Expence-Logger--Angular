import { Component } from "@angular/core";
import  {DataViewService} from './data-view.service';

@Component({
    selector: 'app-data-view',
    templateUrl: './data-view.component.html',
    styleUrls: ['./data-view.component.css']
})

export class DataViewComponent {
  
  constructor (public dataViewService: DataViewService){}
    
  onDelete(i,item){
   // console.log(item);
    //console.log(i);
    this.dataViewService.items.splice(i, 1);
  }
} 