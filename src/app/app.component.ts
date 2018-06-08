import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  items = [];
  itemRow;
  constructor(private dataService: DataService) { }
  addItem(name, price) {
    this.dataService.addData(name, price);
  }
  removeItem(i) {
    console.log(this.items[i]);
    // this.dataService.removeData(i);
  }
  ngOnInit() {
    this.items = this.dataService.items;
  }
}
