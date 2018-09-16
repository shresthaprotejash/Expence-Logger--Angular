import { Component } from "@angular/core";

@Component({
    selector: 'app-data-view',
    templateUrl: './data-view.component.html',
    styleUrls: ['./data-view.component.css']
})

export class DataViewComponent {
    items =[
        {date: "09/16/2018", item: "petrol", category: "Fuel", amount: '500'},
        {date: "09/12/2018", item: "took vegitables at store", category: "Food", amount: '1500'},
        {date: "09/10/2018", item: "Phone emi", category: "EMI", amount: '5000'}

    ]
    
    
    receiveMessage($event){
        this.items.push($event);
    }
} 