import { Component } from "@angular/core";

export interface Item {
    value: string;
    viewValue: string;
  }

@Component({
    selector: 'app-data-create',
    templateUrl: './data-create.component.html',
    styleUrls: ['./data-create.component.css']
})

export class DataCreateComponent {
    items: Item[] = [
        {value: 'cat1', viewValue: 'Bills'},
        {value: 'cat2', viewValue: 'Entertainment'},
        {value: 'cat3', viewValue: 'Food & Drinks'},
        {value: 'cat4', viewValue: 'Fuel'},
        {value: 'cat5', viewValue: 'Groceries'},
        {value: 'cat6', viewValue: 'Health'},
        {value: 'cat7', viewValue: 'Investment'},
        {value: 'cat0', viewValue: 'Others'}
      ];

}