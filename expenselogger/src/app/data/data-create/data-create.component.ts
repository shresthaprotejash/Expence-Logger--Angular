import { Component } from "@angular/core";
import {FormControl} from '@angular/forms';
import {AppComponent } from 'src/app/app.component';
import {AppService } from 'src/app/app.service';
import {DataViewService } from '../data-view/data-view.service';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

export interface Item {
    value: string;
    viewValue: string;
  }


@Component({
    selector: 'app-data-create',
    templateUrl: './data-create.component.html',
    styleUrls: ['./data-create.component.css'],
    providers: [
        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
        // `MatMomentDateModule` in your applications root module. We provide it at the component level
        // here, due to limitations of our example generation script.
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
      ],
})

export class DataCreateComponent {

    constructor( public appService: AppService, public dataViewService: DataViewService) { }
    flag = 0;
    data = '';
    itemInfo = '';
    amount: number;
    category = '';
    dateSelected = '';
    todayDate = new Date();

    items: Item[] = [
        {value: 'Bills', viewValue: 'Bills'},
        {value: 'Entertainment', viewValue: 'Entertainment'},
        {value: 'Food&Drinks', viewValue: 'Food & Drinks'},
        {value: 'Fuel', viewValue: 'Fuel'},
        {value: 'Groceries', viewValue: 'Groceries'},
        {value: 'Health', viewValue: 'Health'},
        {value: 'Investment', viewValue: 'Investment'},
        {value: 'Others', viewValue: 'Others'}
      ];

    //@Output() messageEvent = new EventEmitter<Item[]>();
    onSaveData(itemInfo, amount, dateSelected, category){
        if(itemInfo.value == '' || amount.value == 0 || category.value == undefined){
            this.data = 'Please fill all the fields to save.';
        }
        else { 
            this.data='received';
            const expense ={
                date: dateSelected.value,
                item: itemInfo.value,
                amount: Number(amount.value),                
                category: category.value
            }
     
           this.appService.data = 0;
             this.dataViewService.items.splice(0, 0, expense);
           console.log(expense);
        }
    }

}