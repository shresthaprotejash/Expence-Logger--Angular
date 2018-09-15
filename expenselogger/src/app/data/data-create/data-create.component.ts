import { Component } from "@angular/core";
import {FormControl} from '@angular/forms';
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
    data = '';
    itemInfo = '';
    amount = '';
    category = '';
    dateSelected = '';
    date = new FormControl(moment([2017, 0, 1]));

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
    
    onSaveData(itemInfo, amount, dateSelected, category){
        if(itemInfo.value == '' || amount.value == '' || category.value == undefined){
            this.data = 'Please fill all the fields to save.';
        }
        else { 
            this.data = itemInfo.value + amount.value + dateSelected.value + category.value;
        }
    }

}