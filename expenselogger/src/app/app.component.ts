import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Work under progress';

  data = 0
  createData(){
    this.data = 1
  }

  get resetData(){
    return this.data;
  }
}
