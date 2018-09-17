import { Injectable } from '@angular/core';

@Injectable()
export class DataViewService {

  constructor() { }
  items =[
        {date: "09/16/2018", item: "petrol", category: "Fuel", amount: 500},
        {date: "09/12/2018", item: "took vegitables at store", category: "Food", amount: 1500},
        {date: "09/10/2018", item: "Phone emi", category: "EMI", amount: 5000}
    ]

    getTotal(){
       let sumValues = this.items.reduce((acc, pilot) => acc + pilot.amount, 0);
        //console.log(sumValues);
        return sumValues;

    }
    
}